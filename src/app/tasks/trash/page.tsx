"use client";

import { useState, useEffect } from "react";
import { getTrash, restoreTask, permanentDelete } from "@/components/tasks/api";
import type { Task } from "@/components/tasks/types";

const SESSION_KEY = "tasks_auth";

function getToken(): string | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { token: string; role: string };
    return parsed.role === "owner" ? parsed.token : null;
  } catch {
    return null;
  }
}

export default function TrashPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setError("Owner access required. Sign in from /tasks first.");
      setLoading(false);
      return;
    }
    getTrash(token)
      .then(setTasks)
      .catch(() => setError("Failed to load trash."))
      .finally(() => setLoading(false));
  }, []);

  async function handleRestore(id: number) {
    const token = getToken();
    if (!token) return;
    const restored = await restoreTask(token, id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
    alert(`Task #${restored.id} restored.`);
  }

  async function handlePermanentDelete(id: number) {
    if (!confirm(`Permanently delete task #${id}? This cannot be undone.`)) return;
    const token = getToken();
    if (!token) return;
    await permanentDelete(token, id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-white border-b border-stone-100 px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs tracking-widest text-stone-400 uppercase">Vanessa Chua</p>
          <h1 className="text-lg font-light text-stone-800">Trash</h1>
        </div>
        <a href="/tasks" className="text-xs text-stone-400 hover:text-stone-700 border border-stone-200 rounded px-3 py-1.5">
          ← Back to Tasks
        </a>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        {loading && (
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl h-16 animate-pulse border border-stone-100" />
            ))}
          </div>
        )}

        {error && <p className="text-sm text-red-500">{error}</p>}

        {!loading && !error && tasks.length === 0 && (
          <p className="text-sm text-stone-400 text-center py-12">Trash is empty.</p>
        )}

        {!loading && !error && tasks.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs text-stone-400 mb-3">{tasks.length} deleted task{tasks.length !== 1 ? "s" : ""}</p>
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white border border-stone-100 rounded-xl px-4 py-3 flex items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-stone-400">#{task.id}</span>
                    <p className="text-sm text-stone-500 line-through truncate">{task.title}</p>
                  </div>
                  {task.deletedAt && (
                    <p className="text-xs text-stone-400 mt-0.5">
                      Deleted {new Date(task.deletedAt).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}
                    </p>
                  )}
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => handleRestore(task.id)}
                    className="text-xs text-stone-600 hover:text-stone-900 border border-stone-200 rounded px-3 py-1.5 hover:border-stone-400 transition-colors"
                  >
                    Restore
                  </button>
                  <button
                    onClick={() => handlePermanentDelete(task.id)}
                    className="text-xs text-red-400 hover:text-red-600 border border-red-100 rounded px-3 py-1.5 hover:border-red-300 transition-colors"
                  >
                    Delete forever
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
