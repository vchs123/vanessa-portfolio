"use client";

import { useState, useMemo } from "react";
import type { Task } from "./types";

interface Props {
  tasks: Task[];
  onSelect: (task: Task) => void;
}

type ChipStyle = { bg: string; text: string; border: string; dot: string };

const DONE: ChipStyle    = { bg: "bg-emerald-50",  text: "text-emerald-700", border: "border-emerald-200", dot: "bg-emerald-500" };
const OVERDUE: ChipStyle = { bg: "bg-red-50",      text: "text-red-700",     border: "border-red-200",     dot: "bg-red-500"     };
const UPCOMING: ChipStyle= { bg: "bg-orange-50",   text: "text-orange-700",  border: "border-orange-200",  dot: "bg-orange-500"  };
const NODATE: ChipStyle  = { bg: "bg-stone-100",   text: "text-stone-500",   border: "border-stone-200",   dot: "bg-stone-400"   };

function getStyle(task: Task, todayStr: string): ChipStyle {
  if (task.status === "Done" || task.status === "Archived") return DONE;
  if (task.dueDate) return task.dueDate < todayStr ? OVERDUE : UPCOMING;
  return NODATE;
}

function getCalendarDate(task: Task): string {
  if (task.status === "Done" || task.status === "Archived") {
    return task.dateCompleted ?? task.dateCreated;
  }
  return task.dueDate ?? task.dateCreated;
}

function toDateStr(d: Date): string {
  return d.toISOString().split("T")[0];
}

const DAY_HEADERS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function TaskCalendar({ tasks, onSelect }: Props) {
  const [month, setMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [expandedDay, setExpandedDay] = useState<string | null>(null);

  const todayStr = toDateStr(new Date());

  const tasksByDate = useMemo(() => {
    const map = new Map<string, Task[]>();
    for (const task of tasks) {
      if (task.isDeleted) continue;
      const key = getCalendarDate(task).slice(0, 10);
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(task);
    }
    return map;
  }, [tasks]);

  const calendarDays = useMemo(() => {
    const year = month.getFullYear();
    const mo = month.getMonth();
    const firstDay = new Date(year, mo, 1).getDay();
    const daysInMonth = new Date(year, mo + 1, 0).getDate();
    const prevMonthDays = new Date(year, mo, 0).getDate();

    const days: { date: Date; isCurrentMonth: boolean }[] = [];

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({ date: new Date(year, mo - 1, prevMonthDays - i), isCurrentMonth: false });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      days.push({ date: new Date(year, mo, d), isCurrentMonth: true });
    }
    const remaining = 42 - days.length;
    for (let d = 1; d <= remaining; d++) {
      days.push({ date: new Date(year, mo + 1, d), isCurrentMonth: false });
    }

    return days;
  }, [month]);

  function prevMonth() {
    setMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1));
    setExpandedDay(null);
  }
  function nextMonth() {
    setMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1));
    setExpandedDay(null);
  }
  function goToday() {
    const now = new Date();
    setMonth(new Date(now.getFullYear(), now.getMonth(), 1));
    setExpandedDay(null);
  }

  const monthLabel = month.toLocaleDateString("en-AU", { month: "long", year: "numeric" });

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={prevMonth}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-stone-200 text-stone-500 hover:bg-stone-100 text-sm"
          >
            ‹
          </button>
          <span className="text-sm font-medium text-stone-800 w-36 text-center">{monthLabel}</span>
          <button
            onClick={nextMonth}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-stone-200 text-stone-500 hover:bg-stone-100 text-sm"
          >
            ›
          </button>
          <button
            onClick={goToday}
            className="text-xs text-stone-500 hover:text-stone-800 border border-stone-200 rounded px-2 py-1 hover:bg-stone-100 ml-1"
          >
            Today
          </button>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-xs text-stone-500">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />Done</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500 inline-block" />Upcoming</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500 inline-block" />Overdue</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-stone-400 inline-block" />No date</span>
        </div>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 border-l border-t border-stone-100">
        {DAY_HEADERS.map((d) => (
          <div key={d} className="border-r border-b border-stone-100 py-2 text-center text-xs font-medium text-stone-400">
            {d}
          </div>
        ))}

        {/* Day cells */}
        {calendarDays.map(({ date, isCurrentMonth }) => {
          const dateStr = toDateStr(date);
          const dayTasks = tasksByDate.get(dateStr) ?? [];
          const isToday = dateStr === todayStr;
          const isExpanded = expandedDay === dateStr;
          const visible = isExpanded ? dayTasks : dayTasks.slice(0, 3);
          const overflow = dayTasks.length - 3;

          return (
            <div
              key={dateStr}
              className={`border-r border-b border-stone-100 p-1.5 min-h-[80px] sm:min-h-[100px] flex flex-col gap-1 ${
                isCurrentMonth ? "bg-white" : "bg-stone-50/60"
              }`}
            >
              {/* Date number */}
              <div className="flex justify-end">
                {isToday ? (
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-stone-800 text-white text-xs font-semibold">
                    {date.getDate()}
                  </span>
                ) : (
                  <span className={`text-xs ${isCurrentMonth ? "text-stone-400" : "text-stone-300"}`}>
                    {date.getDate()}
                  </span>
                )}
              </div>

              {/* Task chips */}
              {visible.map((task) => {
                const s = getStyle(task, todayStr);
                return (
                  <button
                    key={task.id}
                    onClick={() => onSelect(task)}
                    title={task.title}
                    className={`w-full text-left text-[11px] leading-snug truncate rounded border px-1.5 py-0.5 flex items-center gap-1 hover:opacity-75 transition-opacity ${s.bg} ${s.text} ${s.border}`}
                  >
                    <span className={`shrink-0 w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    <span className="truncate">{task.title}</span>
                  </button>
                );
              })}

              {/* Overflow / collapse */}
              {!isExpanded && overflow > 0 && (
                <button
                  onClick={() => setExpandedDay(dateStr)}
                  className="text-[11px] text-stone-400 hover:text-stone-600 text-left pl-1"
                >
                  +{overflow} more
                </button>
              )}
              {isExpanded && dayTasks.length > 3 && (
                <button
                  onClick={() => setExpandedDay(null)}
                  className="text-[11px] text-stone-400 hover:text-stone-600 text-left pl-1"
                >
                  Show less
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
