"use client";
import { useLang } from "@/context/LanguageContext";
import { p6 } from "@/lib/content";
import ProjectPageLayout from "@/components/ProjectPageLayout";
import FadeIn from "@/components/FadeIn";

export default function SiddeleyGroupWebsitePage() {
  const { lang } = useLang();
  const t = p6[lang];

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
      {/* Phase breakdown */}
      <FadeIn delay={0.25}>
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

      {/* Notable technical callouts */}
      <FadeIn delay={0.3}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="rounded-xl p-5 border"
            style={{ backgroundColor: "#eff6ff", borderColor: "#1e3a8a30" }}
          >
            <div className="flex gap-3 items-start">
              <span className="text-2xl">🌐</span>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: t.accent }}>
                  {lang === "zh" ? "双语覆盖" : "Bilingual Coverage"}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {lang === "zh"
                    ? "8 个页面 + 8 篇洞见文章 + 所有共享组件（导航、页脚、滚动条、ESG 支柱、组织架构图）的完整中英双语实现，单一静态站点，无后端需求。"
                    : "8 pages + 8 insight articles + all shared components (Nav, Footer, Ticker, ESG pillars, org chart) fully bilingual — single static build, no backend required."}
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-xl p-5 border"
            style={{ backgroundColor: "#f0fdf4", borderColor: "#15803d30" }}
          >
            <div className="flex gap-3 items-start">
              <span className="text-2xl">⚡</span>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1 text-green-700">
                  {lang === "zh" ? "性能修复" : "Performance Fix"}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {lang === "zh"
                    ? "在单次工作周期内定位并修复三个独立的移动端触控延迟根因：Lenis 平滑滚动、RevealChildren 层叠上下文，以及 CountUp 每帧 setState 重渲染。"
                    : "Three independent sources of mobile touch lag diagnosed and fixed in a single session: Lenis smooth scroll on touch, RevealChildren stacking contexts, and CountUp setState per animation frame."}
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-xl p-5 border"
            style={{ backgroundColor: "#fef9c3", borderColor: "#b45309" + "30" }}
          >
            <div className="flex gap-3 items-start">
              <span className="text-2xl">🖼️</span>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1 text-amber-700">
                  {lang === "zh" ? "部署阻塞解除" : "Deploy Unblocked"}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {lang === "zh"
                    ? "20 张员工照片（17–34 MB PNG）超出 Cloudflare 25 MB 单文件限制，阻断部署。使用 `sips` 批量压缩至 60–120 KB JPEG，完全解除阻塞。"
                    : "20 staff photos at 17–34 MB PNG exceeded Cloudflare's 25 MB per-file limit and blocked all deploys. Batch-compressed to 60–120 KB JPEG using `sips` — blocker fully resolved."}
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-xl p-5 border"
            style={{ backgroundColor: "#fce7f3", borderColor: "#be185d30" }}
          >
            <div className="flex gap-3 items-start">
              <span className="text-2xl">✍️</span>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1 text-pink-700">
                  {lang === "zh" ? "中文内容撰写" : "ZH Content Authored"}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {lang === "zh"
                    ? "~8,000 字中文内容由 Vanessa 直接撰写，包含 8 篇长篇洞见文章。按市场价（$0.10–$0.20/字）节省专业翻译费用 $800–$1,600 澳元。"
                    : "~8,000 words of ZH content authored directly by Vanessa, including 8 long-form insight articles. Saves est. $800–$1,600 AUD in professional translation fees at market rates ($0.10–$0.20/word)."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </ProjectPageLayout>
  );
}
