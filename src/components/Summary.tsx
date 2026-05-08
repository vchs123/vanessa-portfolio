"use client";
import { useLang } from "@/context/LanguageContext";
import { summary } from "@/lib/content";
import FadeIn from "./FadeIn";

export default function Summary() {
  const { lang } = useLang();
  const t = summary[lang];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-2 gradient-text inline-block">
            {t.heading}
          </h2>
          <p className="text-gray-400 text-sm mb-10">{t.subheading}</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
            <table className="w-full text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-pink-50 to-purple-50">
                  {t.cols.map((col, i) => (
                    <th key={i} className="text-left px-4 py-3 font-semibold text-gray-700 first:rounded-tl-2xl last:rounded-tr-2xl">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.rows.map((row, i) => (
                  <tr key={i} className="border-t border-gray-100 hover:bg-pink-50/30 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-800">{row.project}</td>
                    <td className="px-4 py-3 text-gray-600">{row.period}</td>
                    <td className="px-4 py-3 text-gray-600">{row.role}</td>
                    <td className="px-4 py-3 font-mono text-gray-700">{row.commits}</td>
                    <td className="px-4 py-3 text-emerald-700 font-medium">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 text-white">
            <p className="font-semibold text-sm md:text-base">{t.total}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
