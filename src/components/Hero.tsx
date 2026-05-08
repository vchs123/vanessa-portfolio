"use client";
import { useLang } from "@/context/LanguageContext";
import { hero } from "@/lib/content";
import Link from "next/link";

export default function Hero() {
  const { lang } = useLang();
  const t = hero[lang];

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden px-6 py-24">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute w-[520px] h-[520px] rounded-full opacity-25 animate-blob animate-float"
          style={{
            background: "radial-gradient(circle, #f9a8d4, #f472b6)",
            top: "-80px",
            right: "-100px",
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20 animate-blob animate-float"
          style={{
            background: "radial-gradient(circle, #a5f3fc, #60a5fa)",
            bottom: "-60px",
            left: "-80px",
            animationDelay: "2s",
            animationDuration: "8s",
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full opacity-15 animate-blob animate-float"
          style={{
            background: "radial-gradient(circle, #bbf7d0, #34d399)",
            top: "40%",
            left: "40%",
            animationDelay: "4s",
            animationDuration: "10s",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto w-full">
        {/* Tag pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-semibold tracking-wider uppercase mb-6 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
          {t.tag}
        </div>

        {/* Name */}
        <h1 className="font-serif text-6xl md:text-8xl font-bold leading-none mb-4 animate-fade-up gradient-text"
          style={{ animationDelay: "0.1s" }}>
          {t.name}
        </h1>

        {/* Role */}
        <p className="text-lg md:text-xl font-semibold text-gray-500 mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}>
          {t.role}
        </p>

        {/* Tagline */}
        <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: "0.3s" }}>
          {t.tagline}
        </p>

        {/* CTA */}
        <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-pink-600 text-white font-semibold text-sm hover:bg-pink-700 transition-all hover:scale-105 shadow-lg shadow-pink-200"
          >
            {t.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
