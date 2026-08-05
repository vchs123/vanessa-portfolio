"use client";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { p5 } from "@/lib/content";
import ProjectPageLayout from "@/components/ProjectPageLayout";
import BilingualTable from "@/components/BilingualTable";
import FadeIn from "@/components/FadeIn";

export default function GoogleAdsRBPage() {
  const { lang } = useLang();
  const t = p5[lang];
  const zh = t.zhCampaign;
  const [campaign, setCampaign] = useState<"en" | "zh">("en");

  const accentLight = t.accent + "18";

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
      title={lang === "zh" ? "Google Ads — 雇主担保推广 (EN/ZH)" : "Google Ads — Employer Sponsorship (EN/ZH)"}
      subtitle={t.subtitle}
      accent={t.accent}
    >
      {/* ── Campaign Tab Toggle ── */}
      <div className="flex border border-blue-100 rounded-xl overflow-hidden text-sm font-semibold">
        <button
          onClick={() => setCampaign("en")}
          className={`flex-1 px-6 py-3 transition-colors ${campaign === "en" ? "text-white" : "text-gray-500 hover:bg-blue-50"}`}
          style={campaign === "en" ? { backgroundColor: t.accent } : {}}
        >
          {lang === "zh" ? "英文广告系列 (EN)" : "EN Campaign"}
        </button>
        <button
          onClick={() => setCampaign("zh")}
          className={`flex-1 px-6 py-3 border-l border-blue-100 transition-colors ${campaign === "zh" ? "text-white" : "text-gray-500 hover:bg-blue-50"}`}
          style={campaign === "zh" ? { backgroundColor: t.accent } : {}}
        >
          {lang === "zh" ? "中文广告系列 (ZH)" : "ZH Campaign"}
        </button>
      </div>

      {/* ── EN Campaign ── */}
      {campaign === "en" && (
        <>
          {/* Business Impact */}
          <FadeIn>
            <section>
              <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: t.accent }}>
                {lang === "zh" ? "业务影响" : "Business Impact"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {t.impact.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-5 border h-full transition-shadow duration-300 hover:shadow-lg"
                    style={{ backgroundColor: accentLight, borderColor: t.accent + "30" }}
                  >
                    <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: t.accent }}>
                      {item.label}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* Scale at a Glance */}
          <FadeIn delay={0.05}>
            <section>
              <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: t.accent }}>
                {lang === "zh" ? "数据规模" : "Scale at a Glance"}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {t.statsGrid.map((s, i) => (
                  <div
                    key={i}
                    className="text-center rounded-2xl py-6 px-4 border transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default"
                    style={{ backgroundColor: accentLight, borderColor: t.accent + "30" }}
                  >
                    <div className="font-serif text-3xl font-bold" style={{ color: t.accent }}>{s.num}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* Project Summary */}
          <FadeIn delay={0.1}>
            <section>
              <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: t.accent }}>
                {lang === "zh" ? "项目摘要" : "Project Summary"}
              </h2>
              <BilingualTable rows={t.tableRows} accent={t.accent} />
            </section>
          </FadeIn>

          {/* Key Highlights */}
          <FadeIn delay={0.05}>
            <section>
              <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: t.accent }}>
                {lang === "zh" ? "主要亮点" : "Key Highlights"}
              </h2>
              <ul className="space-y-3">
                {t.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: t.accent }} />
                    <span className="text-gray-700 text-sm leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>

          {/* EN Keyword Performance */}
          <FadeIn delay={0.25}>
            <section>
              <h2 className="font-serif text-3xl font-bold mb-4" style={{ color: t.accent }}>
                {lang === "zh" ? "英文广告系列 — 关键词表现（前 5 位）" : "EN Campaign — Keyword Performance (Top 5)"}
              </h2>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-gray-100 text-gray-500">
                <span className="w-2 h-2 rounded-full bg-gray-400 inline-block" />
                {lang === "zh" ? "已完成 · 2026年5月8日–14日" : "Complete · May 8–14, 2026"}
              </div>

              <div className="overflow-x-auto rounded-xl border border-blue-100 shadow-sm">
                <table className="w-full text-sm border-collapse bg-white">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">{lang === "zh" ? "关键词" : "Keyword"}</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">{lang === "zh" ? "花费" : "Cost"}</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">{lang === "zh" ? "点击次数" : "Clicks"}</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">{lang === "zh" ? "点击率" : "CTR"}</th>
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
                  ? "前 5 个关键词（按花费排序）。完整 7 天数据，2026年5月8日–14日。"
                  : "Top 5 keywords shown by spend. Full 7-day period, May 8–14, 2026."}
              </p>
            </section>
          </FadeIn>

          {/* EN Performance Analysis */}
          <FadeIn delay={0.3}>
            <section className="space-y-6">
              <h2 className="font-serif text-3xl font-bold" style={{ color: t.accent }}>
                {lang === "zh" ? "效果分析" : "Performance Analysis"}
              </h2>

              <div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  {lang === "zh" ? "意图不匹配诊断" : "Intent mismatch diagnosis"}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {lang === "zh"
                    ? "通过审查触发英文广告的实际搜索词，发现存在显著的意图不匹配问题。大量展示来自求职者（搜索\"visa sponsorship jobs in australia\"、\"482 visa sponsorship jobs\"）以及寻找注册移民顾问或律师的用户（搜索\"immigration lawyer melbourne\"、\"roam migration law\"、\"bajwa immigration\"）。这两类受众均非 RedBridge 的目标客户——前者需要职位列表，后者需要 MARN 注册顾问，而非职业路径与雇主担保咨询公司。招聘类关键词（\"job placement services\"、\"placement services\"、\"recruitment agencies melbourne\"）带来高点击量但零转化。搜索词中还出现竞争对手及无关品牌名——Hays、VFS Global、Vetassess、Visaenvoy、Stepping Stones Career Solutions——意味着预算被消耗在毫无转化可能的查询上。"
                    : "Reviewing the actual search queries that triggered EN ads exposed a significant intent mismatch. A large portion of impressions came from job seekers searching for employment with visa sponsorship (\"visa sponsorship jobs in australia,\" \"482 visa sponsorship jobs\") and people looking for registered migration agents or law firms (\"immigration lawyer melbourne,\" \"roam migration law,\" \"bajwa immigration\"). Neither audience is RedBridge's target — the former wants job listings, the latter wants a MARN-registered agent, not a career pathway and employer sponsorship consultancy. Recruitment-adjacent keywords (\"job placement services,\" \"placement services,\" \"recruitment agencies melbourne\") contributed high click volume but zero conversions. Search terms also surfaced competitor and unrelated brand names — Hays, VFS Global, Vetassess, Visaenvoy, Stepping Stones Career Solutions — indicating budget was being spent on queries with no realistic conversion path."}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  {lang === "zh" ? "竞争格局" : "Competitive landscape"}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {lang === "zh"
                    ? "竞价洞察数据显示，Indeed.com 在重叠关键词上的页首展示率达 79%，RedBridge 为 35.9%。Indeed 出现在这些关键词的竞价中本身就具有诊断意义：一家求职平台与 RedBridge 竞争同一竞价，印证了这些关键词吸引的是求职者受众。goldmedalvisa.com.au 是一家直接竞争对手，在共同竞价中以 56.8% 的频率胜出 RedBridge。"
                    : "Auction insights showed Indeed.com achieving a 79% top-of-page rate on overlapping terms, against RedBridge's 35.9%. Indeed's presence on these terms is itself diagnostic: a job board competing in the same auction confirms those keywords attract a job seeker audience. goldmedalvisa.com.au, a direct migration services competitor, outranked RedBridge in 56.8% of shared auctions."}
                </p>
              </div>

              <div className="rounded-xl bg-green-50 border border-green-200 px-5 py-4 flex gap-3 items-start">
                <span className="text-xl">📈</span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-green-700 mb-1">
                    {lang === "zh" ? "英文广告系列转化率 vs 基准" : "EN Conversion Rate vs Benchmark"}
                  </div>
                  <p className="text-sm text-green-800 leading-relaxed">
                    {lang === "zh"
                      ? "英文广告系列转化率为 1.23%（325 次点击中产生 4 次转化）。澳大利亚专业服务行业基准为 3–5%。差距主要源于意图不匹配的流量——求职者和移民顾问搜索者点击进入后发现的是职业咨询机构，而非其所求。修正关键词意图是在不增加预算的前提下提升转化率的最高杠杆。"
                      : "The EN campaign achieved a 1.23% conversion rate (4 conversions from 325 clicks). The industry benchmark for professional services in Australia sits at 3–5%. The gap is attributable to intent-mismatched traffic — job seekers and migration agent searchers who click through but find a career consultancy, not what they came for. Fixing keyword intent is the highest-leverage lever for improving this figure without increasing spend."}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                  {lang === "zh" ? "优化建议" : "Recommended optimisations"}
                </h3>
                <ul className="space-y-2">
                  {(lang === "zh"
                    ? [
                        "暂停或大幅降低求职类关键词出价：\"visa sponsorship jobs\"、\"job placement services\"、\"placement services\"",
                        "根据搜索词报告建立否定关键词清单：\"jobs\"、\"recruitment agency\"、\"lawyer\"、\"hays\"、\"vfs\"、\"vetassess\" 及所有出现的竞争对手品牌词",
                        "将预算向具明确咨询意图的考量阶段词汇倾斜：\"employer sponsorship visa help\"、\"482 visa pathway advice\"、\"how to get employer sponsored visa australia\"",
                        "提高桌面端出价 — 英文端移动 CPC 为 A$3.58，桌面端为 A$8.09，但联系表单填写更可能在桌面端完成",
                      ]
                    : [
                        "Pause or cut bids significantly on job-seeker keywords: \"visa sponsorship jobs,\" \"job placement services,\" \"placement services\"",
                        "Build a negative keyword list from the search terms report: \"jobs,\" \"recruitment agency,\" \"lawyer,\" \"hays,\" \"vfs,\" \"vetassess,\" and all competitor brand names that surfaced",
                        "Shift budget toward consideration-phase queries with explicit consultancy intent: \"employer sponsorship visa help,\" \"482 visa pathway advice,\" \"how to get employer sponsored visa australia\"",
                        "Apply a desktop bid uplift — EN mobile CPC is A$3.58 vs desktop A$8.09, but contact form completions are more likely on desktop",
                      ]
                  ).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: t.accent }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </FadeIn>
        </>
      )}

      {/* ── ZH Campaign ── */}
      {campaign === "zh" && (
        <>
          {/* Business Impact */}
          <FadeIn delay={0.05}>
            <section>
              <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: t.accent }}>
                {lang === "zh" ? "业务影响" : "Business Impact"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {zh.impact.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5 border"
                    style={{ borderColor: t.accent + "30", backgroundColor: t.accent + "05" }}
                  >
                    <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: t.accent }}>
                      {item.label}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* Scale at a Glance */}
          <FadeIn delay={0.1}>
            <section>
              <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: t.accent }}>
                {lang === "zh" ? "数据规模" : "Scale at a Glance"}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {zh.statsGrid.map((s, i) => (
                  <div
                    key={i}
                    className="text-center p-4 rounded-xl border hover:scale-105 transition-transform"
                    style={{ borderColor: t.accent + "20" }}
                  >
                    <div className="font-serif text-3xl font-bold" style={{ color: t.accent }}>{s.num}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">
                {lang === "zh"
                  ? "* 追踪缺口期间（参数配置错误）发生 1 次实际转化，已在投放期间修复；追踪已确认激活。"
                  : "*1 actual conversion occurred during a tracking gap (missing UTM parameter). Resolved mid-period; tracking confirmed active."}
              </p>
            </section>
          </FadeIn>

          {/* Project Summary */}
          <FadeIn delay={0.15}>
            <section>
              <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: t.accent }}>
                {lang === "zh" ? "项目摘要" : "Project Summary"}
              </h2>
              <BilingualTable rows={zh.tableRows} accent={t.accent} />
            </section>
          </FadeIn>

          {/* ZH Keyword Performance */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="font-serif text-3xl font-bold mb-4" style={{ color: t.accent }}>
                {lang === "zh" ? "中文广告系列 — 关键词表现（前 5 位）" : "ZH Campaign — Keyword Performance (Top 5)"}
              </h2>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-green-100 text-green-700">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                {lang === "zh" ? "运行中 · 2026年5月19日–25日" : "Active · May 19–25, 2026"}
              </div>

              <div className="overflow-x-auto rounded-xl border border-blue-100 shadow-sm">
                <table className="w-full text-sm border-collapse bg-white">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">关键词</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Keyword (EN)</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">{lang === "zh" ? "花费" : "Cost"}</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">{lang === "zh" ? "点击次数" : "Clicks"}</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">{lang === "zh" ? "点击率" : "CTR"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {zh.keywordsTable.map((row, i) => (
                      <tr key={i} className="border-t border-gray-100 hover:bg-blue-50/30 transition-colors">
                        <td className="px-4 py-3 font-semibold text-gray-800">{row.keyword}</td>
                        <td className="px-4 py-3 text-gray-500 text-xs">{row.keywordEn}</td>
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
                  ? "前 5 个关键词（按花费排序）。完整 7 天数据，2026年5月19日–25日。"
                  : "Top 5 keywords shown by spend. Full 7-day period, May 19–25, 2026."}
              </p>
            </section>
          </FadeIn>

          {/* ZH Tracking Setup */}
          <FadeIn delay={0.25}>
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

          {/* ZH Performance Analysis */}
          <FadeIn delay={0.3}>
            <section className="space-y-6">
              <h2 className="font-serif text-3xl font-bold" style={{ color: t.accent }}>
                {lang === "zh" ? "中文广告系列 — 效果分析" : "ZH Campaign — Performance Analysis"}
              </h2>

              <div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  {lang === "zh" ? "CPC 诊断" : "CPC diagnosis"}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {lang === "zh"
                    ? "平均 CPC A$22.20——是英文广告系列的 4.8 倍——成本效率是首要关注点。澳大利亚中文搜索市场规模明显偏小，竞价数据不足，导致 Google 竞价算法出价偏高。所有关键词均采用广泛匹配，使 Google 在高出价下匹配到相关性较低的查询。搜索词报告证实了这一点：\"box hill 移民中介\"（本地化的特定移民机构搜索）触发了 2 次点击，估计每次 CPC 约 A$90；\"技术移民清单\"（有技术职业清单信息需求）触发了 2 次点击，但这些用户是在研究签证资格，而非寻求咨询服务。"
                    : "At A$22.20 average CPC — 4.8× the EN campaign — cost efficiency is the primary concern. The Chinese-language search market in Australia is substantially smaller, producing a thinner auction with less data for Google's bidding algorithm. All keywords were on broad match, which caused Google to match ads to loosely related queries at high bids. The search terms report confirmed this: \"box hill 移民中介\" (a localised search for a specific migration agency) triggered 2 clicks at an estimated A$90 CPC each; \"技术移民清单\" (skilled occupation list) triggered 2 clicks from people researching visa eligibility, not seeking a consultancy."}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  {lang === "zh" ? "意图不匹配" : "Intent mismatch"}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {lang === "zh"
                    ? "词级搜索数据显示，招聘（求职平台相关词）是按展示次数排名第二的高费用词，源于\"yeeyi 墨尔本 招聘\"、\"墨尔本 工作 招聘\"等查询——这些用户在 YeeYi 等华人澳洲平台寻找求职信息。移民（immigration）相关词在点击上花费 A$271，但高频查询中出现了特定注册顾问姓名（\"stanley chan 移民\"）和竞争对手机构（\"avl 中澳通留学移民中介\"），意味着预算被竞争对手品牌搜索消耗，毫无转化可能。"
                    : "Word-level search data showed 招聘 (job listings) as the second highest-cost word by impressions, driven by queries like \"yeeyi 墨尔本 招聘\" and \"墨尔本 工作 招聘\" — people looking for job postings on Chinese-Australian platforms like YeeYi. The word 移民 (immigration) cost A$271 across clicks, but top queries included a specific registered agent's name (\"stanley chan 移民\") and a competitor agency (\"avl 中澳通留学移民中介\"), meaning budget was consumed by competitor brand searches with no conversion potential."}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  {lang === "zh" ? "竞争格局" : "Competitive landscape"}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {lang === "zh"
                    ? "中文竞价洞察数据中出现了一位竞争对手：auchn.net.au，页首展示率 69.3%。尽管其位置更强，但在与 RedBridge 直接重叠的竞价中仅以 20% 的频率胜出——比英文广告系列面对 goldmedalvisa 的竞争格局明显更好。中文广告系列 50.3% 的展示份额反映了竞争较少的竞价环境；通过改善匹配类型和否定关键词，可以在大幅降低 CPC 的同时维持该份额。"
                    : "One competitor appeared in the ZH auction insights: auchn.net.au, at 69.3% top-of-page rate. Despite their stronger positioning, they only outranked RedBridge in 20% of direct auction overlaps — a materially better competitive position than the EN campaign faces against goldmedalvisa. ZH's 50.3% impression share reflects a less crowded auction; with match type and negative keyword fixes, that share can be maintained at a significantly lower CPC."}
                </p>
              </div>

              <div className="rounded-xl bg-green-50 border border-green-200 px-5 py-4 flex gap-3 items-start">
                <span className="text-xl">📈</span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-green-700 mb-1">
                    {lang === "zh" ? "中文广告展示份额 vs 英文广告" : "ZH Impression Share vs EN"}
                  </div>
                  <p className="text-sm text-green-800 leading-relaxed">
                    {lang === "zh"
                      ? "中文广告展示份额 50.3%，超过英文广告（22.2%）一倍以上，且竞争对手更少。当前的机会在于通过缩紧匹配类型和否定关键词来维持该份额并降低 CPC，而非将预算继续消耗在当前广泛匹配吸引的求职平台词和竞争对手品牌词上。"
                      : "ZH achieved a 50.3% impression share against the EN campaign's 22.2% — more than double, with fewer competitors in the auction. The opportunity is to maintain that share while reducing CPC through match type tightening and negative keywords, rather than burning budget in the job-listing and competitor-brand searches the broad match setting is currently pulling in."}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                  {lang === "zh" ? "优化建议" : "Recommended optimisations"}
                </h3>
                <ul className="space-y-2">
                  {(lang === "zh"
                    ? [
                        "将所有中文关键词从广泛匹配改为词组匹配，防止匹配到竞争对手品牌词和本地化机构搜索",
                        "立即添加否定关键词：\"yeeyi\"、\"亿亿网\"、\"box hill\"、竞争对手机构名（stanley chan、avl 中澳通、荣商），以及求职类词汇（招工、现金工作、招聘）",
                        "密切关注修复后的转化数据——追踪缺口导致目前无历史基准，至少需要 30 次已追踪点击才能得出有意义的转化率结论",
                      ]
                    : [
                        "Switch all ZH keywords from broad match to phrase match to prevent matching against competitor brand names and localised agency searches",
                        "Add negative keywords immediately: \"yeeyi,\" \"亿亿网,\" \"box hill,\" competitor agency names (stanley chan, avl 中澳通, 荣商), and job-listing terms (招工, 现金工作, 招聘)",
                        "Monitor post-fix conversion data closely — the tracking gap means no baseline exists yet; meaningful conclusions on conversion rate require at least 30 tracked clicks",
                      ]
                  ).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: t.accent }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </FadeIn>
        </>
      )}
    </ProjectPageLayout>
  );
}
