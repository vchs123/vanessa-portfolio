export interface Env {
  TASKS_KV: KVNamespace;
  OWNER_PIN: string;
  COMMENTER_PIN: string;
  ANTHROPIC_API_KEY: string;
}

// ─── Types ────────────────────────────────────────────────────────────────────

export type Role = "owner" | "commenter" | "visitor";

export interface Session {
  role: Role;
}

export interface Task {
  id: number;
  title: string;
  client: string[];
  type: string[];
  status: string;
  priority: string;
  teamTask: boolean;
  dueDate: string | null;
  dateCompleted: string | null;
  dateCreated: string;
  lastSaved: string;
  githubPR: string | null;
  githubStatus: string | null;
  clientApproval: string | null;
  internalApproval: string | null;
  impactArea: string | null;
  purpose: string | null;
  notes: string | null;
  source: string | null;
  sourceRequest: string | null;
  tools: string | null;
  relatedEvents: string | null;
  relatedTasks: number[];
  isDeleted: boolean;
  deletedAt: string | null;
}

export interface Comment {
  id: string;
  author: string;
  text: string;
  createdAt: string;
}

export interface VisitorPin {
  pin: string;
  used: boolean;
  createdAt: string;
  usedAt: string | null;
}

// ─── CORS ─────────────────────────────────────────────────────────────────────

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

function err(message: string, status = 400): Response {
  return json({ error: message }, status);
}

// ─── Auth ─────────────────────────────────────────────────────────────────────

async function createSession(env: Env, role: Role, ttlSeconds: number): Promise<string> {
  const token = crypto.randomUUID();
  await env.TASKS_KV.put(`session:${token}`, JSON.stringify({ role }), {
    expirationTtl: ttlSeconds,
  });
  return token;
}

async function getSession(env: Env, request: Request): Promise<Session | null> {
  const auth = request.headers.get("Authorization");
  if (!auth?.startsWith("Bearer ")) return null;
  const token = auth.slice(7);
  const raw = await env.TASKS_KV.get(`session:${token}`);
  if (!raw) return null;
  return JSON.parse(raw) as Session;
}

function requireOwner(session: Session | null): void {
  if (session?.role !== "owner") throw new Response(JSON.stringify({ error: "Owner access required" }), { status: 403, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } });
}

function requireAuth(session: Session | null): void {
  if (!session) throw new Response(JSON.stringify({ error: "Authentication required" }), { status: 401, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } });
}

function requireCommenterOrOwner(session: Session | null): void {
  if (!session || (session.role !== "owner" && session.role !== "commenter")) {
    throw new Response(JSON.stringify({ error: "Commenter or owner access required" }), { status: 403, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } });
  }
}

// ─── KV Helpers ───────────────────────────────────────────────────────────────

async function getIndex(env: Env): Promise<{ ids: number[]; counter: number }> {
  const raw = await env.TASKS_KV.get("tasks:index");
  if (!raw) return { ids: [], counter: 0 };
  return JSON.parse(raw);
}

async function saveIndex(env: Env, index: { ids: number[]; counter: number }): Promise<void> {
  await env.TASKS_KV.put("tasks:index", JSON.stringify(index));
}

async function getTask(env: Env, id: number): Promise<Task | null> {
  const raw = await env.TASKS_KV.get(`task:${id}`);
  if (!raw) return null;
  return JSON.parse(raw) as Task;
}

async function saveTask(env: Env, task: Task): Promise<void> {
  task.lastSaved = new Date().toISOString();
  await env.TASKS_KV.put(`task:${task.id}`, JSON.stringify(task));
}

async function getComments(env: Env, taskId: number): Promise<Comment[]> {
  const raw = await env.TASKS_KV.get(`task:${taskId}:comments`);
  if (!raw) return [];
  return JSON.parse(raw) as Comment[];
}

async function saveComments(env: Env, taskId: number, comments: Comment[]): Promise<void> {
  await env.TASKS_KV.put(`task:${taskId}:comments`, JSON.stringify(comments));
}

async function getPinIndex(env: Env): Promise<string[]> {
  const raw = await env.TASKS_KV.get("visitor-pins:index");
  if (!raw) return [];
  return JSON.parse(raw) as string[];
}

async function getPin(env: Env, pin: string): Promise<VisitorPin | null> {
  const raw = await env.TASKS_KV.get(`visitor-pin:${pin}`);
  if (!raw) return null;
  return JSON.parse(raw) as VisitorPin;
}

// ─── Route Handlers ───────────────────────────────────────────────────────────

async function handleLogin(request: Request, env: Env): Promise<Response> {
  const body = await request.json() as { type: string; pin: string };
  const { type, pin } = body;

  if (type === "owner") {
    if (pin !== env.OWNER_PIN) return err("Invalid PIN", 401);
    const token = await createSession(env, "owner", 60 * 60 * 24 * 30); // 30 days
    return json({ token, role: "owner" });
  }

  if (type === "commenter") {
    if (pin !== env.COMMENTER_PIN) return err("Invalid PIN", 401);
    const token = await createSession(env, "commenter", 60 * 60 * 24 * 7); // 7 days
    return json({ token, role: "commenter" });
  }

  if (type === "visitor") {
    const pinRecord = await getPin(env, pin);
    if (!pinRecord) return err("Invalid visitor PIN", 401);
    if (pinRecord.used) return err("This visitor PIN has already been used", 401);
    // Mark as used
    pinRecord.used = true;
    pinRecord.usedAt = new Date().toISOString();
    await env.TASKS_KV.put(`visitor-pin:${pin}`, JSON.stringify(pinRecord));
    const token = await createSession(env, "visitor", 60 * 60 * 24); // 24 hours
    return json({ token, role: "visitor" });
  }

  return err("Invalid login type");
}

async function handleGetTasks(env: Env, session: Session): Promise<Response> {
  requireAuth(session);
  const index = await getIndex(env);
  const tasks = await Promise.all(
    index.ids.map((id) => getTask(env, id))
  );
  const active = tasks.filter((t): t is Task => t !== null && !t.isDeleted);
  return json(active);
}

async function handleGetTrash(env: Env, session: Session): Promise<Response> {
  requireOwner(session);
  const index = await getIndex(env);
  const tasks = await Promise.all(index.ids.map((id) => getTask(env, id)));
  const deleted = tasks.filter((t): t is Task => t !== null && t.isDeleted);
  return json(deleted);
}

async function handleCreateTask(request: Request, env: Env, session: Session): Promise<Response> {
  requireOwner(session);
  const body = await request.json() as Partial<Task>;
  const index = await getIndex(env);
  const id = index.counter + 1;
  index.counter = id;
  index.ids.push(id);
  await saveIndex(env, index);

  const now = new Date().toISOString();
  const task: Task = {
    id,
    title: body.title ?? "Untitled Task",
    client: body.client ?? [],
    type: body.type ?? [],
    status: body.status ?? "To Do",
    priority: body.priority ?? "Medium",
    teamTask: body.teamTask ?? false,
    dueDate: body.dueDate ?? null,
    dateCompleted: body.dateCompleted ?? null,
    dateCreated: now,
    lastSaved: now,
    githubPR: body.githubPR ?? null,
    githubStatus: body.githubStatus ?? null,
    clientApproval: body.clientApproval ?? null,
    internalApproval: body.internalApproval ?? null,
    impactArea: body.impactArea ?? null,
    purpose: body.purpose ?? null,
    notes: body.notes ?? null,
    source: body.source ?? null,
    sourceRequest: body.sourceRequest ?? null,
    tools: body.tools ?? null,
    relatedEvents: body.relatedEvents ?? null,
    relatedTasks: body.relatedTasks ?? [],
    isDeleted: false,
    deletedAt: null,
  };
  await saveTask(env, task);
  return json(task, 201);
}

async function handleUpdateTask(request: Request, env: Env, session: Session, id: number): Promise<Response> {
  requireOwner(session);
  const task = await getTask(env, id);
  if (!task) return err("Task not found", 404);
  const patch = await request.json() as Partial<Task>;
  const updated = { ...task, ...patch, id, isDeleted: task.isDeleted, deletedAt: task.deletedAt, dateCreated: task.dateCreated };
  await saveTask(env, updated);
  return json(updated);
}

async function handleDeleteTask(env: Env, session: Session, id: number): Promise<Response> {
  requireOwner(session);
  const task = await getTask(env, id);
  if (!task) return err("Task not found", 404);
  task.isDeleted = true;
  task.deletedAt = new Date().toISOString();
  await saveTask(env, task);
  return json({ ok: true });
}

async function handleRestoreTask(env: Env, session: Session, id: number): Promise<Response> {
  requireOwner(session);
  const task = await getTask(env, id);
  if (!task) return err("Task not found", 404);
  task.isDeleted = false;
  task.deletedAt = null;
  await saveTask(env, task);
  return json(task);
}

async function handlePermanentDelete(env: Env, session: Session, id: number): Promise<Response> {
  requireOwner(session);
  const task = await getTask(env, id);
  if (!task || !task.isDeleted) return err("Task not found in trash", 404);
  const index = await getIndex(env);
  index.ids = index.ids.filter((i) => i !== id);
  await saveIndex(env, index);
  await env.TASKS_KV.delete(`task:${id}`);
  await env.TASKS_KV.delete(`task:${id}:comments`);
  return json({ ok: true });
}

async function handleGetComments(env: Env, session: Session, id: number): Promise<Response> {
  requireAuth(session);
  const comments = await getComments(env, id);
  return json(comments);
}

async function handleAddComment(request: Request, env: Env, session: Session, id: number): Promise<Response> {
  requireCommenterOrOwner(session);
  const task = await getTask(env, id);
  if (!task) return err("Task not found", 404);
  const body = await request.json() as { author: string; text: string };
  if (!body.text?.trim()) return err("Comment text required");
  const comment: Comment = {
    id: crypto.randomUUID(),
    author: body.author?.trim() || "Manager",
    text: body.text.trim(),
    createdAt: new Date().toISOString(),
  };
  const comments = await getComments(env, id);
  comments.push(comment);
  await saveComments(env, id, comments);
  return json(comment, 201);
}

async function handleGeneratePurpose(request: Request, env: Env, session: Session, id: number): Promise<Response> {
  requireOwner(session);
  const task = await getTask(env, id);
  if (!task) return err("Task not found", 404);

  const prompt = `You are helping a Head of IT at a professional services group write a concise purpose/impact statement for a task.

Task details:
- Title: ${task.title}
- Client: ${task.client.join(", ") || "Internal"}
- Type: ${task.type.join(", ") || "General"}
- Status: ${task.status}
- Priority: ${task.priority}
- Impact Area: ${task.impactArea || "Not specified"}
- Notes: ${task.notes || "None"}

Write 2-3 sentences explaining the purpose of this task and its organisational or team impact. Be specific, professional, and focus on business value. Do not use bullet points. Do not use phrases like "This task" — start directly with the action or outcome.`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 200,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) return err("AI generation failed", 500);
  const data = await response.json() as { content: { text: string }[] };
  const purpose = data.content[0]?.text?.trim() ?? "";
  task.purpose = purpose;
  await saveTask(env, task);
  return json({ purpose });
}

async function handleListVisitorPins(env: Env, session: Session): Promise<Response> {
  requireOwner(session);
  const pinIds = await getPinIndex(env);
  const pins = await Promise.all(pinIds.map((p) => getPin(env, p)));
  return json(pins.filter(Boolean));
}

async function handleGenerateVisitorPin(env: Env, session: Session): Promise<Response> {
  requireOwner(session);
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const pin = Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  const pinRecord: VisitorPin = {
    pin,
    used: false,
    createdAt: new Date().toISOString(),
    usedAt: null,
  };
  await env.TASKS_KV.put(`visitor-pin:${pin}`, JSON.stringify(pinRecord));
  const pinIds = await getPinIndex(env);
  pinIds.push(pin);
  await env.TASKS_KV.put("visitor-pins:index", JSON.stringify(pinIds));
  return json(pinRecord, 201);
}

async function handleRevokeVisitorPin(env: Env, session: Session, pin: string): Promise<Response> {
  requireOwner(session);
  await env.TASKS_KV.delete(`visitor-pin:${pin}`);
  const pinIds = await getPinIndex(env);
  const updated = pinIds.filter((p) => p !== pin);
  await env.TASKS_KV.put("visitor-pins:index", JSON.stringify(updated));
  return json({ ok: true });
}

// ─── Router ───────────────────────────────────────────────────────────────────

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, "");
    const method = request.method;

    try {
      // Public auth endpoint
      if (path === "/auth/login" && method === "POST") return handleLogin(request, env);

      // All other routes require a session
      const session = await getSession(env, request);

      // Tasks
      if (path === "/tasks" && method === "GET") return handleGetTasks(env, session!);
      if (path === "/tasks" && method === "POST") return handleCreateTask(request, env, session!);
      if (path === "/tasks/trash" && method === "GET") return handleGetTrash(env, session!);

      // Single task
      const taskMatch = path.match(/^\/tasks\/(\d+)$/);
      if (taskMatch) {
        const id = parseInt(taskMatch[1]);
        if (method === "PATCH") return handleUpdateTask(request, env, session!, id);
        if (method === "DELETE") return handleDeleteTask(env, session!, id);
      }

      const restoreMatch = path.match(/^\/tasks\/(\d+)\/restore$/);
      if (restoreMatch && method === "POST") return handleRestoreTask(env, session!, parseInt(restoreMatch[1]));

      const permanentMatch = path.match(/^\/tasks\/(\d+)\/permanent$/);
      if (permanentMatch && method === "DELETE") return handlePermanentDelete(env, session!, parseInt(permanentMatch[1]));

      const commentsMatch = path.match(/^\/tasks\/(\d+)\/comments$/);
      if (commentsMatch) {
        const id = parseInt(commentsMatch[1]);
        if (method === "GET") return handleGetComments(env, session!, id);
        if (method === "POST") return handleAddComment(request, env, session!, id);
      }

      const purposeMatch = path.match(/^\/tasks\/(\d+)\/generate-purpose$/);
      if (purposeMatch && method === "POST") return handleGeneratePurpose(request, env, session!, parseInt(purposeMatch[1]));

      // Visitor pins
      if (path === "/visitor-pins" && method === "GET") return handleListVisitorPins(env, session!);
      if (path === "/visitor-pins" && method === "POST") return handleGenerateVisitorPin(env, session!);
      const revokeMatch = path.match(/^\/visitor-pins\/(.+)$/);
      if (revokeMatch && method === "DELETE") return handleRevokeVisitorPin(env, session!, revokeMatch[1]);

      return err("Not found", 404);
    } catch (e) {
      if (e instanceof Response) return e;
      console.error(e);
      return err("Internal server error", 500);
    }
  },
};
