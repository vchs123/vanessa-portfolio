"use client";
import { useLang } from "@/context/LanguageContext";
import { growth } from "@/lib/content";
import FadeIn from "./FadeIn";

export default function Growth() {
  const { lang } = useLang();
  const t = growth[lang];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 gradient-text inline-block">
            {t.heading}
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="card-tilt flex gap-4 bg-white rounded-2xl p-6 border border-gray-100 hover:border-pink-200 transition-all">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-gray-800 leading-snug">
                    {item.value}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
