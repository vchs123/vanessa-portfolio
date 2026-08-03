"use client";

import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { duties } from "@/lib/duties";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const ACCENT = "#0d9488";

export default function DutiesPage() {
  const { lang } = useLang();
  const t = duties[lang];
  const [activeTab, setActiveTab] = useState(t.tabs[0].id);

  const activeRole = t.tabs.find((tab) => tab.id === activeTab) ?? t.tabs[0];

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white pt-28 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Page header */}
          <div className="mb-10">
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ background: "#f0fdfa", color: ACCENT }}
            >
              {lang === "zh" ? "职责概览 · 2026年" : "Role Breakdown · 2026"}
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              {t.pageTitle}
            </h1>
            <p className="text-base text-gray-500 max-w-2xl leading-relaxed">
              {t.pageSubtitle}
            </p>
            <p className="mt-3 text-sm text-gray-400 italic">{t.note}</p>
          </div>

          {/* Tab navigation */}
          <div className="mb-8 border-b border-gray-100">
            <div className="flex flex-wrap gap-1 -mb-px">
              {t.tabs.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-all duration-150 whitespace-nowrap ${
                      isActive
                        ? "text-white"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    }`}
                    style={
                      isActive
                        ? { background: ACCENT }
                        : {}
                    }
                  >
                    {tab.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-0 w-full h-0.5"
                        style={{ background: ACCENT }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active tab panel */}
          <div key={activeTab}>
            {/* Role subtitle */}
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              {activeRole.subtitle}
            </p>

            {/* XYZ bullets */}
            <div className="flex flex-col gap-5">
              {activeRole.bullets.map((bullet, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-5 sm:p-6 relative overflow-hidden"
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-0 h-full w-1 rounded-l-2xl"
                    style={{ background: ACCENT }}
                  />
                  <div className="pl-3 flex flex-col gap-3">
                    {/* X: accomplished */}
                    <p className="text-gray-900 font-semibold leading-snug text-[15px]">
                      {bullet.accomplished}
                    </p>
                    {/* Y: by */}
                    <div className="flex gap-2">
                      <span
                        className="text-[11px] font-bold uppercase tracking-widest mt-0.5 shrink-0"
                        style={{ color: ACCENT }}
                      >
                        {lang === "zh" ? "方式" : "by"}
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {bullet.by}
                      </p>
                    </div>
                    {/* Z: resulting */}
                    <div className="flex gap-2">
                      <span
                        className="text-[11px] font-bold uppercase tracking-widest mt-0.5 shrink-0"
                        style={{ color: "#9d174d" }}
                      >
                        {lang === "zh" ? "结果" : "result"}
                      </span>
                      <p className="text-gray-700 text-sm leading-relaxed font-medium">
                        {bullet.resulting}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <p className="mt-10 text-xs text-gray-300 text-right">
              {lang === "zh"
                ? "以谷歌 XYZ 公式撰写 · 所有成就均源自实际交付物"
                : "Written in Google's XYZ formula · all achievements drawn from real deliverables"}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
