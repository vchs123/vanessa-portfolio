"use client";
import { useLang } from "@/context/LanguageContext";
import { p9 } from "@/lib/content";
import ProjectPageLayout from "@/components/ProjectPageLayout";

export default function OrganisationPortalPage() {
  const { lang } = useLang();
  const t = p9[lang];

  return (
    <ProjectPageLayout
      tag={t.tag}
      title={t.title}
      subtitle={t.subtitle}
      accent={t.accent}
      impact={t.impact}
      tableRows={t.tableRows}
      highlights={t.highlights}
      statsGrid={t.statsGrid}
    />
  );
}
