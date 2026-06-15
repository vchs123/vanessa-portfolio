"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { stats } from "@/lib/content";

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const raf = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function StatItem({
  num, label, index, visible,
}: { num: string; label: string; index: number; visible: boolean }) {
  // Extract leading number if present (e.g. "6", "218", "$8k")
  const match = num.match(/^(\d+)/);
  const targetNum = match ? parseInt(match[1]) : null;
  const prefix = match ? num.slice(0, num.indexOf(match[1])) : "";
  const suffix = match ? num.slice(num.indexOf(match[1]) + match[1].length) : "";
  const counted = useCountUp(targetNum ?? 0, 1400 + index * 120, visible && targetNum !== null);
  const displayNum = targetNum !== null ? `${prefix}${counted}${suffix}` : num;

  return (
    <div
      className="text-center text-white"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s`,
      }}
    >
      <div className="font-serif text-4xl md:text-5xl font-bold">{displayNum}</div>
      <div className="text-sm font-medium opacity-80 mt-1">{label}</div>
    </div>
  );
}

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
    <div ref={ref} className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 py-10">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {t.map((s, i) => (
          <StatItem key={i} num={s.num} label={s.label} index={i} visible={visible} />
        ))}
      </div>
    </div>
  );
}
