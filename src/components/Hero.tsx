"use client";
import { useLang } from "@/context/LanguageContext";
import { hero } from "@/lib/content";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const { lang } = useLang();
  const t = hero[lang];
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = () => window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice()) return;

    const handleMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;

      if (blob1.current) blob1.current.style.transform = `translate(${dx * -28}px, ${dy * -20}px)`;
      if (blob2.current) blob2.current.style.transform = `translate(${dx * 20}px, ${dy * 16}px)`;
      if (blob3.current) blob3.current.style.transform = `translate(${dx * 12}px, ${dy * -12}px)`;
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden px-6 py-24">
      {/* Animated gradient blobs with mouse parallax */}
      <div className="absolute inset-0 -z-10">
        <div
          ref={blob1}
          className="absolute w-[560px] h-[560px] rounded-full opacity-25 animate-blob animate-float"
          style={{
            background: "radial-gradient(circle, #f9a8d4, #f472b6)",
            top: "-80px",
            right: "-100px",
            animationDelay: "0s",
            transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        <div
          ref={blob2}
          className="absolute w-[420px] h-[420px] rounded-full opacity-20 animate-blob animate-float"
          style={{
            background: "radial-gradient(circle, #a5f3fc, #60a5fa)",
            bottom: "-60px",
            left: "-80px",
            animationDelay: "2s",
            animationDuration: "8s",
            transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        <div
          ref={blob3}
          className="absolute w-[320px] h-[320px] rounded-full opacity-15 animate-blob animate-float"
          style={{
            background: "radial-gradient(circle, #bbf7d0, #34d399)",
            top: "40%",
            left: "40%",
            animationDelay: "4s",
            animationDuration: "10s",
            transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        {/* 4th accent blob */}
        <div
          className="absolute w-[200px] h-[200px] rounded-full opacity-10 animate-blob animate-float"
          style={{
            background: "radial-gradient(circle, #ddd6fe, #a78bfa)",
            top: "20%",
            left: "8%",
            animationDelay: "1s",
            animationDuration: "12s",
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
        <h1
          className="font-serif text-6xl md:text-8xl font-bold leading-none mb-4 animate-fade-up gradient-text"
          style={{ animationDelay: "0.1s" }}
        >
          {t.name}
        </h1>

        {/* Role */}
        <p
          className="text-lg md:text-xl font-semibold text-gray-500 mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {t.role}
        </p>

        {/* Tagline */}
        <p
          className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          {t.tagline}
        </p>

        {/* CTA */}
        <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-pink-600 text-white font-semibold text-sm hover:bg-pink-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-pink-200 hover:shadow-pink-300"
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
