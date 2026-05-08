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
      {/* Team table */}
      <FadeIn delay={0.25}>
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
