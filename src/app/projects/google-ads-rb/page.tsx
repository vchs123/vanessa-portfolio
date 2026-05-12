"use client";
import { useLang } from "@/context/LanguageContext";
import { p5 } from "@/lib/content";
import ProjectPageLayout from "@/components/ProjectPageLayout";
import FadeIn from "@/components/FadeIn";

export default function GoogleAdsRBPage() {
  const { lang } = useLang();
  const t = p5[lang];

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
      {/* Top keywords table */}
      <FadeIn delay={0.25}>
        <section>
          <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: t.accent }}>
            {lang === "zh" ? "关键词表现（前 5 位）" : "Keyword Performance — Top 5"}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-blue-100 shadow-sm">
            <table className="w-full text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    {lang === "zh" ? "关键词" : "Keyword"}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    {lang === "zh" ? "花费" : "Cost"}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    {lang === "zh" ? "点击次数" : "Clicks"}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    {lang === "zh" ? "点击率" : "CTR"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.keywordsTable.map((row, i) => (
                  <tr key={i} className="border-t border-gray-100 hover:bg-blue-50/30 transition-colors">
                    <td className="px-4 py-3 font-mono text-gray-800">{row.keyword}</td>
                    <td className="px-4 py-3 text-gray-600">{row.cost}</td>
                    <td className="px-4 py-3 font-semibold text-blue-700">{row.clicks}</td>
                    <td className="px-4 py-3">
                      <span
                        className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold"
                        style={{
                          backgroundColor: parseFloat(row.ctr) >= 10 ? "#dcfce7" : "#e8f0fe",
                          color: parseFloat(row.ctr) >= 10 ? "#15803d" : "#1a73e8",
                        }}
                      >
                        {row.ctr}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            {lang === "zh"
              ? "* 数据显示广告账户中前 5 个关键词，共 10+ 个关键词组在运行。"
              : "* Showing top 5 keywords from the account. 10+ keyword groups are active."}
          </p>
        </section>
      </FadeIn>

      {/* Active status callout */}
      <FadeIn delay={0.3}>
        <div className="rounded-2xl bg-blue-50 border-2 border-blue-200 p-6 flex gap-4 items-start">
          <span className="text-3xl">🟢</span>
          <div>
            <h3 className="font-serif text-xl font-bold text-blue-800 mb-2">
              {lang === "zh" ? "广告系列正在运行" : "Campaign Active"}
            </h3>
            <p className="text-blue-700 text-sm leading-relaxed">
              {lang === "zh"
                ? "Leads-Search-RB-08/05/26_EmployerSponsorshipEN 于 2026年5月8日（周五）上线，目前仍在运行。上方数据为上线后前 3 天的实时表现。随着广告系列持续优化，指标将随时间推移进一步提升。"
                : "Leads-Search-RB-08/05/26_EmployerSponsorshipEN launched on Friday May 8, 2026 and is currently live. The stats above reflect the first 3 days of a live, ongoing campaign. Performance metrics will continue to develop as the campaign optimises over time."}
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Industry benchmark callout */}
      <FadeIn delay={0.35}>
        <div className="rounded-xl bg-green-50 border border-green-200 px-5 py-4 flex gap-3 items-start">
          <span className="text-xl">📈</span>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-green-700 mb-1">
              {lang === "zh" ? "行业基准对比" : "Industry Benchmark"}
            </div>
            <p className="text-sm text-green-800 leading-relaxed">
              {lang === "zh"
                ? "法律及移民咨询服务的 Google 搜索广告行业平均点击率为 3–5%。此次广告系列达到 8.5%，超出行业均值一倍以上，表明广告文案、关键词选择和目标受众定位具有高度相关性。"
                : "The industry average Google Search CTR for legal and migration consulting services is 3–5%. This campaign achieved 8.5% — more than double the benchmark — indicating strong ad copy relevance, keyword intent alignment, and audience targeting."}
            </p>
          </div>
        </div>
      </FadeIn>
    </ProjectPageLayout>
  );
}
