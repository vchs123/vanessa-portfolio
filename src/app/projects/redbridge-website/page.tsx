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
        <div className="rounded-2xl bg-pink-50 border border-pink-200 p-5 flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-2xl">🌐</span>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-pink-700 mb-1">
              {lang === "zh" ? "线上网站" : "Live Site"}
            </div>
            <a
              href={t.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-pink-700 hover:underline"
            >
              {t.liveUrl}
            </a>
          </div>
        </div>
      </FadeIn>
    </ProjectPageLayout>
  );
}
