"use client";
import { useLang } from "@/context/LanguageContext";
import { p7 } from "@/lib/content";
import ProjectPageLayout from "@/components/ProjectPageLayout";
import FadeIn from "@/components/FadeIn";

export default function RedbridgeV3Page() {
  const { lang } = useLang();
  const t = p7[lang];

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
      {/* Live URL callout */}
      <FadeIn delay={0.25}>
        <div className="rounded-2xl bg-teal-50 border border-teal-200 p-5 flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-2xl">🌐</span>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-1">
              {lang === "zh" ? "线上网站" : "Live Site"}
            </div>
            <a
              href={t.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-teal-700 hover:underline"
            >
              {t.liveUrl}
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
                {/* Phase header */}
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

                {/* Phase outcomes */}
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

      {/* SEO Architecture — Hub-and-Spoke Model */}
      <FadeIn delay={0.35}>
        <section>
          <h2 className="font-serif text-3xl font-bold mb-4" style={{ color: t.accent }}>
            {t.seoArchitecture.heading}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            {t.seoArchitecture.description}
          </p>

          {/* Hub */}
          <div
            className="rounded-2xl p-5 border mb-4 text-center"
            style={{ backgroundColor: t.accent + "18", borderColor: t.accent + "30" }}
          >
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2"
              style={{ backgroundColor: t.accent + "22", color: t.accent }}
            >
              {t.seoArchitecture.hub.label}
            </div>
            <div className="font-serif text-lg font-bold text-gray-900">{t.seoArchitecture.hub.title}</div>
            <div className="text-xs text-gray-400 mt-1 font-mono">{t.seoArchitecture.hub.url}</div>
          </div>

          {/* Spokes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.seoArchitecture.spokes.map((spoke, i) => (
              <div
                key={i}
                className="rounded-xl p-4 border text-center"
                style={{ backgroundColor: "white", borderColor: t.accent + "30" }}
              >
                <div
                  className="inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2"
                  style={{ backgroundColor: t.accent + "15", color: t.accent }}
                >
                  {spoke.label}
                </div>
                <div className="font-semibold text-sm text-gray-900">{spoke.title}</div>
                <div className="text-xs text-gray-400 mt-1 font-mono break-all">{spoke.url}</div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Technical Highlights */}
      <FadeIn delay={0.4}>
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
