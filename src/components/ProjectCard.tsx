"use client";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { projectCards } from "@/lib/content";
import FadeIn from "./FadeIn";

export default function ProjectCards() {
  const { lang } = useLang();
  const cards = projectCards[lang];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 gradient-text inline-block">
            {lang === "zh" ? "项目" : "Projects"}
          </h2>
          <p className="text-gray-500 mb-12 text-base">
            {lang === "zh"
              ? "2026年2月–5月 · Siddeley Group 跨子公司"
              : "Feb – May 2026 · Cross-subsidiary, Siddeley Group"}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <FadeIn key={card.slug} delay={i * 0.1}>
              <Link href={`/projects/${card.slug}/`} className="block group">
                <div
                  className="card-tilt rounded-2xl border-2 overflow-hidden h-full transition-all"
                  style={{ borderColor: card.accentLight }}
                >
                  {/* Coloured header band */}
                  <div
                    className="px-6 pt-6 pb-4"
                    style={{ backgroundColor: card.accentLight }}
                  >
                    <span
                      className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{ backgroundColor: card.accent + "22", color: card.accent }}
                    >
                      {card.tag}
                    </span>
                    <h3
                      className="font-serif text-2xl font-bold mt-3 group-hover:opacity-80 transition-opacity"
                      style={{ color: card.accent }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Body */}
                  <div className="bg-white px-6 py-5 flex flex-col gap-4">
                    <p className="text-sm text-gray-600 leading-relaxed">{card.summary}</p>

                    {/* Mini stats */}
                    <div className="flex gap-4 flex-wrap">
                      {card.stats.map((s, j) => (
                        <div key={j} className="text-center">
                          <div className="font-serif text-xl font-bold" style={{ color: card.accent }}>
                            {s.num}
                          </div>
                          <div className="text-xs text-gray-400">{s.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center gap-1 text-xs font-semibold mt-1" style={{ color: card.accent }}>
                      {lang === "zh" ? "查看详情" : "View project"}
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
