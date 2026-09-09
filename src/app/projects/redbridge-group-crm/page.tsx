"use client";
import { useLang } from "@/context/LanguageContext";
import { p9 } from "@/lib/content";
import ProjectPageLayout from "@/components/ProjectPageLayout";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

export default function OrganisationPortalPage() {
  const { lang } = useLang();
  const t = p9[lang];
  const stages = (t as typeof p9.en).stages;

  // Default: stages 1–3 open, 4–7 collapsed
  const [open, setOpen] = useState<Record<number, boolean>>({ 1: true, 2: true, 3: true });

  const toggle = (n: number) => setOpen((prev) => ({ ...prev, [n]: !prev[n] }));

  return (
    <ProjectPageLayout
      tag={t.tag}
      title={t.title}
      subtitle={t.subtitle}
      accent={t.accent}
      impact={t.impact}
      tableRows={t.tableRows}
      highlights={t.highlights}
      statsGrid={t.statsGrid}
    >
      {/* Opening statement + status */}
      <FadeIn delay={0.25}>
        <div
          className="rounded-2xl border p-6"
          style={{ backgroundColor: t.accent + "08", borderColor: t.accent + "28" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: "#16a34a18", color: "#16a34a" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
              {lang === "zh" ? "建设中" : "In Build"}
            </span>
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: t.accent + "18", color: t.accent }}
            >
              {lang === "zh" ? "第 3 阶段 / 共 7 阶段" : "Stage 3 of 7"}
            </span>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            {(t as typeof p9.en).openingStatement}
          </p>
        </div>
      </FadeIn>

      {/* Delivery stages */}
      <FadeIn delay={0.35}>
        <div className="mt-10">
          <h2
            className="font-serif text-2xl font-bold mb-6"
            style={{ color: t.accent }}
          >
            {lang === "zh" ? "交付阶段" : "Delivery Stages"}
          </h2>

          <div className="space-y-3">
            {stages.map((stage) => {
              const isComplete = stage.status === "complete";
              const isInBuild = stage.status === "inbuild";
              const isPlanned = stage.status === "planned";
              const isOpen = !!open[stage.number];
              const hasOutcomes = stage.outcomes.length > 0;

              const borderColor = isComplete
                ? "#16a34a28"
                : isInBuild
                ? t.accent + "40"
                : "#e5e7eb";
              const bgColor = isComplete
                ? "#16a34a06"
                : isInBuild
                ? t.accent + "06"
                : "#f9fafb";
              const dotColor = isComplete
                ? "#16a34a"
                : isInBuild
                ? t.accent
                : "#d1d5db";

              return (
                <div
                  key={stage.number}
                  className="rounded-2xl border overflow-hidden"
                  style={{ backgroundColor: bgColor, borderColor }}
                >
                  {/* Header — always visible, clickable */}
                  <button
                    onClick={() => toggle(stage.number)}
                    className="w-full flex items-center gap-3 px-5 py-4 text-left"
                  >
                    {/* Number badge */}
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: dotColor }}
                    >
                      {stage.number}
                    </span>

                    {/* Title */}
                    <span className={`flex-1 font-semibold text-sm ${isPlanned ? "text-gray-400" : "text-gray-900"}`}>
                      {stage.title}
                    </span>

                    {/* Status badge */}
                    {isComplete && (
                      <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 flex-shrink-0">
                        {lang === "zh" ? "已完成" : "Complete"}
                      </span>
                    )}
                    {isInBuild && (
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: t.accent + "14", color: t.accent }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full animate-pulse inline-block"
                          style={{ backgroundColor: t.accent }}
                        />
                        {lang === "zh" ? "建设中" : "In Build"}
                      </span>
                    )}
                    {isPlanned && (
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-400 flex-shrink-0">
                        {lang === "zh" ? "计划中" : "Planned"}
                      </span>
                    )}

                    {/* Chevron — only when there's content to expand */}
                    {hasOutcomes && (
                      <svg
                        className={`w-4 h-4 flex-shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>

                  {/* Outcomes — collapsible */}
                  {hasOutcomes && isOpen && (
                    <ul className="px-5 pb-4 space-y-1.5 pl-[52px]">
                      {stage.outcomes.map((outcome, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                          <span
                            className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full"
                            style={{ backgroundColor: dotColor }}
                          />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </ProjectPageLayout>
  );
}
