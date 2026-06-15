"use client";
import { useLang } from "@/context/LanguageContext";
import { p5 } from "@/lib/content";
import ProjectPageLayout from "@/components/ProjectPageLayout";
import FadeIn from "@/components/FadeIn";

export default function GoogleAdsRBPage() {
  const { lang } = useLang();
  const t = p5[lang];

  const zhSteps = lang === "zh"
    ? [
        { num: "01", title: "研究与策略对齐", body: "分析中文广告组跟踪模板的配置需求；在 Google Ads 帮助中心进行多次检索，确认模板格式（包括 UTM 参数和 ValueTrack ID）符合当前最佳实践；验证自定义参数（{_camp}、{_adgrp}）以实现精细化归因。" },
        { num: "02", title: "广告组管理", body: "直接进入广告组管理界面，在广告组统计表格中添加「跟踪模板」和「自定义参数」两个隐藏属性列，并横向滚动确认列显示正确。" },
        { num: "03", title: "技术排查（错误处理）", body: "识别并解决「非法字符」错误 — 诊断出 Google Ads 自定义参数值不得包含斜杠或空格；将所有参数值改用下划线命名，确保系统接受。在连接断开三次及一次「不可恢复状态」错误后，重新建立连接完成配置。" },
        { num: "04", title: "跟踪配置（中文广告组）", body: "录入最终跟踪模板：{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={_camp}&utm_content={_adgrp}&utm_term={keyword}&device={device}&matchtype={matchtype}&network={network}&locale=zh；定义自定义参数：_camp = Leads-Search-RB-19_05_26to25_05_26_EmployerSponsorshipZH，_adgrp = Ad_group_ZH_19-25_May。" },
        { num: "05", title: "验证与计量咨询", body: "在 Google Ads 界面完成最终可视化审查，确认所有设置已正确保存；阐明 ctasrc 参数策略 — Google Ads 将用户引导至落地页，GTM 随后接管以捕获具体按钮点击来源。" },
      ]
    : [
        { num: "01", title: "Research & Strategy", body: "Researched the tracking template setup for the ZH ad group; performed multiple searches in the Google Ads Help Center to validate the template format (UTM parameters + ValueTrack IDs) against current best practices; confirmed the use of custom parameters ({_camp}, {_adgrp}) for granular attribution." },
        { num: "02", title: "Ad Group Management", body: "Navigated directly to the Ad groups management interface; modified the Ad groups statistics table by adding two hidden attribute columns — Tracking template and Custom parameter — then scrolled horizontally to verify both columns were visible and actionable." },
        { num: "03", title: "Technical Troubleshooting", body: "Identified and resolved an 'illegal characters' error — diagnosed that Google Ads custom parameter values cannot contain slashes or spaces; corrected all values using underscores. Managed three browser disconnections and one 'unrecoverable state' error to ensure the configuration was completed." },
        { num: "04", title: "Tracking Configuration", body: "Entered the final tracking template: {lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={_camp}&utm_content={_adgrp}&utm_term={keyword}&device={device}&matchtype={matchtype}&network={network}&locale=zh; defined custom parameters: _camp = Leads-Search-RB-19_05_26to25_05_26_EmployerSponsorshipZH, _adgrp = Ad_group_ZH_19-25_May." },
        { num: "05", title: "Verification & Measurement", body: "Performed a final visual audit in the Google Ads UI to confirm all settings saved correctly; clarified the ctasrc parameter strategy — Google Ads passes the user to the landing page, then GTM takes over to capture the specific CTA button clicks for page-level attribution." },
      ];

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
      {/* EN campaign status + keyword table */}
      <FadeIn delay={0.25}>
        <section>
          <h2 className="font-serif text-3xl font-bold mb-4" style={{ color: t.accent }}>
            {lang === "zh" ? "英文广告系列 — 关键词表现（前 5 位）" : "EN Campaign — Keyword Performance (Top 5)"}
          </h2>

          {/* EN complete badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-gray-100 text-gray-500">
            <span className="w-2 h-2 rounded-full bg-gray-400 inline-block" />
            {lang === "zh" ? "已完成 · 2026年5月8日–14日" : "Complete · May 8–14, 2026"}
          </div>

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
              ? "* 数据显示前 5 个关键词（数据来自上线后前 3 天），共 10+ 个关键词组。"
              : "* Top 5 keywords shown. Data reflects the first 3 days after launch. 10+ keyword groups active."}
          </p>
        </section>
      </FadeIn>

      {/* Industry benchmark */}
      <FadeIn delay={0.3}>
        <div className="rounded-xl bg-green-50 border border-green-200 px-5 py-4 flex gap-3 items-start">
          <span className="text-xl">📈</span>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-green-700 mb-1">
              {lang === "zh" ? "行业基准对比" : "Industry Benchmark"}
            </div>
            <p className="text-sm text-green-800 leading-relaxed">
              {lang === "zh"
                ? "法律及移民咨询服务的 Google 搜索广告行业平均点击率为 3–5%。英文广告系列达到 8.5%，超出行业均值一倍以上，表明广告文案、关键词选择和目标受众定位具有高度相关性。"
                : "The industry average Google Search CTR for legal and migration consulting services is 3–5%. The EN campaign achieved 8.5% — more than double the benchmark — indicating strong ad copy relevance, keyword intent alignment, and audience targeting."}
            </p>
          </div>
        </div>
      </FadeIn>

      {/* ZH campaign tracking setup */}
      <FadeIn delay={0.35}>
        <section>
          <h2 className="font-serif text-3xl font-bold mb-2" style={{ color: t.accent }}>
            {lang === "zh" ? "中文广告系列 — 追踪配置" : "ZH Campaign — Tracking Setup"}
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            {lang === "zh"
              ? "广告系列：Leads-Search-RB-19/05/26to25/05/26_EmployerSponsorshipZH · 2026年5月19日–25日"
              : "Leads-Search-RB-19/05/26to25/05/26_EmployerSponsorshipZH · May 19–25, 2026"}
          </p>
          <div className="space-y-4">
            {zhSteps.map((step) => (
              <div
                key={step.num}
                className="rounded-xl border-2 overflow-hidden"
                style={{ borderColor: t.accent + "25" }}
              >
                <div
                  className="px-5 py-3 flex items-center gap-3"
                  style={{ backgroundColor: t.accent + "0d" }}
                >
                  <span
                    className="text-xs font-bold tracking-widest px-2.5 py-0.5 rounded-full"
                    style={{ backgroundColor: t.accent + "20", color: t.accent }}
                  >
                    {step.num}
                  </span>
                  <span className="font-serif text-base font-bold text-gray-900">{step.title}</span>
                </div>
                <div className="bg-white px-5 py-4">
                  <p className="text-sm text-gray-700 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tracking template callout */}
          <div
            className="mt-6 rounded-xl p-5 border"
            style={{ backgroundColor: "#eff6ff", borderColor: "#1a73e820" }}
          >
            <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: t.accent }}>
              {lang === "zh" ? "最终跟踪模板" : "Final Tracking Template"}
            </div>
            <code className="text-xs text-gray-700 break-all leading-relaxed block">
              {"{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={_camp}&utm_content={_adgrp}&utm_term={keyword}&device={device}&matchtype={matchtype}&network={network}&locale=zh"}
            </code>
            <div className="mt-3 pt-3 border-t border-blue-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
              <div><span className="font-semibold text-gray-800">_camp</span> = Leads-Search-RB-19_05_26to25_05_26_EmployerSponsorshipZH</div>
              <div><span className="font-semibold text-gray-800">_adgrp</span> = Ad_group_ZH_19-25_May</div>
            </div>
          </div>
        </section>
      </FadeIn>
    </ProjectPageLayout>
  );
}
