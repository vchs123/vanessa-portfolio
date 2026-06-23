"use client";

import { useState } from "react";
import type { Comment } from "./types";
import type { Role } from "./types";
import { addComment } from "./api";

interface Props {
  taskId: number;
  comments: Comment[];
  token: string;
  role: Role;
  onAdd: (comment: Comment) => void;
}

function formatTime(iso: string) {
  return new Date(iso).toLocaleString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function CommentThread({ taskId, comments, token, role, onAdd }: Props) {
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const canComment = role === "owner" || role === "commenter";
  const authorLabel = role === "owner" ? "Vanessa" : "Manager";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    setSending(true);
    setError("");
    try {
      const comment = await addComment(token, taskId, authorLabel, text.trim());
      onAdd(comment);
      setText("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xs font-medium tracking-widest text-stone-400 uppercase">Comments</h3>

      {comments.length === 0 && (
        <p className="text-sm text-stone-400 italic">No comments yet.</p>
      )}

      <div className="space-y-3">
        {comments.map((c) => (
          <div key={c.id} className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-stone-200 flex items-center justify-center text-xs font-medium text-stone-600 shrink-0 mt-0.5">
              {c.author[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-medium text-stone-700">{c.author}</span>
                <span className="text-xs text-stone-400">{formatTime(c.createdAt)}</span>
              </div>
              <p className="text-sm text-stone-600 mt-0.5 whitespace-pre-wrap">{c.text}</p>
            </div>
          </div>
        ))}
      </div>

      {canComment && (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={`Add a comment as ${authorLabel}…`}
            rows={2}
            className="flex-1 border border-stone-200 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-stone-300"
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleSubmit(e);
            }}
          />
          <button
            type="submit"
            disabled={sending || !text.trim()}
            className="self-end px-3 py-2 bg-stone-800 text-white text-sm rounded-lg hover:bg-stone-700 disabled:opacity-40 transition-colors"
          >
            {sending ? "…" : "Send"}
          </button>
        </form>
      )}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
