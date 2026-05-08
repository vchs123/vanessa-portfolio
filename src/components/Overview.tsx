"use client";
import { useLang } from "@/context/LanguageContext";
import { overview } from "@/lib/content";
import FadeIn from "./FadeIn";

export default function Overview() {
  const { lang } = useLang();
  const t = overview[lang];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10 gradient-text inline-block">
            {t.heading}
          </h2>
        </FadeIn>
        <div className="space-y-5">
          {t.body.map((para, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
                {para}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
