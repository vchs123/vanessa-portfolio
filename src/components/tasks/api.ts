import type { Task, Comment, VisitorPin } from "./types";

const BASE = process.env.NEXT_PUBLIC_TASKS_API_URL ?? "https://tasks-api.vanessachs-work.workers.dev";

async function request<T>(path: string, token: string | null, options: RequestInit = {}): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${BASE}${path}`, { ...options, headers });
  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error((body as { error: string }).error ?? "Request failed");
  }
  return res.json() as Promise<T>;
}

export async function login(type: "owner" | "commenter" | "visitor", pin: string) {
  return request<{ token: string; role: string }>("/auth/login", null, {
    method: "POST",
    body: JSON.stringify({ type, pin }),
  });
}

export async function getTasks(token: string): Promise<Task[]> {
  return request<Task[]>("/tasks", token);
}

export async function createTask(token: string, data: Partial<Task>): Promise<Task> {
  return request<Task>("/tasks", token, { method: "POST", body: JSON.stringify(data) });
}

export async function updateTask(token: string, id: number, patch: Partial<Task>): Promise<Task> {
  return request<Task>(`/tasks/${id}`, token, { method: "PATCH", body: JSON.stringify(patch) });
}

export async function deleteTask(token: string, id: number): Promise<void> {
  await request("/tasks/" + id, token, { method: "DELETE" });
}

export async function getTrash(token: string): Promise<Task[]> {
  return request<Task[]>("/tasks/trash", token);
}

export async function restoreTask(token: string, id: number): Promise<Task> {
  return request<Task>(`/tasks/${id}/restore`, token, { method: "POST" });
}

export async function permanentDelete(token: string, id: number): Promise<void> {
  await request(`/tasks/${id}/permanent`, token, { method: "DELETE" });
}

export async function getComments(token: string, taskId: number): Promise<Comment[]> {
  return request<Comment[]>(`/tasks/${taskId}/comments`, token);
}

export async function addComment(token: string, taskId: number, author: string, text: string): Promise<Comment> {
  return request<Comment>(`/tasks/${taskId}/comments`, token, {
    method: "POST",
    body: JSON.stringify({ author, text }),
  });
}

export async function generatePurpose(token: string, taskId: number): Promise<string> {
  const res = await request<{ purpose: string }>(`/tasks/${taskId}/generate-purpose`, token, { method: "POST" });
  return res.purpose;
}

export async function listVisitorPins(token: string): Promise<VisitorPin[]> {
  return request<VisitorPin[]>("/visitor-pins", token);
}

export async function generateVisitorPin(token: string): Promise<VisitorPin> {
  return request<VisitorPin>("/visitor-pins", token, { method: "POST" });
}

export async function revokeVisitorPin(token: string, pin: string): Promise<void> {
  await request(`/visitor-pins/${pin}`, token, { method: "DELETE" });
}

export async function passkeyStatus(): Promise<{ registered: boolean }> {
  return request<{ registered: boolean }>("/auth/passkey/status", null);
}

export async function passkeyLoginBegin(): Promise<{ challenge: string; allowCredentials: { type: string; id: string }[]; userVerification: string; timeout: number; hasCredentials: boolean }> {
  return request("/auth/passkey/login/begin", null, { method: "POST" });
}

export async function passkeyLoginComplete(payload: { id: string; clientDataJSON: string; authenticatorData: string; signature: string }): Promise<{ token: string; role: string }> {
  return request("/auth/passkey/login/complete", null, { method: "POST", body: JSON.stringify(payload) });
}

export async function passkeyRegisterBegin(token: string): Promise<{ challenge: string; rp: { name: string }; user: { id: string; name: string; displayName: string }; pubKeyCredParams: { alg: number; type: string }[]; timeout: number; authenticatorSelection: object }> {
  return request("/auth/passkey/register/begin", token, { method: "POST" });
}

export async function passkeyRegisterComplete(token: string, payload: { id: string; clientDataJSON: string; publicKey: string }): Promise<void> {
  await request("/auth/passkey/register/complete", token, { method: "POST", body: JSON.stringify(payload) });
}

export async function passkeyDelete(token: string): Promise<void> {
  await request("/auth/passkey/delete", token, { method: "DELETE" });
}
