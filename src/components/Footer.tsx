"use client";
import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="border-t border-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <div className="font-serif text-base font-semibold text-gray-700">
          {lang === "zh" ? "蔡美莲 · IT 总监" : "Vanessa Chua · Head of IT"}
        </div>
        <div className="text-center md:text-right">
          <div>{lang === "zh" ? "Siddeley Group · 2026年" : "Siddeley Group · 2026"}</div>
          <div className="text-xs mt-1 opacity-60">
            {lang === "zh"
              ? "本文件为绩效回顾，供内部查阅。"
              : "This document is a performance review for internal reference."}
          </div>
        </div>
      </div>
    </footer>
  );
}
