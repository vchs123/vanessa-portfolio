"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { Task, Comment, Role } from "./types";
import {
  STATUS_OPTIONS,
  PRIORITY_OPTIONS,
  TYPE_OPTIONS,
  CLIENT_OPTIONS,
  STATUS_COLORS,
  PRIORITY_COLORS,
} from "./types";
import CommentThread from "./CommentThread";
import SaveIndicator from "./SaveIndicator";
import { updateTask, getComments, generatePurpose, deleteTask } from "./api";

interface Props {
  task: Task;
  allTasks: Task[];
  token: string;
  role: Role;
  onClose: () => void;
  onUpdate: (task: Task) => void;
  onDelete: (id: number) => void;
}

type SaveState = "idle" | "saving" | "saved";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[130px_1fr] gap-2 items-start py-1.5 border-b border-stone-50">
      <span className="text-xs text-stone-400 pt-1">{label}</span>
      <div>{children}</div>
    </div>
  );
}

export default function TaskDrawer({ task: initialTask, allTasks, token, role, onClose, onUpdate, onDelete }: Props) {
  const [task, setTask] = useState<Task>(initialTask);
  const [comments, setComments] = useState<Comment[]>([]);
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [generatingPurpose, setGeneratingPurpose] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isOwner = role === "owner";

  useEffect(() => {
    setTask(initialTask);
  }, [initialTask.id]);

  useEffect(() => {
    getComments(token, task.id).then(setComments).catch(() => {});
  }, [task.id]);

  const save = useCallback(
    async (patch: Partial<Task>) => {
      if (!isOwner) return;
      setSaveState("saving");
      try {
        const updated = await updateTask(token, task.id, patch);
        setTask(updated);
        onUpdate(updated);
        setSaveState("saved");
        setTimeout(() => setSaveState("idle"), 2000);
      } catch {
        setSaveState("idle");
      }
    },
    [token, task.id, isOwner, onUpdate]
  );

  function scheduleAutosave(patch: Partial<Task>) {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => save(patch), 500);
  }

  function update(patch: Partial<Task>) {
    const merged = { ...task, ...patch };
    setTask(merged);
    scheduleAutosave(patch);
  }

  function toggleMulti<K extends "client" | "type">(key: K, value: Task[K][number]) {
    const arr = task[key] as string[];
    const next = arr.includes(value as string)
      ? arr.filter((v) => v !== value)
      : [...arr, value];
    update({ [key]: next } as Partial<Task>);
  }

  async function handleGeneratePurpose() {
    setGeneratingPurpose(true);
    try {
      const purpose = await generatePurpose(token, task.id);
      const merged = { ...task, purpose };
      setTask(merged);
      onUpdate(merged);
    } catch {
      /* ignore */
    } finally {
      setGeneratingPurpose(false);
    }
  }

  async function handleDelete() {
    if (!confirmDelete) { setConfirmDelete(true); return; }
    await deleteTask(token, task.id);
    onDelete(task.id);
    onClose();
  }

  const relatedTasksList = allTasks.filter((t) => task.relatedTasks.includes(t.id));

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-xl bg-white shadow-xl z-50 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-400">#{task.id}</span>
            <SaveIndicator state={saveState} />
          </div>
          <div className="flex items-center gap-3">
            {isOwner && (
              <button
                onClick={handleDelete}
                className={`text-xs transition-colors ${confirmDelete ? "text-red-600 font-medium" : "text-stone-400 hover:text-red-500"}`}
              >
                {confirmDelete ? "Confirm delete?" : "Delete"}
              </button>
            )}
            <button onClick={onClose} className="text-stone-400 hover:text-stone-600">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {/* Title */}
          {isOwner ? (
            <textarea
              value={task.title}
              onChange={(e) => update({ title: e.target.value })}
              className="w-full text-lg font-medium text-stone-800 resize-none focus:outline-none bg-transparent"
              rows={2}
            />
          ) : (
            <h2 className="text-lg font-medium text-stone-800">{task.title}</h2>
          )}

          {/* Fields */}
          <div className="text-sm">
            <Field label="Status">
              {isOwner ? (
                <select
                  value={task.status}
                  onChange={(e) => update({ status: e.target.value as Task["status"] })}
                  className="text-xs border border-stone-200 rounded px-2 py-1 focus:outline-none"
                >
                  {STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
                </select>
              ) : (
                <span className={`text-xs px-2 py-0.5 rounded-full ${STATUS_COLORS[task.status]}`}>{task.status}</span>
              )}
            </Field>

            <Field label="Priority">
              {isOwner ? (
                <select
                  value={task.priority}
                  onChange={(e) => update({ priority: e.target.value as Task["priority"] })}
                  className="text-xs border border-stone-200 rounded px-2 py-1 focus:outline-none"
                >
                  {PRIORITY_OPTIONS.map((p) => <option key={p}>{p}</option>)}
                </select>
              ) : (
                <span className={`text-xs px-2 py-0.5 rounded-full ${PRIORITY_COLORS[task.priority]}`}>{task.priority}</span>
              )}
            </Field>

            <Field label="Client">
              {isOwner ? (
                <div className="flex flex-wrap gap-1">
                  {CLIENT_OPTIONS.map((c) => (
                    <button
                      key={c}
                      onClick={() => toggleMulti("client", c)}
                      className={`text-xs px-2 py-0.5 rounded-full border transition-colors ${
                        task.client.includes(c)
                          ? "bg-stone-800 text-white border-stone-800"
                          : "border-stone-200 text-stone-500 hover:border-stone-400"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-1">
                  {task.client.map((c) => (
                    <span key={c} className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">{c}</span>
                  ))}
                </div>
              )}
            </Field>

            <Field label="Type">
              {isOwner ? (
                <div className="flex flex-wrap gap-1">
                  {TYPE_OPTIONS.map((t) => (
                    <button
                      key={t}
                      onClick={() => toggleMulti("type", t)}
                      className={`text-xs px-2 py-0.5 rounded-full border transition-colors ${
                        task.type.includes(t)
                          ? "bg-blue-600 text-white border-blue-600"
                          : "border-stone-200 text-stone-500 hover:border-stone-400"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-1">
                  {task.type.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">{t}</span>
                  ))}
                </div>
              )}
            </Field>

            <Field label="Assigned To">
              <span className="text-sm text-stone-700">Vanessa</span>
            </Field>

            <Field label="Due Date">
              {isOwner ? (
                <input
                  type="date"
                  value={task.dueDate ?? ""}
                  onChange={(e) => update({ dueDate: e.target.value || null })}
                  className="text-xs border border-stone-200 rounded px-2 py-1 focus:outline-none"
                />
              ) : (
                <span className="text-sm text-stone-600">
                  {task.dueDate ? new Date(task.dueDate).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" }) : "—"}
                </span>
              )}
            </Field>

            <Field label="Date Created">
              <span className="text-sm text-stone-500">
                {new Date(task.dateCreated).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
              </span>
            </Field>

            <Field label="Date Completed">
              {isOwner ? (
                <input
                  type="date"
                  value={task.dateCompleted ?? ""}
                  onChange={(e) => update({ dateCompleted: e.target.value || null })}
                  className="text-xs border border-stone-200 rounded px-2 py-1 focus:outline-none"
                />
              ) : (
                <span className="text-sm text-stone-600">
                  {task.dateCompleted ? new Date(task.dateCompleted).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" }) : "—"}
                </span>
              )}
            </Field>

            <Field label="Team Task">
              {isOwner ? (
                <input
                  type="checkbox"
                  checked={task.teamTask}
                  onChange={(e) => update({ teamTask: e.target.checked })}
                  className="mt-1"
                />
              ) : (
                <span className="text-sm text-stone-600">{task.teamTask ? "Yes" : "No"}</span>
              )}
            </Field>

            <Field label="Impact Area">
              {isOwner ? (
                <input
                  value={task.impactArea ?? ""}
                  onChange={(e) => update({ impactArea: e.target.value || null })}
                  className="w-full text-sm border border-stone-200 rounded px-2 py-1 focus:outline-none"
                  placeholder="e.g. Lead generation"
                />
              ) : (
                <span className="text-sm text-stone-600">{task.impactArea ?? "—"}</span>
              )}
            </Field>

            <Field label="Source">
              {isOwner ? (
                <input
                  value={task.source ?? ""}
                  onChange={(e) => update({ source: e.target.value || null })}
                  className="w-full text-sm border border-stone-200 rounded px-2 py-1 focus:outline-none"
                />
              ) : (
                <span className="text-sm text-stone-600">{task.source ?? "—"}</span>
              )}
            </Field>

            <Field label="Source Request">
              {isOwner ? (
                <input
                  value={task.sourceRequest ?? ""}
                  onChange={(e) => update({ sourceRequest: e.target.value || null })}
                  className="w-full text-sm border border-stone-200 rounded px-2 py-1 focus:outline-none"
                />
              ) : (
                <span className="text-sm text-stone-600">{task.sourceRequest ?? "—"}</span>
              )}
            </Field>

            <Field label="Tools">
              {isOwner ? (
                <input
                  value={task.tools ?? ""}
                  onChange={(e) => update({ tools: e.target.value || null })}
                  className="w-full text-sm border border-stone-200 rounded px-2 py-1 focus:outline-none"
                  placeholder="e.g. Figma, GitHub"
                />
              ) : (
                <span className="text-sm text-stone-600">{task.tools ?? "—"}</span>
              )}
            </Field>

            <Field label="GitHub PR">
              {isOwner ? (
                <input
                  value={task.githubPR ?? ""}
                  onChange={(e) => update({ githubPR: e.target.value || null })}
                  className="w-full text-sm border border-stone-200 rounded px-2 py-1 focus:outline-none font-mono"
                />
              ) : (
                <span className="text-sm text-stone-600 font-mono">{task.githubPR ?? "—"}</span>
              )}
            </Field>

            <Field label="GitHub Status">
              {isOwner ? (
                <input
                  value={task.githubStatus ?? ""}
                  onChange={(e) => update({ githubStatus: e.target.value || null })}
                  className="w-full text-sm border border-stone-200 rounded px-2 py-1 focus:outline-none"
                />
              ) : (
                <span className="text-sm text-stone-600">{task.githubStatus ?? "—"}</span>
              )}
            </Field>

            <Field label="Internal Approval">
              {isOwner ? (
                <input
                  value={task.internalApproval ?? ""}
                  onChange={(e) => update({ internalApproval: e.target.value || null })}
                  className="w-full text-sm border border-stone-200 rounded px-2 py-1 focus:outline-none"
                />
              ) : (
                <span className="text-sm text-stone-600">{task.internalApproval ?? "—"}</span>
              )}
            </Field>

            <Field label="Client Approval">
              {isOwner ? (
                <input
                  value={task.clientApproval ?? ""}
                  onChange={(e) => update({ clientApproval: e.target.value || null })}
                  className="w-full text-sm border border-stone-200 rounded px-2 py-1 focus:outline-none"
                />
              ) : (
                <span className="text-sm text-stone-600">{task.clientApproval ?? "—"}</span>
              )}
            </Field>

            <Field label="Related Events">
              {isOwner ? (
                <input
                  value={task.relatedEvents ?? ""}
                  onChange={(e) => update({ relatedEvents: e.target.value || null })}
                  className="w-full text-sm border border-stone-200 rounded px-2 py-1 focus:outline-none"
                />
              ) : (
                <span className="text-sm text-stone-600">{task.relatedEvents ?? "—"}</span>
              )}
            </Field>

            <Field label="Related Tasks">
              {isOwner ? (
                <div className="space-y-1">
                  <input
                    value={task.relatedTasks.join(", ")}
                    onChange={(e) => {
                      const ids = e.target.value
                        .split(",")
                        .map((s) => parseInt(s.trim()))
                        .filter((n) => !isNaN(n));
                      update({ relatedTasks: ids });
                    }}
                    className="w-full text-sm border border-stone-200 rounded px-2 py-1 focus:outline-none font-mono"
                    placeholder="e.g. 1, 3, 5"
                  />
                  {relatedTasksList.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {relatedTasksList.map((t) => (
                        <span key={t.id} className="text-xs px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                          #{t.id} {t.title}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-wrap gap-1">
                  {relatedTasksList.length === 0 ? (
                    <span className="text-sm text-stone-500">—</span>
                  ) : (
                    relatedTasksList.map((t) => (
                      <span key={t.id} className="text-xs px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                        #{t.id} {t.title}
                      </span>
                    ))
                  )}
                </div>
              )}
            </Field>
          </div>

          {/* Purpose */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-medium tracking-widest text-stone-400 uppercase">Purpose / Reason</h3>
              {isOwner && (
                <button
                  onClick={handleGeneratePurpose}
                  disabled={generatingPurpose}
                  className="text-xs text-stone-400 hover:text-stone-700 flex items-center gap-1 disabled:opacity-40"
                >
                  <span>✦</span>
                  {generatingPurpose ? "Generating…" : "AI generate"}
                </button>
              )}
            </div>
            {isOwner ? (
              <textarea
                value={task.purpose ?? ""}
                onChange={(e) => update({ purpose: e.target.value || null })}
                rows={3}
                className="w-full text-sm border border-stone-200 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-1 focus:ring-stone-300 text-stone-700"
                placeholder="Describe the purpose and impact of this task…"
              />
            ) : (
              <p className="text-sm text-stone-600">{task.purpose ?? "—"}</p>
            )}
          </div>

          {/* Notes */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-medium tracking-widest text-stone-400 uppercase">Notes</h3>
            {isOwner ? (
              <textarea
                value={task.notes ?? ""}
                onChange={(e) => update({ notes: e.target.value || null })}
                rows={4}
                className="w-full text-sm border border-stone-200 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-1 focus:ring-stone-300 text-stone-700"
                placeholder="Any additional notes…"
              />
            ) : (
              <p className="text-sm text-stone-600 whitespace-pre-wrap">{task.notes ?? "—"}</p>
            )}
          </div>

          {/* Comments */}
          <CommentThread
            taskId={task.id}
            comments={comments}
            token={token}
            role={role}
            onAdd={(c) => setComments((prev) => [...prev, c])}
          />

          <p className="text-xs text-stone-300 pb-4">
            Last saved {new Date(task.lastSaved).toLocaleString("en-AU")}
          </p>
        </div>
      </div>
    </>
  );
}
