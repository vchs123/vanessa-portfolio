"use client";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { projectCards } from "@/lib/content";
import FadeIn from "./FadeIn";

function todayLabel(lang: string) {
  const now = new Date();
  if (lang === "zh") {
    const y = now.getFullYear();
    const m = now.getMonth() + 1;
    const d = now.getDate();
    return `2026年2月 – ${y}年${m}月${d}日 · Siddeley Group 跨子公司`;
  }
  const d = now.getDate();
  const month = now.toLocaleString("en-AU", { month: "short" });
  const y = now.getFullYear();
  return `Feb 2026 – ${d} ${month} ${y} · Cross-subsidiary, Siddeley Group`;
}

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
            {todayLabel(lang)}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <FadeIn key={card.slug} delay={i * 0.08} variant={i % 2 === 0 ? "left" : "right"}>
              <CardItem card={card} lang={lang} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CardData {
  slug: string;
  accent: string;
  accentLight: string;
  tag: string;
  title: string;
  summary: string;
  stats: { num: string; label: string }[];
}

function CardItem({ card, lang }: { card: CardData; lang: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/projects/${card.slug}/`} className="block group h-full">
      <div
        className="rounded-2xl border-2 overflow-hidden h-full transition-all duration-300"
        style={{
          borderColor: hovered ? card.accent + "80" : card.accentLight,
          transform: hovered ? "translateY(-4px) scale(1.01)" : "translateY(0) scale(1)",
          boxShadow: hovered
            ? `0 16px 48px -8px ${card.accent}38`
            : "0 2px 8px -2px rgba(0,0,0,0.06)",
          transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease, border-color 0.25s ease",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Coloured header band */}
        <div
          className="px-6 pt-6 pb-4 transition-colors duration-300"
          style={{ backgroundColor: hovered ? card.accent + "22" : card.accentLight }}
        >
          <span
            className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ backgroundColor: card.accent + "22", color: card.accent }}
          >
            {card.tag}
          </span>
          <h3
            className="font-serif text-2xl font-bold mt-3 transition-opacity"
            style={{ color: card.accent, opacity: hovered ? 0.85 : 1 }}
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
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200"
              style={{ transform: hovered ? "translateX(4px)" : "translateX(0)" }}
              fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
