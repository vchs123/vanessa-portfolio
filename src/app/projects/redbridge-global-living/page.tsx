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
      tableRows={t.tableRows}
      highlights={t.highlights}
      statsGrid={t.statsGrid}
    >
      {/* Strategic Proposal CTA */}
      <FadeIn delay={0.25}>
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
                ? "完整提案涵盖架构设计、建设次序、商业与合规方案，以及启动所需的 12 项决策事项。"
                : "The full bilingual proposal covers architecture, sequencing, commercial and compliance design, and the 12 decisions required to begin."}
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

      {/* Phase breakdown */}
      <FadeIn delay={0.3}>
        <section>
          <h2 className="font-serif text-3xl font-bold mb-8" style={{ color: t.accent }}>
            {lang === "zh" ? "阶段详情" : "Phase Breakdown"}
          </h2>
          <div className="space-y-6">
            {t.phases.map((phase, i) => (
              <div
                key={i}
                className="rounded-2xl border-2 overflow-hidden"
                style={{ borderColor: t.accent + "30" }}
              >
                <div
                  className="px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-2"
                  style={{ backgroundColor: t.accent + "10" }}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full self-start"
                    style={{ backgroundColor: t.accent + "20", color: t.accent }}
                  >
                    {phase.number}
                  </span>
                  <div>
                    <div className="font-serif text-xl font-bold text-gray-900">{phase.title}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{phase.period}</div>
                  </div>
                </div>
                <div className="bg-white px-6 py-5">
                  <ul className="space-y-3">
                    {phase.outcomes.map((outcome, j) => (
                      <li key={j} className="flex gap-3 items-start">
                        <span
                          className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: t.accent }}
                        />
                        <span className="text-sm text-gray-700 leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Technical Highlights */}
      <FadeIn delay={0.35}>
        <section>
          <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: t.accent }}>
            {t.technicalHighlights.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.technicalHighlights.items.map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-5 border"
                style={{ backgroundColor: t.accent + "0c", borderColor: t.accent + "30" }}
              >
                <div className="flex gap-3 items-start">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: t.accent }}>
                      {item.title}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </ProjectPageLayout>
  );
}
