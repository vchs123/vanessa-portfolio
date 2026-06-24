"use client";

import { CLIENT_OPTIONS, TYPE_OPTIONS, PRIORITY_OPTIONS } from "./types";
import type { TaskClient, TaskType, TaskPriority, Timeline } from "./types";

export interface Filters {
  client: TaskClient | "";
  type: TaskType | "";
  priority: TaskPriority | "";
  search: string;
}

interface Props {
  tab: Timeline;
  onTabChange: (t: Timeline) => void;
  filters: Filters;
  onFiltersChange: (f: Filters) => void;
}

export default function FilterBar({ tab, onTabChange, filters, onFiltersChange }: Props) {
  const tabs: Timeline[] = ["current", "past", "future", "all"];

  function set(key: keyof Filters, value: string) {
    onFiltersChange({ ...filters, [key]: value });
  }

  return (
    <div className="space-y-3">
      {/* Tabs */}
      <div className="flex gap-1 border-b border-stone-200">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => onTabChange(t)}
            className={`px-4 py-2 text-sm capitalize transition-colors border-b-2 -mb-px ${
              tab === t
                ? "border-stone-800 text-stone-800 font-medium"
                : "border-transparent text-stone-400 hover:text-stone-600"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 items-center">
        <input
          type="text"
          placeholder="Search tasks…"
          value={filters.search}
          onChange={(e) => set("search", e.target.value)}
          className="border border-stone-200 rounded px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-stone-300 w-48"
        />

        <select
          value={filters.client}
          onChange={(e) => set("client", e.target.value)}
          className="border border-stone-200 rounded px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-stone-300 text-stone-600"
        >
          <option value="">All clients</option>
          {CLIENT_OPTIONS.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select
          value={filters.type}
          onChange={(e) => set("type", e.target.value)}
          className="border border-stone-200 rounded px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-stone-300 text-stone-600"
        >
          <option value="">All types</option>
          {TYPE_OPTIONS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <select
          value={filters.priority}
          onChange={(e) => set("priority", e.target.value)}
          className="border border-stone-200 rounded px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-stone-300 text-stone-600"
        >
          <option value="">All priorities</option>
          {PRIORITY_OPTIONS.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>

        {(filters.client || filters.type || filters.priority || filters.search) && (
          <button
            onClick={() => onFiltersChange({ client: "", type: "", priority: "", search: "" })}
            className="text-xs text-stone-400 hover:text-stone-600 underline"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
