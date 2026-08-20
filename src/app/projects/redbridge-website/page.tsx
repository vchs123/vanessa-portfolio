"use client";
import { useLang } from "@/context/LanguageContext";
import { p1 } from "@/lib/content";
import ProjectPageLayout from "@/components/ProjectPageLayout";
import FadeIn from "@/components/FadeIn";

export default function RedbridgeWebsitePage() {
  const { lang } = useLang();
  const t = p1[lang];

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
        <div
          className="rounded-2xl border p-5 flex flex-col sm:flex-row sm:items-center gap-3"
          style={{ backgroundColor: t.accent + "08", borderColor: t.accent + "30" }}
        >
          <span className="text-2xl">🌐</span>
          <div>
            <div
              className="text-xs font-bold uppercase tracking-widest mb-1"
              style={{ color: t.accent }}
            >
              {lang === "zh" ? "线上网站" : "Live Site"}
            </div>
            <a
              href={t.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold hover:underline"
              style={{ color: t.accent }}
            >
              {t.liveUrl}
            </a>
          </div>
        </div>
      </FadeIn>

      {/* Portal team breakdown */}
      <FadeIn delay={0.3}>
        <section>
          <h2 className="font-serif text-3xl font-bold mb-2" style={{ color: t.accent }}>
            {lang === "zh" ? "门户团队结构" : "Portal Team Breakdown"}
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            {lang === "zh"
              ? "13 个页面跨 4 个内部团队 + 1 个客户自助门户，以及一个 11 阶段全流程管道。"
              : "13 screens across 4 internal teams + 1 client-facing portal, unified by an 11-stage pipeline from first contact to visa approval."}
          </p>
          <div className="space-y-8">
            {(t as typeof p1.en).portalSections.map((section, si) => (
              <div key={si}>
                <div
                  className="flex items-center gap-3 mb-4 pb-3 border-b-2"
                  style={{ borderColor: t.accent + "30" }}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ backgroundColor: t.accent + "15", color: t.accent }}
                  >
                    {section.team}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-gray-900">
                    {section.heading}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.screens.map((screen, sci) => (
                    <div
                      key={sci}
                      className="rounded-xl border p-5"
                      style={{ backgroundColor: t.accent + "05", borderColor: t.accent + "20" }}
                    >
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div>
                          <div className="font-semibold text-gray-900 text-sm leading-tight">
                            {screen.title}
                          </div>
                          <div
                            className="text-xs mt-0.5 font-mono"
                            style={{ color: t.accent + "99" }}
                          >
                            {screen.file}
                          </div>
                        </div>
                      </div>
                      <div
                        className="text-xs mb-3 px-2 py-1 rounded-md inline-block"
                        style={{ backgroundColor: t.accent + "10", color: t.accent }}
                      >
                        {screen.who}
                      </div>
                      <ul className="space-y-1.5">
                        {screen.features.map((f, fi) => (
                          <li key={fi} className="flex gap-2 items-start">
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: t.accent }}
                            />
                            <span className="text-xs text-gray-600 leading-relaxed">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </ProjectPageLayout>
  );
}
