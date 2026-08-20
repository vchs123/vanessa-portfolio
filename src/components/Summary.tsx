"use client";
import { useLang } from "@/context/LanguageContext";
import { summary } from "@/lib/content";
import FadeIn from "./FadeIn";
import { useState, useEffect, useRef } from "react";

const PAGE_SIZE = 3;

function useStagger(page: number) {
  const [visible, setVisible] = useState(false);
  const prev = useRef(page);
  useEffect(() => {
    if (prev.current !== page) {
      setVisible(false);
      const t = setTimeout(() => setVisible(true), 30);
      prev.current = page;
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, [page]);
  return visible;
}

export default function Summary() {
  const { lang } = useLang();
  const t = summary[lang];
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(t.rows.length / PAGE_SIZE);
  const pageRows = t.rows.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  const staggerVisible = useStagger(page);

  const accent = "#db2777"; // pink-600

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-2 gradient-text inline-block">
            {t.heading}
          </h2>
          <p className="text-gray-400 text-sm mb-10">{t.subheading}</p>
        </FadeIn>

        {/* Cards */}
        <div className="space-y-3 min-h-[280px]">
          {pageRows.map((row, i) => (
            <div
              key={`${page}-${i}`}
              style={{
                opacity: staggerVisible ? 1 : 0,
                transform: staggerVisible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.4s ease ${i * 0.09}s, transform 0.4s cubic-bezier(0.22,1,0.36,1) ${i * 0.09}s`,
              }}
            >
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3 hover:border-pink-200 hover:shadow-md transition-all duration-200">
                {/* Project number badge */}
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${accent}, #9333ea)` }}
                >
                  {page * PAGE_SIZE + i + 1}
                </div>

                {/* Project name */}
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-sm leading-snug truncate">
                    {row.project}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{row.period}</div>
                </div>

                {/* Role */}
                <div className="hidden md:block text-xs text-gray-500 flex-shrink-0 max-w-[180px] text-right leading-snug">
                  {row.role}
                </div>

                {/* Commits */}
                <div className="hidden sm:block text-xs font-mono text-gray-600 flex-shrink-0 w-20 text-center">
                  {row.commits}
                </div>

                {/* Cost/Impact */}
                <div className="text-xs font-semibold text-emerald-700 flex-shrink-0 max-w-[200px] text-right leading-snug">
                  {row.cost}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <FadeIn delay={0.1}>
          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed hover:not-disabled:border-pink-300 hover:not-disabled:text-pink-700 hover:not-disabled:bg-pink-50 border-gray-200 text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              {lang === "zh" ? "上一页" : "Previous"}
            </button>

            {/* Page dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: i === page ? 20 : 8,
                    height: 8,
                    backgroundColor: i === page ? accent : "#e5e7eb",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed hover:not-disabled:border-pink-300 hover:not-disabled:text-pink-700 hover:not-disabled:bg-pink-50 border-gray-200 text-gray-600"
            >
              {lang === "zh" ? "下一页" : "Next"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </FadeIn>

        {/* Total callout */}
        <FadeIn delay={0.2}>
          <div className="mt-5 p-5 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 text-white">
            <p className="font-semibold text-sm md:text-base">{t.total}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
