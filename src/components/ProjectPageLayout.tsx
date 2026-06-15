"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import BilingualTable from "./BilingualTable";
import FadeIn from "./FadeIn";

interface ImpactItem { label: string; text: string; }
interface TableRow { field: string; fieldZh: string; value: string; valueZh: string; }

interface Props {
  tag: string;
  title: string;
  subtitle: string;
  accent: string;
  impact: ImpactItem[];
  tableRows: TableRow[];
  highlights: string[];
  statsGrid?: { num: string; label: string }[];
  children?: React.ReactNode;
}

function StaggerItem({
  children,
  delay,
  variant = "up",
}: {
  children: React.ReactNode;
  delay: number;
  variant?: "up" | "left" | "scale";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const initial =
    variant === "left" ? "translateX(-28px)" :
    variant === "scale" ? "scale(0.85)" :
    "translateY(20px)";

  const final = variant === "scale" ? "scale(1)" : "none";

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? final : initial,
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function ProjectPageLayout({
  tag, title, subtitle, accent, impact, tableRows, highlights, statsGrid, children,
}: Props) {
  const accentLight = accent + "18";

  return (
    <>
      <Nav />
      <main className="min-h-screen">
        {/* Hero header */}
        <div
          className="py-16 px-6 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${accentLight} 0%, white 100%)` }}
        >
          {/* Subtle background blob */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-10 animate-blob"
            style={{ background: `radial-gradient(circle, ${accent}, transparent)` }}
          />
          <div className="max-w-5xl mx-auto relative">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Back to home
            </Link>
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4 animate-fade-up"
              style={{ backgroundColor: accent + "22", color: accent }}
            >
              {tag}
            </div>
            <h1
              className="font-serif text-5xl md:text-6xl font-bold mb-4 animate-fade-up"
              style={{ color: accent, animationDelay: "0.05s" }}
            >
              {title}
            </h1>
            <p
              className="text-gray-500 text-base md:text-lg animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              {subtitle}
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
          {/* Business impact — staggered cards */}
          <FadeIn>
            <section>
              <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: accent }}>
                Business Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {impact.map((item, i) => (
                  <StaggerItem key={i} delay={i * 0.1} variant="scale">
                    <div
                      className="rounded-2xl p-5 border h-full transition-shadow duration-300 hover:shadow-lg"
                      style={{
                        backgroundColor: accentLight,
                        borderColor: accent + "30",
                      }}
                    >
                      <div
                        className="text-xs font-bold uppercase tracking-widest mb-2"
                        style={{ color: accent }}
                      >
                        {item.label}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* Stats grid — pop-in with stagger */}
          {statsGrid && (
            <FadeIn delay={0.05}>
              <section>
                <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: accent }}>
                  Scale at a Glance
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {statsGrid.map((s, i) => (
                    <StaggerItem key={i} delay={i * 0.06} variant="scale">
                      <div
                        className="text-center rounded-2xl py-6 px-4 border transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default"
                        style={{
                          backgroundColor: accentLight,
                          borderColor: accent + "30",
                        }}
                      >
                        <div className="font-serif text-3xl font-bold" style={{ color: accent }}>
                          {s.num}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </section>
            </FadeIn>
          )}

          {/* Summary table */}
          <FadeIn delay={0.1} variant="up">
            <section>
              <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: accent }}>
                Project Summary
              </h2>
              <BilingualTable rows={tableRows} accent={accent} />
            </section>
          </FadeIn>

          {/* Highlights — staggered left-slide */}
          <FadeIn delay={0.05}>
            <section>
              <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: accent }}>
                Key Highlights
              </h2>
              <ul className="space-y-3">
                {highlights.map((h, i) => (
                  <StaggerItem key={i} delay={i * 0.04} variant="left">
                    <li className="flex gap-3 items-start group">
                      <span
                        className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 transition-transform duration-200 group-hover:scale-125"
                        style={{ backgroundColor: accent }}
                      />
                      <span className="text-gray-700 text-sm leading-relaxed">{h}</span>
                    </li>
                  </StaggerItem>
                ))}
              </ul>
            </section>
          </FadeIn>

          {/* Extra content slot */}
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
