"use client";
import { useLang } from "@/context/LanguageContext";
import { p3 } from "@/lib/content";
import ProjectPageLayout from "@/components/ProjectPageLayout";
import FadeIn from "@/components/FadeIn";

export default function SiddeleyTalentLinkPage() {
  const { lang } = useLang();
  const t = p3[lang];

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
      {/* Blind vote callout */}
      <FadeIn delay={0.25}>
        <div className="rounded-2xl bg-green-50 border-2 border-green-200 p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🗳️</span>
            <h3 className="font-serif text-2xl font-bold text-green-800">
              {t.voteCallout.title}
            </h3>
          </div>
          <p className="text-green-700 text-sm leading-relaxed mb-5">{t.voteCallout.body}</p>

          {/* Visual scoreboard */}
          <div className="flex flex-wrap gap-3">
            {[
              {
                icon: "👥",
                label: lang === "zh" ? "参与人数" : "Participants selected",
                value: "15",
                color: "text-green-800",
              },
              {
                icon: "📬",
                label: lang === "zh" ? "作答人数" : "Responded",
                value: "6",
                color: "text-green-800",
              },
              {
                icon: "✅",
                label: lang === "zh" ? "选择 Vanessa" : "Chose Vanessa",
                value: "6/6",
                color: "text-green-800",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex-1 min-w-24 text-center bg-white rounded-xl py-4 px-3 border border-green-100"
              >
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className={`font-serif text-3xl font-bold ${item.color}`}>{item.value}</div>
                <div className="text-xs text-green-600 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Chinese name note */}
      <FadeIn delay={0.3}>
        <div className="rounded-xl bg-blue-50 border border-blue-100 px-5 py-4 flex gap-3 items-start">
          <span className="text-xl">🌏</span>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-1">
              {lang === "zh" ? "品牌名称" : "Chinese Brand Name"}
            </div>
            <p className="text-sm text-blue-800">
              {lang === "zh"
                ? "维拓联才 — Siddeley Talent Link 的中文品牌名称，创意标语由 Vanessa 独立创作，为公司品牌赋予全新身份。"
                : "维拓联才 — the Chinese brand name for Siddeley Talent Link. The company's slogan was absent from its brand; Vanessa created one from scratch."}
            </p>
          </div>
        </div>
      </FadeIn>
    </ProjectPageLayout>
  );
}
