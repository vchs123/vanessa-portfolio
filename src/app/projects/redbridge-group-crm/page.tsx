"use client";
import { useLang } from "@/context/LanguageContext";
import { p9 } from "@/lib/content";
import ProjectPageLayout from "@/components/ProjectPageLayout";
import FadeIn from "@/components/FadeIn";

export default function OrganisationPortalPage() {
  const { lang } = useLang();
  const t = p9[lang];
  const stages = (t as typeof p9.en).stages;

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
          className="rounded-2xl border p-6 flex flex-col sm:flex-row gap-5"
          style={{ backgroundColor: t.accent + "08", borderColor: t.accent + "28" }}
        >
          <div className="flex-1">
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

          <div className="space-y-4">
            {stages.map((stage, i) => {
              const isComplete = stage.status === "complete";
              const isInBuild = stage.status === "inbuild";

              return (
                <div
                  key={i}
                  className="rounded-2xl border p-5"
                  style={{
                    backgroundColor: isComplete
                      ? "#16a34a08"
                      : isInBuild
                      ? t.accent + "08"
                      : "#f9fafb",
                    borderColor: isComplete
                      ? "#16a34a28"
                      : isInBuild
                      ? t.accent + "40"
                      : "#e5e7eb",
                  }}
                >
                  {/* Stage header */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{
                        backgroundColor: isComplete
                          ? "#16a34a"
                          : isInBuild
                          ? t.accent
                          : "#9ca3af",
                      }}
                    >
                      {stage.number}
                    </span>

                    <span className="font-semibold text-gray-900 text-sm">
                      {stage.title}
                    </span>

                    {isComplete && (
                      <span className="ml-auto text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">
                        {lang === "zh" ? "已完成" : "Complete"}
                      </span>
                    )}

                    {isInBuild && (
                      <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse inline-block" style={{ backgroundColor: t.accent }} />
                        {lang === "zh" ? "建设中" : "In Build"}
                      </span>
                    )}
                  </div>

                  {/* Outcomes */}
                  <ul className="space-y-1.5 pl-10">
                    {stage.outcomes.map((outcome, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                        <span
                          className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full"
                          style={{
                            backgroundColor: isComplete
                              ? "#16a34a"
                              : isInBuild
                              ? t.accent
                              : "#9ca3af",
                          }}
                        />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </ProjectPageLayout>
  );
}
