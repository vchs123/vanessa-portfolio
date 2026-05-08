"use client";
import { useLang } from "@/context/LanguageContext";
import { p4 } from "@/lib/content";
import ProjectPageLayout from "@/components/ProjectPageLayout";
import FadeIn from "@/components/FadeIn";

export default function GoodMoodStudioPage() {
  const { lang } = useLang();
  const t = p4[lang];

  return (
    <ProjectPageLayout
      tag={t.tag}
      title={t.title}
      subtitle={t.subtitle}
      accent={t.accent}
      impact={t.impact}
      tableRows={t.tableRows}
      highlights={t.highlights}
    >
      {/* Context note */}
      <FadeIn delay={0.25}>
        <div className="rounded-xl bg-amber-50 border border-amber-200 px-5 py-4 flex gap-3 items-start">
          <span className="text-xl">ℹ️</span>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-1">
              {lang === "zh" ? "职能背景" : "Role Context"}
            </div>
            <p className="text-sm text-amber-900 leading-relaxed">{t.contextNote}</p>
          </div>
        </div>
      </FadeIn>

      {/* Status callout */}
      <FadeIn delay={0.3}>
        <div className="rounded-xl bg-gray-50 border border-gray-200 px-5 py-4 flex gap-3 items-start">
          <span className="text-xl">⏸️</span>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-1">
              {lang === "zh" ? "当前状态" : "Current Status"}
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {lang === "zh"
                ? "GoodMood Studio 网站项目已暂停，原因是管理层决定对公司进行品牌重塑，包括新公司名称、配色方案和标志。网站须反映新品牌形象，因此实施工作暂停，待重塑结果确认后继续推进。Vanessa 的技术指导和前期工作将在新品牌确认后延续。"
                : "The GoodMood Studio website project has been placed on hold following a management decision to rebrand the company — including a new company name, colour palette, and logo. The website must reflect the new brand identity, so implementation is paused pending the outcome of the rebrand. Vanessa's technical direction and groundwork will carry forward once the new brand is confirmed."}
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Dual role callout */}
      <FadeIn delay={0.35}>
        <div
          className="rounded-2xl p-6"
          style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)", border: "2px solid #f59e0b30" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🎯</span>
            <h3 className="font-serif text-xl font-bold text-amber-900">
              {lang === "zh" ? "双重角色展示" : "Dual Role Demonstrated"}
            </h3>
          </div>
          <p className="text-amber-800 text-sm leading-relaxed">
            {lang === "zh"
              ? "GoodMood Studio 项目体现了 Vanessa 作为 IT 总监职能的双重性：她既是亲力亲为、交付生产代码的工程师（如项目 1–3 所示），也是对团队产出质量负责的技术管理者。在并行交付 RedBridge V5 迁移和独立搭建维拓联才的同时，管理 GoodMood Studio 的实施工作，充分展示了这一时期她所承担的广度责任。"
              : "The GoodMood Studio project demonstrates the dual nature of Vanessa's role as Head of IT: she is both a hands-on engineer delivering production code (as evidenced across Projects 1–3) and a technical manager responsible for the quality of her team's output. Managing GoodMood Studio's implementation while simultaneously delivering the RedBridge V5 migration and building Siddeley Talent Link from scratch demonstrates the breadth of responsibility carried across this period."}
          </p>
        </div>
      </FadeIn>
    </ProjectPageLayout>
  );
}
