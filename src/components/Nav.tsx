"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { nav } from "@/lib/content";

const projects = [
  { slug: "redbridge-website", en: "RedBridge Website + CRM Portal", zh: "RedBridge 网站 + CRM 门户" },
  { slug: "redbridge-migration", en: "RedBridge Website V2", zh: "RedBridge 网站 V2" },
  { slug: "siddeley-talent-link", en: "Siddeley Talent Link", zh: "维拓联才" },
  { slug: "goodmood-studio", en: "GoodMood Studio", zh: "GoodMood Studio" },
];

export default function Nav() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const t = nav[lang];

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-3 z-50 mx-4 mt-3">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl bg-white/80 backdrop-blur-md shadow-md border border-gray-100">
        {/* Logo */}
        <Link href="/" className="font-serif text-lg font-semibold text-gray-900 hover:text-pink-700 transition-colors">
          VC
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-pink-700 transition-colors">{t.home}</Link>

          {/* Projects dropdown */}
          <div className="relative" ref={dropRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 hover:text-pink-700 transition-colors"
            >
              {t.projects}
              <svg className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {open && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                {projects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}/`}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors"
                  >
                    {lang === "zh" ? p.zh : p.en}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: lang toggle + mobile menu */}
        <div className="flex items-center gap-3">
          {/* EN/ZH pill toggle */}
          <div className="relative flex items-center bg-gray-100 rounded-full p-0.5 text-xs font-semibold">
            <span
              className="absolute h-full top-0 rounded-full bg-pink-600 transition-all duration-300"
              style={{
                width: "50%",
                left: lang === "en" ? "0" : "50%",
              }}
            />
            <button
              onClick={() => setLang("en")}
              className={`relative z-10 px-3 py-1 rounded-full transition-colors ${lang === "en" ? "text-white" : "text-gray-500"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("zh")}
              className={`relative z-10 px-3 py-1 rounded-full transition-colors ${lang === "zh" ? "text-white" : "text-gray-500"}`}
            >
              中文
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {mobileOpen
                ? <path d="M6 18L18 6M6 6l12 12" />
                : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mx-auto max-w-5xl mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-3 px-5">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-gray-700 hover:text-pink-700">{t.home}</Link>
          <div className="mt-1 mb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">{t.projects}</div>
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}/`}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-gray-700 hover:text-pink-700 pl-3"
            >
              {lang === "zh" ? p.zh : p.en}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
