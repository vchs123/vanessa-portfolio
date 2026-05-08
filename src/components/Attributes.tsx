"use client";
import { useLang } from "@/context/LanguageContext";
import { attributes } from "@/lib/content";
import FadeIn from "./FadeIn";

export default function Attributes() {
  const { lang } = useLang();
  const t = attributes[lang];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 gradient-text inline-block">
            {lang === "zh" ? "核心能力" : "Key Strengths"}
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.map((attr, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="card-tilt group bg-white rounded-2xl p-6 border border-gray-100 hover:border-pink-200 transition-all cursor-default">
                <div className="text-3xl mb-3">{attr.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-pink-700 transition-colors">
                  {attr.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{attr.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
