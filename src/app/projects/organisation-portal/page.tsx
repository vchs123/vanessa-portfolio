"use client";
import { useLang } from "@/context/LanguageContext";
import { p9 } from "@/lib/content";
import ProjectPageLayout from "@/components/ProjectPageLayout";
import FadeIn from "@/components/FadeIn";

export default function OrganisationPortalPage() {
  const { lang } = useLang();
  const t = p9[lang];

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
                {lang === "zh" ? "第 1 阶段 / 共 7 阶段" : "Stage 1 of 7"}
              </span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {(t as typeof p9.en).openingStatement}
            </p>
          </div>
        </div>
      </FadeIn>
    </ProjectPageLayout>
  );
}
