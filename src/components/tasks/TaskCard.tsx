"use client";

import type { Task } from "./types";
import { STATUS_COLORS, PRIORITY_COLORS } from "./types";

interface Props {
  task: Task;
  onClick: () => void;
  isOwner: boolean;
  onToggleStatus: (task: Task) => void;
}

export default function TaskCard({ task, onClick, isOwner, onToggleStatus }: Props) {
  const isDone = task.status === "Done";
  const isCompleted = isDone || task.status === "Archived" || task.status === "See Updated Task";

  function handleCheckbox(e: React.MouseEvent) {
    e.stopPropagation();
    if (!isOwner) return;
    onToggleStatus(task);
  }

  return (
    <div
      onClick={onClick}
      className="group flex items-start gap-3 bg-white border border-stone-100 rounded-xl px-4 py-3 hover:border-stone-200 hover:shadow-sm cursor-pointer transition-all"
    >
      {/* Checkbox (owner only) */}
      <button
        onClick={handleCheckbox}
        className={`mt-0.5 shrink-0 w-4 h-4 rounded border transition-colors flex items-center justify-center ${
          isOwner ? "cursor-pointer" : "cursor-default"
        } ${isCompleted ? "bg-stone-800 border-stone-800" : "border-stone-300 hover:border-stone-400"}`}
      >
        {isCompleted && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="text-xs text-stone-400 shrink-0">#{task.id}</span>
            <p className={`text-sm font-medium text-stone-800 truncate ${isCompleted ? "line-through text-stone-400" : ""}`}>
              {task.title}
            </p>
          </div>
          <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full ${PRIORITY_COLORS[task.priority]}`}>
            {task.priority}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-2">
          <span className={`text-xs px-2 py-0.5 rounded-full ${STATUS_COLORS[task.status]}`}>
            {task.status}
          </span>
          {task.client.map((c) => (
            <span key={c} className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-500">{c}</span>
          ))}
          {task.type.map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">{t}</span>
          ))}
          {task.dueDate && (
            <span className="text-xs text-stone-400">
              Due {new Date(task.dueDate).toLocaleDateString("en-AU", { day: "numeric", month: "short" })}
            </span>
          )}
        </div>

        {task.purpose && (
          <p className="text-xs text-stone-400 mt-1.5 line-clamp-2">{task.purpose}</p>
        )}
      </div>
    </div>
  );
}
