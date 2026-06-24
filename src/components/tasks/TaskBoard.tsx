"use client";

import { useState, useEffect, useCallback } from "react";
import type { Task, AuthState, Timeline } from "./types";
import { getTimeline } from "./types";
import { getTasks, createTask, updateTask, deleteTask, generateVisitorPin, listVisitorPins, revokeVisitorPin, passkeyRegisterBegin, passkeyRegisterComplete, passkeyDelete } from "./api";
import type { VisitorPin } from "./types";

interface VisitorRequest {
  id: string;
  name: string;
  email: string;
  note: string;
  createdAt: string;
  handled: boolean;
}
import FilterBar from "./FilterBar";
import type { Filters } from "./FilterBar";
import TaskCard from "./TaskCard";
import TaskDrawer from "./TaskDrawer";

interface Props {
  auth: AuthState;
  onLogout: () => void;
}

export default function TaskBoard({ auth, onLogout }: Props) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<Timeline>("current");
  const [filters, setFilters] = useState<Filters>({ client: "", type: "", priority: "", search: "" });
  const [selected, setSelected] = useState<Task | null>(null);
  const [creating, setCreating] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [pins, setPins] = useState<VisitorPin[]>([]);
  const [showPins, setShowPins] = useState(false);
  const [requests, setRequests] = useState<VisitorRequest[]>([]);
  const [showRequests, setShowRequests] = useState(false);
  const [passkeyRegistering, setPasskeyRegistering] = useState(false);
  const [passkeyMsg, setPasskeyMsg] = useState("");
  const isOwner = auth.role === "owner";

  useEffect(() => {
    getTasks(auth.token)
      .then(setTasks)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [auth.token]);

  const filtered = tasks.filter((t) => {
    if (tab !== "all" && getTimeline(t) !== tab) return false;
    if (filters.client && !t.client.includes(filters.client as Task["client"][number])) return false;
    if (filters.type && !t.type.includes(filters.type as Task["type"][number])) return false;
    if (filters.priority && t.priority !== filters.priority) return false;
    if (filters.search) {
      const q = filters.search.toLowerCase();
      if (!t.title.toLowerCase().includes(q) && !(t.notes ?? "").toLowerCase().includes(q)) return false;
    }
    return true;
  });

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const task = await createTask(auth.token, { title: newTitle.trim() });
    setTasks((prev) => [task, ...prev]);
    setNewTitle("");
    setCreating(false);
    setSelected(task);
  }

  function handleUpdate(updated: Task) {
    setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    if (selected?.id === updated.id) setSelected(updated);
  }

  async function handleToggleStatus(task: Task) {
    const isDone = task.status === "Done";
    const patch = { status: isDone ? ("To Do" as Task["status"]) : ("Done" as Task["status"]) };
    const updated = await updateTask(auth.token, task.id, patch);
    handleUpdate(updated);
  }

  async function handleDelete(id: number) {
    await deleteTask(auth.token, id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  async function loadPins() {
    const p = await listVisitorPins(auth.token);
    setPins(p);
    setShowPins(true);
  }

  async function loadRequests() {
    const BASE = process.env.NEXT_PUBLIC_TASKS_API_URL ?? "https://tasks-api.vanessachs-work.workers.dev";
    const res = await fetch(`${BASE}/visitor-requests`, {
      headers: { Authorization: `Bearer ${auth.token}` },
    });
    if (res.ok) {
      const data = await res.json() as VisitorRequest[];
      setRequests(data);
      setShowRequests(true);
    }
  }

  async function handleRegisterPasskey() {
    setPasskeyRegistering(true);
    setPasskeyMsg("");
    try {
      const opts = await passkeyRegisterBegin(auth.token);
      const b64uToBuf = (b64: string) => {
        const padded = b64.replace(/-/g, "+").replace(/_/g, "/");
        const bin = atob(padded);
        const buf = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
        return buf.buffer;
      };
      const bufToB64u = (buf: ArrayBuffer) => {
        const bytes = new Uint8Array(buf);
        let bin = "";
        for (const b of bytes) bin += String.fromCharCode(b);
        return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      };
      const cred = await navigator.credentials.create({
        publicKey: {
          challenge: b64uToBuf(opts.challenge),
          rp: opts.rp,
          user: { id: b64uToBuf(opts.user.id), name: opts.user.name, displayName: opts.user.displayName },
          pubKeyCredParams: opts.pubKeyCredParams as PublicKeyCredentialParameters[],
          timeout: opts.timeout,
          authenticatorSelection: opts.authenticatorSelection as AuthenticatorSelectionCriteria,
        },
      }) as PublicKeyCredential | null;
      if (!cred) throw new Error("Registration cancelled");
      const resp = cred.response as AuthenticatorAttestationResponse;
      const publicKeyBuf = resp.getPublicKey();
      if (!publicKeyBuf) throw new Error("Could not extract public key");
      await passkeyRegisterComplete(auth.token, {
        id: cred.id,
        clientDataJSON: bufToB64u(resp.clientDataJSON),
        publicKey: bufToB64u(publicKeyBuf),
      });
      setPasskeyMsg("Biometric registered ✓ — you can now use Face ID / Touch ID to log in.");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Registration failed";
      if (!msg.includes("cancelled") && !msg.includes("NotAllowedError")) setPasskeyMsg(`Failed: ${msg}`);
    } finally {
      setPasskeyRegistering(false);
    }
  }

  async function handleRemovePasskey() {
    if (!confirm("Remove biometric login? You'll need to use your PIN next time.")) return;
    await passkeyDelete(auth.token);
    setPasskeyMsg("Biometric removed.");
  }

  async function markHandled(id: string) {
    const BASE = process.env.NEXT_PUBLIC_TASKS_API_URL ?? "https://tasks-api.vanessachs-work.workers.dev";
    await fetch(`${BASE}/visitor-requests/${id}/handled`, {
      method: "POST",
      headers: { Authorization: `Bearer ${auth.token}` },
    });
    setRequests((prev) => prev.map((r) => r.id === id ? { ...r, handled: true } : r));
  }

  async function handleGeneratePin() {
    const pin = await generateVisitorPin(auth.token);
    setPins((prev) => [pin, ...prev]);
  }

  async function handleRevokePin(pin: string) {
    await revokeVisitorPin(auth.token, pin);
    setPins((prev) => prev.filter((p) => p.pin !== pin));
  }

  const tabCounts: Record<Timeline, number> = {
    current: tasks.filter((t) => getTimeline(t) === "current").length,
    past: tasks.filter((t) => getTimeline(t) === "past").length,
    future: tasks.filter((t) => getTimeline(t) === "future").length,
    all: tasks.length,
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Top bar */}
      <div className="bg-white border-b border-stone-100 px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs tracking-widest text-stone-400 uppercase">Vanessa Chua</p>
          <h1 className="text-lg font-light text-stone-800">Tasks</h1>
        </div>
        <div className="flex items-center gap-3">
          {isOwner && (
            <>
              <button
                onClick={() => (showRequests ? setShowRequests(false) : loadRequests())}
                className="text-xs text-stone-400 hover:text-stone-700 border border-stone-200 rounded px-3 py-1.5 relative"
              >
                Access Requests
                {requests.filter((r) => !r.handled).length > 0 && (
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full text-white text-[9px] flex items-center justify-center">
                    {requests.filter((r) => !r.handled).length}
                  </span>
                )}
              </button>
              <button
                onClick={() => (showPins ? setShowPins(false) : loadPins())}
                className="text-xs text-stone-400 hover:text-stone-700 border border-stone-200 rounded px-3 py-1.5"
              >
                Visitor PINs
              </button>
              <a href="/tasks/trash" className="text-xs text-stone-400 hover:text-stone-700 border border-stone-200 rounded px-3 py-1.5">
                Trash
              </a>
            </>
          )}
          {isOwner && typeof window !== "undefined" && window.PublicKeyCredential && (
            <button
              onClick={handleRegisterPasskey}
              disabled={passkeyRegistering}
              title="Set up Face ID / Touch ID / fingerprint login"
              className="text-xs text-stone-400 hover:text-stone-700 border border-stone-200 rounded px-3 py-1.5 disabled:opacity-40"
            >
              {passkeyRegistering ? "Setting up…" : "⁺ Biometric"}
            </button>
          )}
          <span className="text-xs text-stone-400 capitalize">{auth.role}</span>
          <button onClick={onLogout} className="text-xs text-stone-400 hover:text-red-500">Sign out</button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-5">
        {/* Passkey status message */}
        {passkeyMsg && (
          <div className={`text-xs px-4 py-2 rounded-lg ${passkeyMsg.startsWith("Failed") ? "bg-red-50 text-red-600" : "bg-green-50 text-green-700"}`}>
            {passkeyMsg}
            {passkeyMsg.includes("✓") && (
              <button onClick={handleRemovePasskey} className="ml-2 underline opacity-60 hover:opacity-100">Remove</button>
            )}
          </div>
        )}

        {/* Access requests panel */}
        {isOwner && showRequests && (
          <div className="bg-white border border-stone-200 rounded-xl p-4 space-y-3">
            <h2 className="text-sm font-medium text-stone-700">Visitor Access Requests</h2>
            {requests.length === 0 && <p className="text-sm text-stone-400">No requests yet.</p>}
            {requests.map((r) => (
              <div key={r.id} className={`flex items-start justify-between gap-4 text-sm py-2 border-b border-stone-50 last:border-0 ${r.handled ? "opacity-50" : ""}`}>
                <div className="min-w-0">
                  <p className="font-medium text-stone-800">{r.name}</p>
                  <a href={`mailto:${r.email}`} className="text-stone-500 hover:text-stone-700 text-xs">{r.email}</a>
                  {r.note && <p className="text-xs text-stone-400 mt-0.5 italic">"{r.note}"</p>}
                  <p className="text-xs text-stone-300 mt-0.5">
                    {new Date(r.createdAt).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}
                  </p>
                </div>
                {!r.handled ? (
                  <button
                    onClick={() => markHandled(r.id)}
                    className="shrink-0 text-xs text-stone-400 hover:text-stone-700 border border-stone-200 rounded px-2 py-1 hover:border-stone-400"
                  >
                    Mark handled
                  </button>
                ) : (
                  <span className="shrink-0 text-xs text-green-600">✓ Handled</span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Visitor PIN panel */}
        {isOwner && showPins && (
          <div className="bg-white border border-stone-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-stone-700">Visitor PINs</h2>
              <button
                onClick={handleGeneratePin}
                className="text-xs bg-stone-800 text-white px-3 py-1.5 rounded hover:bg-stone-700"
              >
                + Generate PIN
              </button>
            </div>
            {pins.length === 0 && <p className="text-sm text-stone-400">No PINs yet.</p>}
            {pins.map((p) => (
              <div key={p.pin} className="flex items-center justify-between text-sm">
                <div>
                  <span className="font-mono text-stone-800">{p.pin}</span>
                  <span className={`ml-2 text-xs ${p.used ? "text-stone-400" : "text-green-600"}`}>
                    {p.used ? `Used ${new Date(p.usedAt!).toLocaleDateString("en-AU")}` : "Available"}
                  </span>
                </div>
                <button onClick={() => handleRevokePin(p.pin)} className="text-xs text-stone-400 hover:text-red-500">
                  Revoke
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Filter bar */}
        <FilterBar
          tab={tab}
          onTabChange={setTab}
          filters={filters}
          onFiltersChange={setFilters}
        />

        {/* Task count */}
        <p className="text-xs text-stone-400">
          {filtered.length} of {tabCounts[tab]} {tab} tasks
        </p>

        {/* New task form */}
        {isOwner && (
          creating ? (
            <form onSubmit={handleCreate} className="flex gap-2">
              <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                autoFocus
                placeholder="Task title…"
                className="flex-1 border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-stone-400"
              />
              <button type="submit" className="bg-stone-800 text-white px-4 py-2.5 rounded-lg text-sm hover:bg-stone-700">
                Add
              </button>
              <button type="button" onClick={() => setCreating(false)} className="text-stone-400 px-3 text-sm">
                Cancel
              </button>
            </form>
          ) : (
            <button
              onClick={() => setCreating(true)}
              className="w-full border border-dashed border-stone-200 rounded-xl py-3 text-sm text-stone-400 hover:border-stone-400 hover:text-stone-600 transition-colors"
            >
              + New task
            </button>
          )
        )}

        {/* Task list */}
        {loading ? (
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl h-20 animate-pulse border border-stone-100" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <p className="text-sm text-stone-400 text-center py-12">No {tab} tasks{filters.search || filters.client || filters.type || filters.priority ? " matching filters" : ""}.</p>
        ) : (
          <div className="space-y-2">
            {filtered.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onClick={() => setSelected(task)}
                isOwner={isOwner}
                onToggleStatus={handleToggleStatus}
              />
            ))}
          </div>
        )}
      </div>

      {/* Task drawer */}
      {selected && (
        <TaskDrawer
          task={selected}
          allTasks={tasks}
          token={auth.token}
          role={auth.role}
          onClose={() => setSelected(null)}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
