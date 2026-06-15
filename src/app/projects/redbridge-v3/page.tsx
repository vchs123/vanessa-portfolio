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

      {/* Indexing fix callout */}
      <FadeIn delay={0.3}>
        <div className="rounded-2xl bg-teal-50 border-2 border-teal-200 p-6 flex gap-4 items-start">
          <span className="text-3xl">🔎</span>
          <div>
            <h3 className="font-serif text-xl font-bold text-teal-800 mb-2">
              {lang === "zh" ? "中文页面索引修复" : "Chinese-Language Indexing Fixed"}
            </h3>
            <p className="text-teal-700 text-sm leading-relaxed">
              {lang === "zh"
                ? "上线后的 hreflang 标注错误曾导致 Google 无法正确识别网站的中文版本，使其无法在 zh-CN 搜索结果中出现。修复后，所有规范 URL 及 hreflang 备用链接已通过 sitemap.xml 提交至 Google Search Console，中文页面现已具备完整的索引与排名资格。"
                : "Broken hreflang annotations had been preventing Google from correctly recognising the site's Chinese-language version, blocking it from zh-CN search results. With the fix in place, all canonical URLs and hreflang alternates were submitted to Google Search Console via sitemap.xml — the Chinese-language pages are now fully eligible for indexing and ranking."}
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Structured data callout */}
      <FadeIn delay={0.35}>
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-5 py-4 flex gap-3 items-start">
          <span className="text-xl">🏷️</span>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-1">
              {lang === "zh" ? "结构化数据 / 富媒体结果" : "Structured Data / Rich Results"}
            </div>
            <p className="text-sm text-emerald-800 leading-relaxed">
              {lang === "zh"
                ? "新增并更新的 JSON-LD（FAQPage、BreadcrumbList、Organization/LocalBusiness）使页面具备 FAQ 折叠面板、面包屑导航及知识图谱等增强版搜索结果展示资格 — 在零边际成本下提升点击率。"
                : "New and updated JSON-LD (FAQPage, BreadcrumbList, Organization/LocalBusiness) makes pages eligible for enhanced SERP features — FAQ accordions, breadcrumb trails, and a knowledge panel — increasing click-through rate at zero marginal cost."}
            </p>
          </div>
        </div>
      </FadeIn>
    </ProjectPageLayout>
  );
}
