"use client";
import Link from "next/link";
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
          className="py-16 px-6"
          style={{ background: `linear-gradient(135deg, ${accentLight} 0%, white 100%)` }}
        >
          <div className="max-w-5xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Back to home
            </Link>
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: accent + "22", color: accent }}
            >
              {tag}
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4" style={{ color: accent }}>
              {title}
            </h1>
            <p className="text-gray-500 text-base md:text-lg">{subtitle}</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
          {/* Business impact */}
          <FadeIn>
            <section>
              <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: accent }}>
                Business Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {impact.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-5 border"
                    style={{ backgroundColor: accentLight, borderColor: accent + "30" }}
                  >
                    <div
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: accent }}
                    >
                      {item.label}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* Stats grid */}
          {statsGrid && (
            <FadeIn delay={0.1}>
              <section>
                <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: accent }}>
                  Scale at a Glance
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {statsGrid.map((s, i) => (
                    <div
                      key={i}
                      className="text-center rounded-2xl py-6 px-4 border"
                      style={{ backgroundColor: accentLight, borderColor: accent + "30" }}
                    >
                      <div className="font-serif text-3xl font-bold" style={{ color: accent }}>
                        {s.num}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </section>
            </FadeIn>
          )}

          {/* Summary table */}
          <FadeIn delay={0.15}>
            <section>
              <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: accent }}>
                Project Summary
              </h2>
              <BilingualTable rows={tableRows} accent={accent} />
            </section>
          </FadeIn>

          {/* Highlights */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: accent }}>
                Key Highlights
              </h2>
              <ul className="space-y-3">
                {highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: accent }}
                    />
                    <span className="text-gray-700 text-sm leading-relaxed">{h}</span>
                  </li>
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
