"use client";
import { useLang } from "@/context/LanguageContext";
import { p2 } from "@/lib/content";
import ProjectPageLayout from "@/components/ProjectPageLayout";
import FadeIn from "@/components/FadeIn";

export default function RedbridgeMigrationPage() {
  const { lang } = useLang();
  const t = p2[lang];

  return (
    <ProjectPageLayout
      tag={t.tag}
      title={t.title}
      subtitle={t.subtitle}
      accent={t.accent}
      impact={t.impact}
      tableRows={t.tableRows}
      highlights={t.highlights}
    >
      {/* Phase breakdown */}
      <FadeIn delay={0.25}>
        <section>
          <h2 className="font-serif text-3xl font-bold mb-8" style={{ color: t.accent }}>
            {lang === "zh" ? "阶段详情" : "Phase Breakdown"}
          </h2>
          <div className="space-y-6">
            {t.phases.map((phase, i) => (
              <div
                key={i}
                className="rounded-2xl border-2 overflow-hidden"
                style={{ borderColor: t.accent + "30" }}
              >
                <div
                  className="px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-2"
                  style={{ backgroundColor: t.accent + "10" }}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full self-start"
                    style={{ backgroundColor: t.accent + "20", color: t.accent }}
                  >
                    {phase.number}
                  </span>
                  <div>
                    <div className="font-serif text-xl font-bold text-gray-900">{phase.title}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{phase.period}</div>
                  </div>
                </div>
                <div className="bg-white px-6 py-5">
                  <ul className="space-y-3">
                    {phase.outcomes.map((outcome, j) => (
                      <li key={j} className="flex gap-3 items-start">
                        <span
                          className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: t.accent }}
                        />
                        <span className="text-sm text-gray-700 leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Team table */}
      <FadeIn delay={0.3}>
        <section>
          <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: t.accent }}>
            {lang === "zh" ? "团队" : "Team"}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-purple-100 shadow-sm">
            <table className="w-full text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-purple-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    {lang === "zh" ? "成员" : "Member"}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    {lang === "zh" ? "职能" : "Role"}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    {lang === "zh" ? "提交" : "Commits"}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    {lang === "zh" ? "专注领域" : "Focus"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.team.map((member, i) => (
                  <tr key={i} className="border-t border-gray-100 hover:bg-purple-50/30 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-800">{member.name}</td>
                    <td className="px-4 py-3 text-gray-600">{member.role}</td>
                    <td className="px-4 py-3 font-mono font-bold" style={{ color: t.accent }}>{member.commits}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs leading-relaxed">{member.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </FadeIn>
    </ProjectPageLayout>
  );
}
