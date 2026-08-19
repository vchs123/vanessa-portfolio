"use client";
import { useLang } from "@/context/LanguageContext";
import { p8 } from "@/lib/content";
import ProjectPageLayout from "@/components/ProjectPageLayout";
import FadeIn from "@/components/FadeIn";

export default function RGLPage() {
  const { lang } = useLang();
  const t = p8[lang];

  return (
    <ProjectPageLayout
      tag={t.tag}
      title={t.title}
      subtitle={t.subtitle}
      accent={t.accent}
      impact={t.impact}
    >
      <FadeIn delay={0.2}>
        <div
          className="rounded-2xl border p-6 flex flex-col sm:flex-row sm:items-center gap-4"
          style={{ backgroundColor: t.accent + "08", borderColor: t.accent + "30" }}
        >
          <span className="text-3xl">🌏</span>
          <div className="flex-1">
            <div
              className="text-xs font-bold uppercase tracking-widest mb-1"
              style={{ color: t.accent }}
            >
              {lang === "zh" ? "战略提案" : "Strategic Proposal"}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {lang === "zh"
                ? "完整提案涵盖架构设计、建设次序、商业与合规方案，以及启动所需的决策事项。"
                : "The full proposal covers architecture, sequencing, commercial and compliance design, and the decisions required to begin."}
            </p>
            <a
              href={t.proposalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: t.accent }}
            >
              {lang === "zh" ? "查看战略提案 →" : "View Strategic Proposal →"}
            </a>
          </div>
        </div>
      </FadeIn>
    </ProjectPageLayout>
  );
}
