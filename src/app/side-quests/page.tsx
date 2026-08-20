"use client";
import { useLang } from "@/context/LanguageContext";
import { sideQuests } from "@/lib/sideQuests";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function SideQuestsPage() {
  const { lang } = useLang();
  const t = sideQuests[lang];

  return (
    <>
      <Nav />
      <main className="min-h-screen">
        {/* Hero */}
        <div className="py-16 px-6 bg-gradient-to-br from-stone-50 to-white border-b border-stone-100">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-4 transition-colors group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              {lang === "zh" ? "返回首页" : "Back to home"}
            </Link>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {t.pageTitle}
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed">
              {t.pageSubtitle}
            </p>
          </div>
        </div>

        {/* Quest cards */}
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
          {t.quests.map((quest, qi) => (
            <FadeIn key={quest.id} delay={qi * 0.08}>
              <article
                className="rounded-2xl border-2 overflow-hidden"
                style={{ borderColor: quest.accent + "28" }}
              >
                {/* Card header */}
                <div
                  className="px-7 py-5 flex flex-col sm:flex-row sm:items-start gap-3"
                  style={{ backgroundColor: quest.accent + "0c" }}
                >
                  <div className="flex-1">
                    <div
                      className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{ color: quest.accent }}
                    >
                      {quest.tag}
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-gray-900 mb-0.5">
                      {quest.title}
                    </h2>
                    <p className="text-sm text-gray-500">{quest.subtitle}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:justify-end">
                    {quest.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: quest.accent + "18", color: quest.accent }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white px-7 py-6 space-y-6">
                  {/* Summary */}
                  <p className="text-sm text-gray-700 leading-relaxed">{quest.summary}</p>

                  {/* Steps */}
                  {quest.steps.length > 0 && (
                    <div className="space-y-3">
                      {quest.steps.map((step, si) => (
                        <div
                          key={si}
                          className="flex gap-4 items-start rounded-xl p-4 border"
                          style={{ borderColor: quest.accent + "20", backgroundColor: quest.accent + "05" }}
                        >
                          <div
                            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                            style={{ backgroundColor: quest.accent }}
                          >
                            {si + 1}
                          </div>
                          <div>
                            <div
                              className="text-xs font-bold uppercase tracking-widest mb-1"
                              style={{ color: quest.accent }}
                            >
                              {step.label}
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">{step.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Outcome */}
                  {quest.outcome && (
                    <div
                      className="rounded-xl px-5 py-4 border flex gap-3 items-start"
                      style={{ backgroundColor: quest.accent + "08", borderColor: quest.accent + "25" }}
                    >
                      <span className="text-lg">✓</span>
                      <div>
                        <div
                          className="text-xs font-bold uppercase tracking-widest mb-1"
                          style={{ color: quest.accent }}
                        >
                          {lang === "zh" ? "结果" : "Outcome"}
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{quest.outcome}</p>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
