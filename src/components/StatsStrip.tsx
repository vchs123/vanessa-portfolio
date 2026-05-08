"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { stats } from "@/lib/content";

export default function StatsStrip() {
  const { lang } = useLang();
  const t = stats[lang];
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 py-10"
    >
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {t.map((s, i) => (
          <div
            key={i}
            className="text-center text-white"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(16px)",
              transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
            }}
          >
            <div className="font-serif text-4xl md:text-5xl font-bold">{s.num}</div>
            <div className="text-sm font-medium opacity-80 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
