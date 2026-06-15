export type Lang = "en" | "zh";

export const nav = {
  en: {
    home: "Home",
    projects: "Projects",
    p1: "RedBridge Website + CRM Portal",
    p2: "RedBridge Website V2",
    p3: "Siddeley Talent Link",
    p4: "GoodMood Studio",
    p5: "Google Ads — Employer Sponsorship",
    p6: "Siddeley Group Website",
  },
  zh: {
    home: "首页",
    projects: "项目",
    p1: "RedBridge 网站 + CRM 门户",
    p2: "RedBridge 网站 V2",
    p3: "维拓联才",
    p4: "GoodMood Studio",
    p5: "Google Ads — 雇主担保推广",
    p6: "Siddeley Group 网站",
  },
};

export const hero = {
  en: {
    tag: "Performance Review · 2026",
    name: "Vanessa Chua",
    role: "Head of IT · Siddeley Group",
    tagline: "Full-stack engineer and technical manager delivering cross-subsidiary digital infrastructure, solo and at team scale.",
    cta: "View Projects",
  },
  zh: {
    tag: "绩效回顾 · 2026",
    name: "Vanessa Chua",
    role: "IT 总监 · Siddeley Group",
    tagline: "全栈工程师兼技术管理者，独立或带领团队，跨子公司交付数字基础设施。",
    cta: "查看项目",
  },
};

export const stats = {
  en: [
    { num: "4", label: "Subsidiaries Served" },
    { num: "312+", label: "Vanessa's Commits" },
    { num: "~41,500+", label: "Lines of Code" },
    { num: "13 wks", label: "Feb 6 – May 6" },
  ],
  zh: [
    { num: "4", label: "服务子公司" },
    { num: "312+", label: "Vanessa 提交数" },
    { num: "~41,500+", label: "代码行数" },
    { num: "13 周", label: "2月6日 – 5月6日" },
  ],
};

export const overview = {
  en: {
    heading: "Overview",
    body: [
      "Vanessa joined Siddeley Group as a Software Developer and was promoted to Head of IT within the same review period, reflecting rapid demonstrated value across engineering, product management, and cross-subsidiary leadership.",
      "In her dual capacity as engineer and manager, she delivered production digital infrastructure for four subsidiaries — RedBridge Consulting, GoodMood Studio, Siddeley Talent Link, and Insight Idea — over 13 weeks from February to May 2026.",
      "Her work spans a full-stack bilingual website with CRM and booking integration, a modern Next.js framework migration, a job listings platform built solo in under a week, and concurrent technical management of the GoodMood Studio implementation. Combined agency-equivalent cost avoided across all four projects: est. $80,000–$180,000 AUD.",
    ],
  },
  zh: {
    heading: "总体概述",
    body: [
      "Vanessa 以软件开发工程师身份加入 Siddeley Group，并在同一考核周期内晋升为 IT 总监，充分体现了她在工程、产品管理及跨子公司领导方面所展现的卓越价值。",
      "在工程师与管理者的双重角色下，她于 2026 年 2 月至 5 月间，历时 13 周，为 RedBridge Consulting、GoodMood Studio、维拓联才及 Insight Idea 四家子公司交付了生产级数字基础设施。",
      "她的工作涵盖带 CRM 和预约集成的全栈双语网站、现代 Next.js 框架迁移、独立一周内完成的招聘平台，以及对 GoodMood Studio 实施工作的并行技术管理。四个项目合计节省的机构等效费用估计为 $80,000–$180,000 澳元。",
    ],
  },
};

export const attributes = {
  en: [
    {
      icon: "⚡",
      title: "Speed to Production",
      desc: "Four production systems delivered across 13 weeks — solo and at team scale.",
    },
    {
      icon: "🏗️",
      title: "Full-Stack Depth",
      desc: "Frontend, backend, database, DevOps, and integrations — no discipline outsourced.",
    },
    {
      icon: "🌏",
      title: "Bilingual Architecture",
      desc: "EN/ZH across every deliverable, targeting Melbourne's Chinese-speaking migrant market.",
    },
    {
      icon: "📊",
      title: "Strategic Insight",
      desc: "Business impact framed across cost, marketing, and revenue — not just engineering output.",
    },
    {
      icon: "👥",
      title: "Team Leadership",
      desc: "Managed Nicole, Eric, and Chloe through concurrent multi-project delivery as Head of IT.",
    },
    {
      icon: "🔒",
      title: "Security & Compliance",
      desc: "RLS policies, CORS, Meta CAPI server-side, privacy pages — compliance built in from day one.",
    },
  ],
  zh: [
    {
      icon: "⚡",
      title: "快速交付",
      desc: "13 周内交付四套生产系统，独立开发与团队管理并举。",
    },
    {
      icon: "🏗️",
      title: "全栈深度",
      desc: "前端、后端、数据库、DevOps 及集成一体化，无任何环节外包。",
    },
    {
      icon: "🌏",
      title: "双语架构",
      desc: "所有交付物均覆盖中英双语，精准面向墨尔本华人移民市场。",
    },
    {
      icon: "📊",
      title: "战略洞察",
      desc: "以成本、营销和收入三维度衡量业务影响，而非单纯关注工程产出。",
    },
    {
      icon: "👥",
      title: "团队领导",
      desc: "作为 IT 总监，带领 Nicole、Eric 和 Chloe 并行推进多项目交付。",
    },
    {
      icon: "🔒",
      title: "安全与合规",
      desc: "RLS 策略、CORS、Meta CAPI 服务端及隐私页面，合规内建于开发起点。",
    },
  ],
};

export const projectCards = {
  en: [
    {
      slug: "redbridge-website",
      accent: "#be185d",
      accentLight: "#fce7f3",
      tag: "Project 1 · Feb–Apr 2026",
      title: "RedBridge Website + CRM Portal",
      summary: "Full-stack bilingual site with CRM, booking system, and 5 integrations — built solo.",
      stats: [
        { num: "268", label: "Commits" },
        { num: "28", label: "Pages" },
        { num: "~41,500", label: "Lines of code" },
      ],
    },
    {
      slug: "redbridge-migration",
      accent: "#7c3aed",
      accentLight: "#ede9fe",
      tag: "Project 2 · Apr–May 2026",
      title: "RedBridge Website V2",
      summary: "Led the migration from vanilla HTML to Next.js 16 + TypeScript + Tailwind CSS 4, managing 3 direct reports.",
      stats: [
        { num: "25", label: "Vanessa's commits" },
        { num: "218", label: "Total commits" },
        { num: "3", label: "Direct reports" },
      ],
    },
    {
      slug: "siddeley-talent-link",
      accent: "#15803d",
      accentLight: "#dcfce7",
      tag: "Project 3 · Apr–May 2026",
      title: "Siddeley Talent Link",
      summary: "Job listings platform built solo from scratch and live in under a week, including a same-day framework migration.",
      stats: [
        { num: "14", label: "Commits" },
        { num: "< 1 wk", label: "Build time" },
        { num: "7/7", label: "Blind vote wins" },
      ],
    },
    {
      slug: "goodmood-studio",
      accent: "#b45309",
      accentLight: "#fef3c7",
      tag: "Project 4 · Apr–May 2026",
      title: "GoodMood Studio",
      summary: "Technical management and direction of the GoodMood Studio website, concurrent with Projects 2 and 3.",
      stats: [
        { num: "3", label: "Reports directed" },
        { num: "Dual", label: "Engineer + Manager" },
        { num: "Paused", label: "Rebrand in progress" },
      ],
    },
    {
      slug: "google-ads-rb",
      accent: "#1a73e8",
      accentLight: "#e8f0fe",
      tag: "Project 5 · May 2026",
      title: "Google Ads — Employer Sponsorship",
      summary: "Set up and launched a Google Search campaign for RedBridge employer sponsorship leads, achieving 8.5% CTR against an industry average of 3–5%.",
      stats: [
        { num: "2,100", label: "Impressions" },
        { num: "178", label: "Clicks" },
        { num: "8.5%", label: "CTR" },
      ],
    },
    {
      slug: "siddeley-group-website",
      accent: "#1e3a8a",
      accentLight: "#eff6ff",
      tag: "Project 6 · May 8–13, 2026",
      title: "Siddeley Group Website",
      summary: "Sole front-end developer across 2 phases: deployment pipeline, full EN/ZH bilingual i18n across 8 pages and 8 articles, mobile org chart redesign, and 3-root-cause mobile performance fix.",
      stats: [
        { num: "2", label: "Phases" },
        { num: "16", label: "Pages/articles bilingual" },
        { num: "~8k", label: "Words of ZH content" },
      ],
    },
  ],
  zh: [
    {
      slug: "redbridge-website",
      accent: "#be185d",
      accentLight: "#fce7f3",
      tag: "项目 1 · 2026年2月–4月",
      title: "RedBridge 网站",
      summary: "独立开发的全栈双语网站，含 CRM、预约系统及 5 项集成。",
      stats: [
        { num: "268", label: "提交次数" },
        { num: "28", label: "页面数" },
        { num: "~41,500", label: "代码行数" },
      ],
    },
    {
      slug: "redbridge-migration",
      accent: "#7c3aed",
      accentLight: "#ede9fe",
      tag: "项目 2 · 2026年4月–5月",
      title: "RedBridge Website V2",
      summary: "主导从原生 HTML 迁移至 Next.js 16 + TypeScript + Tailwind CSS 4，带领 3 名直属下属完成交付。",
      stats: [
        { num: "25", label: "Vanessa 提交" },
        { num: "218", label: "总提交数" },
        { num: "3", label: "直属下属" },
      ],
    },
    {
      slug: "siddeley-talent-link",
      accent: "#15803d",
      accentLight: "#dcfce7",
      tag: "项目 3 · 2026年4月–5月",
      title: "维拓联才",
      summary: "独立从零搭建招聘平台，一周内上线，含同天完成的框架迁移。",
      stats: [
        { num: "14", label: "提交次数" },
        { num: "< 1周", label: "开发周期" },
        { num: "7/7", label: "盲测全胜" },
      ],
    },
    {
      slug: "goodmood-studio",
      accent: "#b45309",
      accentLight: "#fef3c7",
      tag: "项目 4 · 2026年4月–5月",
      title: "GoodMood Studio",
      summary: "在并行推进项目 2 和项目 3 的同时，对 GoodMood Studio 网站进行技术管理与方向指导。",
      stats: [
        { num: "3", label: "直属下属" },
        { num: "双重", label: "工程师 + 管理者" },
        { num: "暂停", label: "品牌重塑中" },
      ],
    },
    {
      slug: "google-ads-rb",
      accent: "#1a73e8",
      accentLight: "#e8f0fe",
      tag: "项目 5 · 2026年5月",
      title: "Google Ads — 雇主担保推广",
      summary: "独立创建并管理 RedBridge 雇主担保搜索广告系列，点击率达 8.5%，远高于行业均值。",
      stats: [
        { num: "2,100", label: "展示次数" },
        { num: "178", label: "点击次数" },
        { num: "8.5%", label: "点击率" },
      ],
    },
    {
      slug: "siddeley-group-website",
      accent: "#1e3a8a",
      accentLight: "#eff6ff",
      tag: "项目 6 · 2026年5月8日–13日",
      title: "Siddeley Group 网站",
      summary: "两阶段独立前端开发：部署流水线修正、8个页面和8篇文章的完整中英双语国际化、移动端组织架构图重设计及性能优化。",
      stats: [
        { num: "2", label: "阶段数" },
        { num: "16", label: "双语页面/文章" },
        { num: "~8千", label: "中文字数" },
      ],
    },
  ],
};

export const summary = {
  en: {
    heading: "Combined Summary",
    subheading: "All five projects · Feb 6 – May 2026",
    rows: [
      {
        project: "RedBridge Website + CRM Portal",
        period: "Feb 6 – Apr 17",
        role: "Solo engineer",
        commits: "268",
        cost: "$50k–$100k AUD avoided",
      },
      {
        project: "RedBridge Website V2",
        period: "Apr 13 – May 5",
        role: "Head of IT + team lead",
        commits: "25 (+ 193 team)",
        cost: "$20k–$40k AUD avoided",
      },
      {
        project: "Siddeley Talent Link",
        period: "Apr 29 – May 4",
        role: "Solo engineer",
        commits: "14",
        cost: "$15k–$30k AUD avoided",
      },
      {
        project: "GoodMood Studio",
        period: "Apr–May (concurrent)",
        role: "Head of IT · management",
        commits: "— (management)",
        cost: "Rework & consultant cost avoided",
      },
      {
        project: "Google Ads — Employer Sponsorship",
        period: "May 8 – present",
        role: "Head of IT · campaign manager",
        commits: "—",
        cost: "$861 AUD spend · 8.5% CTR",
      },
      {
        project: "Siddeley Group Website",
        period: "May 8–13",
        role: "Sole front-end developer",
        commits: "—",
        cost: "$800–$1,600 translation cost avoided · A$0 hosting",
      },
    ],
    total: "$80k–$180k AUD agency-equivalent cost avoided across engineering projects, plus active paid media management",
    cols: ["Project", "Period", "Role", "Vanessa's Commits", "Cost / Impact"],
  },
  zh: {
    heading: "综合汇总",
    subheading: "五个项目 · 2026年2月6日 – 5月",
    rows: [
      {
        project: "RedBridge 网站 + CRM 门户",
        period: "2月6日 – 4月17日",
        role: "独立工程师",
        commits: "268",
        cost: "节省 $50k–$100k 澳元",
      },
      {
        project: "RedBridge 网站 V2",
        period: "4月13日 – 5月5日",
        role: "IT总监 + 团队负责人",
        commits: "25（+ 193 团队）",
        cost: "节省 $20k–$40k 澳元",
      },
      {
        project: "维拓联才",
        period: "4月29日 – 5月4日",
        role: "独立工程师",
        commits: "14",
        cost: "节省 $15k–$30k 澳元",
      },
      {
        project: "GoodMood Studio",
        period: "4月–5月（并行）",
        role: "IT总监 · 管理职能",
        commits: "— （管理）",
        cost: "避免返工及外部顾问费用",
      },
      {
        project: "Google Ads — 雇主担保推广",
        period: "5月8日 – 至今",
        role: "IT总监 · 广告管理",
        commits: "—",
        cost: "投放 $861 澳元 · 点击率 8.5%",
      },
      {
        project: "Siddeley Group 网站",
        period: "5月8日–13日",
        role: "独立前端开发者",
        commits: "—",
        cost: "节省翻译费 $800–$1,600 · 托管费 A$0",
      },
    ],
    total: "工程项目合计节省机构等效费用 $80k–$180k 澳元，同时主动管理付费媒体广告投放",
    cols: ["项目", "周期", "职能", "Vanessa 提交数", "成本 / 影响"],
  },
};

export const growth = {
  en: {
    heading: "Growth & Recognition",
    items: [
      {
        icon: "📈",
        label: "Promoted within review period",
        value: "Software Developer → Head of IT",
      },
      {
        icon: "🗳️",
        label: "STL blind vote — website comparison",
        value: "15 participants selected · 7 responded · 7/7 chose Vanessa's version",
      },
      {
        icon: "💼",
        label: "Cross-subsidiary responsibility",
        value: "RedBridge · GoodMood · STL · Insight Idea",
      },
      {
        icon: "🤝",
        label: "CRM pitch — ASG sales meeting",
        value: "Presented the RedBridge CRM to ASG leadership, demonstrating how it solves unclear process flows",
      },
    ],
  },
  zh: {
    heading: "成长与认可",
    items: [
      {
        icon: "📈",
        label: "考核期内晋升",
        value: "软件开发工程师 → IT 总监",
      },
      {
        icon: "🗳️",
        label: "维拓联才网站盲测",
        value: "15 人参与 · 7 人作答 · 7/7 选择 Vanessa 的版本",
      },
      {
        icon: "💼",
        label: "跨子公司责任",
        value: "RedBridge · GoodMood · 维拓联才 · Insight Idea",
      },
      {
        icon: "🤝",
        label: "CRM 产品演示 — ASG 销售会议",
        value: "向 ASG 管理层展示 RedBridge CRM，说明其如何解决流程不清晰的问题",
      },
    ],
  },
};

// ─── Project detail pages ────────────────────────────────────────────────────

export const p1 = {
  en: {
    tag: "Project 1 · Feb 6 – Apr 17, 2026",
    title: "RedBridge Website + CRM Portal",
    subtitle: "Role: Software Developer (sole engineer) · 10 weeks",
    accent: "#be185d",
    liveUrl: "https://redbridge.pages.dev/",
    impact: [
      {
        label: "Cost",
        text: "In-house delivery of a full-stack bilingual website with CRM, booking system, database, and integrations — agency-equivalent scope est. $50,000–$100,000 AUD avoided.",
      },
      {
        label: "Marketing",
        text: "EN/ZH bilingual site directly targets Melbourne's Chinese-speaking skilled migrant population. Server-side Meta CAPI integration maximises Facebook and Instagram ad attribution accuracy.",
      },
      {
        label: "Revenue",
        text: "Online booking system converts website visitors directly into paid consultations. CRM portal equips the sales team to manage and close clients — directly supporting RedBridge's consulting revenue.",
      },
    ],
    tableRows: [
      { field: "Project Name", fieldZh: "项目名称", value: "RedBridge Website + CRM Portal", valueZh: "RedBridge 网站 + CRM 门户" },
      { field: "Period", fieldZh: "周期", value: "Feb 6 – Apr 17, 2026 (~10 weeks)", valueZh: "2026年2月6日 – 4月17日（约10周）" },
      { field: "Company", fieldZh: "公司", value: "RedBridge Consulting (Siddeley Group)", valueZh: "RedBridge Consulting（Siddeley Group）" },
      { field: "Role", fieldZh: "职能", value: "Software Developer — Sole engineer", valueZh: "软件开发工程师 — 独立工程师" },
      { field: "Commits", fieldZh: "提交数", value: "268 (all Vanessa)", valueZh: "268（全部为 Vanessa）" },
      { field: "Scale", fieldZh: "规模", value: "~100 files · ~41,500 lines of code · 28 HTML pages · 12 DB tables", valueZh: "约100个文件 · 约41,500行代码 · 28个HTML页面 · 12张数据库表" },
      { field: "Integrations", fieldZh: "集成", value: "Meta CAPI · Google Calendar · Cloudflare Workers · Gemini AI · Meta Pixel", valueZh: "Meta CAPI · Google Calendar · Cloudflare Workers · Gemini AI · Meta Pixel" },
      { field: "Live URL", fieldZh: "上线链接", value: "https://redbridge.pages.dev/", valueZh: "https://redbridge.pages.dev/" },
      { field: "Cost Impact", fieldZh: "成本影响", value: "Est. $50,000–$100,000 AUD agency cost avoided", valueZh: "估计节省机构费用 $50,000–$100,000 澳元" },
    ],
    highlights: [
      "Full-stack solo delivery: frontend design, backend API, database architecture, DevOps, bilingual content, and 5 integrations",
      "28 HTML pages including a staff portal and client-facing booking system",
      "12-table PostgreSQL schema with 28 RLS security policies and 5 automated triggers",
      "Server-side Meta CAPI bypasses ad blockers for accurate conversion attribution",
      "Cloudflare Workers backend with sub-millisecond edge response times",
      "3 video testimonials compressed 72% (98 MB → 28 MB) for performance",
      "CI/CD pipeline: 25 automatic production deployments via GitHub → Cloudflare Pages",
    ],
    statsGrid: [
      { num: "~100", label: "Total files" },
      { num: "~41,500", label: "Lines of code" },
      { num: "28", label: "HTML pages" },
      { num: "12", label: "DB tables" },
      { num: "28", label: "Security policies" },
      { num: "5", label: "DB triggers" },
      { num: "5", label: "Integrations" },
      { num: "268", label: "Commits" },
    ],
  },
  zh: {
    tag: "项目 1 · 2026年2月6日 – 4月17日",
    title: "RedBridge 网站",
    subtitle: "职能：软件开发工程师（独立工程师） · 10 周",
    accent: "#be185d",
    liveUrl: "https://redbridge.pages.dev/",
    impact: [
      {
        label: "成本",
        text: "内部独立交付集 CRM、预约系统、数据库及集成于一体的全栈双语网站，节省机构等效费用估计 $50,000–$100,000 澳元。",
      },
      {
        label: "营销",
        text: "中英双语网站直接面向墨尔本华人技术移民群体。服务端 Meta CAPI 集成最大化 Facebook 和 Instagram 广告归因准确度。",
      },
      {
        label: "收入",
        text: "在线预约系统将网站访客直接转化为付费咨询。CRM 门户为销售团队提供管理和跟进客户的工具，直接支持 RedBridge 的咨询收入。",
      },
    ],
    tableRows: [
      { field: "Project Name", fieldZh: "项目名称", value: "RedBridge Website + CRM Portal", valueZh: "RedBridge 网站 + CRM 门户" },
      { field: "Period", fieldZh: "周期", value: "Feb 6 – Apr 17, 2026 (~10 weeks)", valueZh: "2026年2月6日 – 4月17日（约10周）" },
      { field: "Company", fieldZh: "公司", value: "RedBridge Consulting (Siddeley Group)", valueZh: "RedBridge Consulting（Siddeley Group）" },
      { field: "Role", fieldZh: "职能", value: "Software Developer — Sole engineer", valueZh: "软件开发工程师 — 独立工程师" },
      { field: "Commits", fieldZh: "提交数", value: "268 (all Vanessa)", valueZh: "268（全部为 Vanessa）" },
      { field: "Scale", fieldZh: "规模", value: "~100 files · ~41,500 lines of code · 28 HTML pages · 12 DB tables", valueZh: "约100个文件 · 约41,500行代码 · 28个HTML页面 · 12张数据库表" },
      { field: "Integrations", fieldZh: "集成", value: "Meta CAPI · Google Calendar · Cloudflare Workers · Gemini AI · Meta Pixel", valueZh: "Meta CAPI · Google Calendar · Cloudflare Workers · Gemini AI · Meta Pixel" },
      { field: "Live URL", fieldZh: "上线链接", value: "https://redbridge.pages.dev/", valueZh: "https://redbridge.pages.dev/" },
      { field: "Cost Impact", fieldZh: "成本影响", value: "Est. $50,000–$100,000 AUD agency cost avoided", valueZh: "估计节省机构费用 $50,000–$100,000 澳元" },
    ],
    highlights: [
      "全栈独立交付：前端设计、后端 API、数据库架构、DevOps、双语内容及 5 项集成",
      "28 个 HTML 页面，包含员工门户和面向客户的预约系统",
      "12 张 PostgreSQL 表，含 28 条 RLS 安全策略和 5 个自动化触发器",
      "服务端 Meta CAPI 绕过广告拦截器，确保精准转化归因",
      "Cloudflare Workers 后端，边缘响应时间低于毫秒级",
      "3 段视频证言压缩 72%（98MB → 28MB），提升加载性能",
      "CI/CD 流水线：通过 GitHub → Cloudflare Pages 自动触发 25 次生产部署",
    ],
    statsGrid: [
      { num: "~100", label: "总文件数" },
      { num: "~41,500", label: "代码行数" },
      { num: "28", label: "HTML 页面" },
      { num: "12", label: "数据库表" },
      { num: "28", label: "安全策略" },
      { num: "5", label: "数据库触发器" },
      { num: "5", label: "集成项目" },
      { num: "268", label: "提交次数" },
    ],
  },
};

export const p2 = {
  en: {
    tag: "Project 2 · Apr 13 – May 5, 2026",
    title: "RedBridge Website V2 — Next.js Migration",
    subtitle: "Role: Head of IT · Software Engineer & Product Manager · Team lead",
    accent: "#7c3aed",
    impact: [
      {
        label: "Cost",
        text: "Single EN/ZH codebase via next-intl replaces 28 separate HTML files — future content updates take significantly less time. Agency-equivalent migration cost: est. $20,000–$40,000 AUD avoided.",
      },
      {
        label: "Marketing",
        text: "Next.js SSR and structured SEO metadata improves Google search rankings organically, reducing long-term reliance on paid ads. Security headers and Core Web Vitals improvements protect brand trust.",
      },
      {
        label: "Revenue",
        text: "Improved site performance and UX reduces bounce rate on booking and employer enquiry pages, directly lifting conversion rates. Faster mobile experience captures the Chinese-speaking, mobile-first user base.",
      },
    ],
    tableRows: [
      { field: "Project Name", fieldZh: "项目名称", value: "RedBridge Website V2 — Next.js Migration", valueZh: "RedBridge 网站 V2 — Next.js 迁移" },
      { field: "Period", fieldZh: "周期", value: "Apr 13 – May 5, 2026 (~3 weeks)", valueZh: "2026年4月13日 – 5月5日（约3周）" },
      { field: "Company", fieldZh: "公司", value: "RedBridge Consulting (Siddeley Group)", valueZh: "RedBridge Consulting（Siddeley Group）" },
      { field: "Role", fieldZh: "职能", value: "Head of IT — Engineering + Team management", valueZh: "IT 总监 — 工程 + 团队管理" },
      { field: "Vanessa's commits", fieldZh: "Vanessa 提交", value: "25 of 218 total", valueZh: "218 次总提交中的 25 次" },
      { field: "Team", fieldZh: "团队", value: "Vanessa · Nicole · Eric (Yinjia) · Avivi (temp)", valueZh: "Vanessa · Nicole · Eric（Yinjia）· Avivi（临时）" },
      { field: "Stack", fieldZh: "技术栈", value: "Next.js 16 + TypeScript 5 + Tailwind CSS 4 + next-intl + shadcn/ui", valueZh: "Next.js 16 + TypeScript 5 + Tailwind CSS 4 + next-intl + shadcn/ui" },
      { field: "Deployment", fieldZh: "部署", value: "Cloudflare Pages via OpenNext", valueZh: "通过 OpenNext 部署至 Cloudflare Pages" },
      { field: "Cost Impact", fieldZh: "成本影响", value: "Est. $20,000–$40,000 AUD agency cost avoided", valueZh: "估计节省机构费用 $20,000–$40,000 澳元" },
    ],
    highlights: [
      "Managed 3 direct reports (Nicole, Eric, Avivi) across concurrent multi-project delivery",
      "Architected OpenNext adapter for Next.js SSR on Cloudflare Workers — non-trivial deployment challenge",
      "Implemented next-intl i18n system: one codebase serving both EN and ZH — replaces 28 separate HTML files",
      "Configured security headers, canonical URLs, and structured SEO metadata in next.config.ts",
      "Reviewed and merged all team PRs — zero broken builds shipped to production",
      "Resolved CORS and form submission issues affecting production routing",
      "Returned from planned absence April 13 and re-onboarded while managing live delivery",
    ],
    team: [
      { name: "Vanessa (vchs123)", role: "Head of IT", commits: 25, focus: "Deployment architecture, i18n system, SEO, CORS fixes, PR reviews, security, team management" },
      { name: "Nicole (nicole-nxn)", role: "Direct report", commits: 125, focus: "Frontend React components — FAQ, success cases, for-employers, about, booking UI, shadcn/ui integration" },
      { name: "Eric / Yinjia (yinjiaw2)", role: "Direct report", commits: 67, focus: "Content — pathway pages, employer network, hero sections, Chinese content, footer" },
      { name: "Avivi (Avivi30)", role: "GM's secretary (temp)", commits: 2, focus: "Homepage JSON content — assisted Apr 14 while Vanessa was re-onboarding post-absence" },
    ],
  },
  zh: {
    tag: "项目 2 · 2026年4月13日 – 5月5日",
    title: "RedBridge 网站 V2 — Next.js 迁移",
    subtitle: "职能：IT 总监 · 软件工程师兼产品经理 · 团队负责人",
    accent: "#7c3aed",
    impact: [
      {
        label: "成本",
        text: "通过 next-intl 实现单一中英双语代码库，替代 28 个独立 HTML 文件，大幅降低未来内容更新时间。节省机构等效迁移费用估计 $20,000–$40,000 澳元。",
      },
      {
        label: "营销",
        text: "Next.js SSR 和结构化 SEO 元数据有机提升 Google 搜索排名，减少对付费广告的长期依赖。安全头配置和 Core Web Vitals 改善保护品牌信誉。",
      },
      {
        label: "收入",
        text: "改善的网站性能和用户体验降低预约和雇主咨询页面的跳出率，直接提升转化率。更快的移动端体验更有效触达以移动端为主的华人用户群体。",
      },
    ],
    highlights: [
      "管理 3 名直属下属（Nicole、Eric、Avivi），并行推进多项目交付",
      "为 Cloudflare Workers 上的 Next.js SSR 设计 OpenNext 适配器架构",
      "实施 next-intl 国际化系统：单一代码库同时服务中英两种语言，替代 28 个独立 HTML 文件",
      "在 next.config.ts 中配置安全响应头、规范 URL 及结构化 SEO 元数据",
      "审查并合并全部团队 PR，零故障构建发布至生产环境",
      "解决影响生产路由的 CORS 及表单提交问题",
      "4 月 13 日计划外出后返岗，在重新适应的同时管理实时交付",
    ],
    team: [
      { name: "Vanessa (vchs123)", role: "IT 总监", commits: 25, focus: "部署架构、i18n 系统、SEO、CORS 修复、PR 审查、安全与团队管理" },
      { name: "Nicole (nicole-nxn)", role: "直属下属", commits: 125, focus: "前端 React 组件 — FAQ、成功案例、雇主页、关于页、预约 UI、shadcn/ui 集成" },
      { name: "Eric / Yinjia (yinjiaw2)", role: "直属下属", commits: 67, focus: "内容 — 通道页、雇主网络、主视觉区、中文内容、页脚" },
      { name: "Avivi (Avivi30)", role: "总经理秘书（临时）", commits: 2, focus: "主页 JSON 内容 — 4 月 14 日 Vanessa 重新上岗期间提供协助" },
    ],
    tableRows: [
      { field: "Project Name", fieldZh: "项目名称", value: "RedBridge Website V2 — Next.js Migration", valueZh: "RedBridge 网站 V2 — Next.js 迁移" },
      { field: "Period", fieldZh: "周期", value: "Apr 13 – May 5, 2026 (~3 weeks)", valueZh: "2026年4月13日 – 5月5日（约3周）" },
      { field: "Company", fieldZh: "公司", value: "RedBridge Consulting (Siddeley Group)", valueZh: "RedBridge Consulting（Siddeley Group）" },
      { field: "Role", fieldZh: "职能", value: "Head of IT — Engineering + Team management", valueZh: "IT 总监 — 工程 + 团队管理" },
      { field: "Vanessa's commits", fieldZh: "Vanessa 提交", value: "25 of 218 total", valueZh: "218 次总提交中的 25 次" },
      { field: "Team", fieldZh: "团队", value: "Vanessa · Nicole · Eric (Yinjia) · Avivi (temp)", valueZh: "Vanessa · Nicole · Eric（Yinjia）· Avivi（临时）" },
      { field: "Stack", fieldZh: "技术栈", value: "Next.js 16 + TypeScript 5 + Tailwind CSS 4 + next-intl + shadcn/ui", valueZh: "Next.js 16 + TypeScript 5 + Tailwind CSS 4 + next-intl + shadcn/ui" },
      { field: "Deployment", fieldZh: "部署", value: "Cloudflare Pages via OpenNext", valueZh: "通过 OpenNext 部署至 Cloudflare Pages" },
      { field: "Cost Impact", fieldZh: "成本影响", value: "Est. $20,000–$40,000 AUD agency cost avoided", valueZh: "估计节省机构费用 $20,000–$40,000 澳元" },
    ],
  },
};

export const p3 = {
  en: {
    tag: "Project 3 · Apr 29 – May 4, 2026",
    title: "Siddeley Talent Link",
    titleZh: "维拓联才",
    subtitle: "Role: Head of IT — Software Engineer & Product Manager (sole developer)",
    accent: "#15803d",
    impact: [
      {
        label: "Cost",
        text: "Entire platform built solo in under a week — agency equivalent est. $15,000–$30,000 AUD avoided. Real-time engagement counters powered by Cloudflare KV add zero ongoing infrastructure cost at scale.",
      },
      {
        label: "Marketing",
        text: "Bilingual EN/ZH job listings establish STL's digital presence in the skilled migration talent market. Live view and apply counters create social proof that increases candidate engagement. The platform feeds RedBridge's employer pathway and Insight Idea's visa lodgement pipeline.",
      },
      {
        label: "Revenue",
        text: "STL's placement revenue depends on candidate volume and employer engagement — this platform is the primary acquisition channel for both. Successful placements generate STL fees and refer clients into RedBridge and Insight Idea, creating compounding revenue across three subsidiaries.",
      },
    ],
    tableRows: [
      { field: "Project Name", fieldZh: "项目名称", value: "Siddeley Talent Link (siddeleyTL)", valueZh: "维拓联才（siddeleyTL）" },
      { field: "Period", fieldZh: "周期", value: "Apr 29 – May 4, 2026 (under 1 week)", valueZh: "2026年4月29日 – 5月4日（不足1周）" },
      { field: "Company", fieldZh: "公司", value: "Siddeley Talent Link (Siddeley Group)", valueZh: "维拓联才（Siddeley Group）" },
      { field: "Role", fieldZh: "职能", value: "Head of IT — Sole developer", valueZh: "IT 总监 — 独立开发者" },
      { field: "Commits", fieldZh: "提交数", value: "14 (all Vanessa)", valueZh: "14（全部为 Vanessa）" },
      { field: "Stack", fieldZh: "技术栈", value: "Next.js 15 · React · Tailwind CSS · Cloudflare Pages + KV + Pages Functions", valueZh: "Next.js 15 · React · Tailwind CSS · Cloudflare Pages + KV + Pages Functions" },
      { field: "Key feature", fieldZh: "核心功能", value: "Real-time job view/apply counters via Cloudflare KV", valueZh: "通过 Cloudflare KV 实现实时浏览/申请计数" },
      { field: "Blind vote", fieldZh: "盲测结果", value: "15 participants · 7 responded · 7/7 chose Vanessa's version", valueZh: "15 人参与 · 7 人作答 · 7/7 选择 Vanessa 的版本" },
      { field: "Cost Impact", fieldZh: "成本影响", value: "Est. $15,000–$30,000 AUD agency cost avoided", valueZh: "估计节省机构费用 $15,000–$30,000 澳元" },
    ],
    highlights: [
      "Delivered a production-ready bilingual job listings platform in under 5 days, solo",
      "Identified and executed a same-day framework migration (Vite SPA → Next.js 15) without losing progress",
      "Built real-time job view/apply counter using Cloudflare KV + Pages Functions (zero database cost)",
      "EN/ZH bilingual job data with VETASSESS alignment and salary ranges",
      "Privacy Policy page added for legal compliance (168 lines)",
      "Google Apps Script contact form integration deployed and maintained",
      "Blind vote: 15 people selected from STL's network, 7 responded, all 7 chose Vanessa's design",
    ],
    voteCallout: {
      title: "Blind Vote Result",
      body: "To validate the website design before launch, a blind comparison was conducted across STL's network. 15 people were selected; 7 responded. All 7 chose Vanessa's version — without knowing who built it.",
    },
  },
  zh: {
    tag: "项目 3 · 2026年4月29日 – 5月4日",
    title: "维拓联才",
    titleZh: "维拓联才",
    subtitle: "职能：IT 总监 — 软件工程师兼产品经理（独立开发者）",
    accent: "#15803d",
    impact: [
      {
        label: "成本",
        text: "独立在一周内完成整套平台开发，节省机构等效费用估计 $15,000–$30,000 澳元。基于 Cloudflare KV 的实时参与计数器在规模化下零基础设施成本。",
      },
      {
        label: "营销",
        text: "中英双语职位列表确立维拓联才在技术移民人才市场的数字存在。实时浏览和申请计数创造社会认同，提升求职者参与度。平台直接为 RedBridge 雇主通道和 Insight Idea 签证申请流水线提供客源。",
      },
      {
        label: "收入",
        text: "维拓联才的安置收入依赖候选人数量和雇主参与度，该平台是二者的主要获客渠道。成功安置产生维拓联才服务费，并自然将客户引入 RedBridge 咨询和 Insight Idea 签证申请，形成跨三家子公司的复利收入。",
      },
    ],
    highlights: [
      "独立在 5 天内交付生产就绪的双语招聘平台",
      "发现并执行当天完成的框架迁移（Vite SPA → Next.js 15），未丢失任何进度",
      "使用 Cloudflare KV + Pages Functions 构建实时职位浏览/申请计数器（零数据库成本）",
      "含 VETASSESS 对齐和薪资范围的中英双语职位数据",
      "为满足法律合规要求新增隐私政策页面（168 行）",
      "部署并维护 Google Apps Script 联系表单集成",
      "盲测：从维拓联才网络中选出 15 人，7 人作答，全部 7 人选择 Vanessa 的设计",
    ],
    tableRows: [
      { field: "Project Name", fieldZh: "项目名称", value: "Siddeley Talent Link (siddeleyTL)", valueZh: "维拓联才（siddeleyTL）" },
      { field: "Period", fieldZh: "周期", value: "Apr 29 – May 4, 2026 (under 1 week)", valueZh: "2026年4月29日 – 5月4日（不足1周）" },
      { field: "Company", fieldZh: "公司", value: "Siddeley Talent Link (Siddeley Group)", valueZh: "维拓联才（Siddeley Group）" },
      { field: "Role", fieldZh: "职能", value: "Head of IT — Sole developer", valueZh: "IT 总监 — 独立开发者" },
      { field: "Commits", fieldZh: "提交数", value: "14 (all Vanessa)", valueZh: "14（全部为 Vanessa）" },
      { field: "Stack", fieldZh: "技术栈", value: "Next.js 15 · React · Tailwind CSS · Cloudflare Pages + KV + Pages Functions", valueZh: "Next.js 15 · React · Tailwind CSS · Cloudflare Pages + KV + Pages Functions" },
      { field: "Key feature", fieldZh: "核心功能", value: "Real-time job view/apply counters via Cloudflare KV", valueZh: "通过 Cloudflare KV 实现实时浏览/申请计数" },
      { field: "Blind vote", fieldZh: "盲测结果", value: "15 participants · 7 responded · 7/7 chose Vanessa's version", valueZh: "15 人参与 · 7 人作答 · 7/7 选择 Vanessa 的版本" },
      { field: "Cost Impact", fieldZh: "成本影响", value: "Est. $15,000–$30,000 AUD agency cost avoided", valueZh: "估计节省机构费用 $15,000–$30,000 澳元" },
    ],
    voteCallout: {
      title: "盲测结果",
      body: "为在上线前验证网站设计，在维拓联才的网络中开展了盲测对比。选出 15 人，7 人参与作答。全部 7 人选择了 Vanessa 的版本，且事先不知道是谁制作的。",
    },
  },
};

export const p4 = {
  en: {
    tag: "Project 4 · Apr – May 2026",
    title: "GoodMood Studio",
    subtitle: "Role: Head of IT — Technical management & direction (no direct commits)",
    accent: "#b45309",
    impact: [
      {
        label: "Cost",
        text: "Technical direction and review by Vanessa prevented costly rework and misaligned implementation. Her guidance, drawn from first-hand concurrent experience on V5 and STL, accelerated delivery and avoided the need for external technical consultants.",
      },
      {
        label: "Marketing",
        text: "GoodMood Studio is the creative and marketing arm of Siddeley Group — its website is its primary business development tool. A well-structured, correctly deployed site is directly tied to GoodMood's ability to win creative clients.",
      },
      {
        label: "Revenue",
        text: "GoodMood's client conversion depends on its digital presence. A functional, professional website supports new business enquiries and positions the studio credibly when pitching to external clients.",
      },
    ],
    tableRows: [
      { field: "Project Name", fieldZh: "项目名称", value: "GoodMood Studio Website", valueZh: "GoodMood Studio 网站" },
      { field: "Period", fieldZh: "周期", value: "Apr–May 2026 (concurrent with P2 & P3)", valueZh: "2026年4月–5月（与项目2、3并行）" },
      { field: "Company", fieldZh: "公司", value: "GoodMood Studio (Siddeley Group)", valueZh: "GoodMood Studio（Siddeley Group）" },
      { field: "Role", fieldZh: "职能", value: "Head of IT — Management & direction", valueZh: "IT 总监 — 管理与方向指导" },
      { field: "Vanessa's commits", fieldZh: "Vanessa 提交", value: "None — management contribution", valueZh: "无 — 管理职能贡献" },
      { field: "Direct reports", fieldZh: "直属下属", value: "Nicole · Eric (Yinjia) · Chloe", valueZh: "Nicole · Eric（Yinjia）· Chloe" },
      { field: "Status", fieldZh: "状态", value: "On hold — management decision to rebrand", valueZh: "暂停 — 管理层决定品牌重塑" },
    ],
    highlights: [
      "Managed implementation while simultaneously delivering Projects 2 and 3 — demonstrating breadth of Head of IT role",
      "Applied first-hand Cloudflare deployment experience from V5 and STL directly to GoodMood's technical direction",
      "Oversaw team during two planned absences (Mar 30–Apr 2 and Apr 7–10); resumed leadership on Apr 13",
      "Directed structural overhaul of the GoodMood Studio website alongside Nicole, Eric, and Chloe",
      "GoodMood domain access requested; in the absence of a response, created a new domain to maintain delivery momentum",
      "Project placed on hold following a management decision to rebrand — Vanessa's technical groundwork carries forward once the new brand is confirmed",
    ],
    contextNote: "Vanessa holds the position of Head of IT at Siddeley Group, with Nicole, Eric (Yinjia), and Chloe as direct reports. As Head of IT, Vanessa did not commit directly to the GoodMood repository; her contribution was management, technical direction, and oversight of her team's implementation work.",
  },
  zh: {
    tag: "项目 4 · 2026年4月–5月",
    title: "GoodMood Studio",
    subtitle: "职能：IT 总监 — 技术管理与方向指导（无直接提交）",
    accent: "#b45309",
    impact: [
      {
        label: "成本",
        text: "Vanessa 的技术指导与审查避免了代价高昂的返工和实施偏差。她基于在 V5 和维拓联才项目中积累的第一手并行经验提供指导，加速了交付并避免了引入外部技术顾问的需要。",
      },
      {
        label: "营销",
        text: "GoodMood Studio 是 Siddeley Group 的创意营销部门，其网站是主要的业务拓展工具。结构合理、部署正确的网站直接关系到 GoodMood 赢取创意客户的能力。",
      },
      {
        label: "收入",
        text: "GoodMood 的客户转化依赖其数字形象。专业功能完善的网站支持新业务询盘，并在向外部客户进行商业提案时建立可信的形象定位。",
      },
    ],
    highlights: [
      "在并行交付项目 2 和 3 的同时管理 GoodMood 实施，充分体现 IT 总监职责的广度",
      "将 V5 和维拓联才中积累的第一手 Cloudflare 部署经验直接应用于 GoodMood 的技术方向指导",
      "在两次计划外出期间（3月30日–4月2日和4月7日–10日）监督团队；4月13日恢复领导",
      "与 Nicole、Eric 和 Chloe 共同主导 GoodMood Studio 网站的结构性重构",
      "已申请 GoodMood 域名访问权限；在未收到回复的情况下，创建新域名以保持交付动力",
      "项目因管理层品牌重塑决定而暂停 — Vanessa 的技术基础工作将在新品牌确认后延续",
    ],
    contextNote: "Vanessa 担任 Siddeley Group 的 IT 总监，Nicole、Eric（Yinjia）和 Chloe 为直属下属。作为 IT 总监，Vanessa 未直接向 GoodMood 代码库提交代码，其贡献在于管理、技术方向指导和对团队实施工作的监督。",
    tableRows: [
      { field: "Project Name", fieldZh: "项目名称", value: "GoodMood Studio Website", valueZh: "GoodMood Studio 网站" },
      { field: "Period", fieldZh: "周期", value: "Apr–May 2026 (concurrent with P2 & P3)", valueZh: "2026年4月–5月（与项目2、3并行）" },
      { field: "Company", fieldZh: "公司", value: "GoodMood Studio (Siddeley Group)", valueZh: "GoodMood Studio（Siddeley Group）" },
      { field: "Role", fieldZh: "职能", value: "Head of IT — Management & direction", valueZh: "IT 总监 — 管理与方向指导" },
      { field: "Vanessa's commits", fieldZh: "Vanessa 提交", value: "None — management contribution", valueZh: "无 — 管理职能贡献" },
      { field: "Direct reports", fieldZh: "直属下属", value: "Nicole · Eric (Yinjia) · Chloe", valueZh: "Nicole · Eric（Yinjia）· Chloe" },
      { field: "Status", fieldZh: "状态", value: "On hold — management decision to rebrand", valueZh: "暂停 — 管理层决定品牌重塑" },
    ],
  },
};

export const p5 = {
  en: {
    tag: "Project 5 · May 8, 2026 – Present",
    title: "Google Ads — Employer Sponsorship",
    subtitle: "Role: Head of IT — Campaign setup, strategy & management (sole)",
    accent: "#1a73e8",
    impact: [
      {
        label: "Cost",
        text: "Campaign set up and managed entirely in-house. Agency management fees for Google Ads typically run 10–15% of spend or $1,500–$3,000/month — avoided entirely by Vanessa managing it directly.",
      },
      {
        label: "Marketing",
        text: "High-intent keyword targeting across employer sponsorship, immigration consulting, and migration agent terms drives qualified employer enquiries directly to RedBridge. An 8.5% CTR — more than double the 3–5% industry benchmark — confirms strong ad relevance and keyword alignment.",
      },
      {
        label: "Revenue",
        text: "Employer sponsorship is RedBridge's highest-value service category. Each converted employer client represents significant consulting revenue and creates a pipeline of candidate visa lodgement work through Insight Idea — compounding revenue across two subsidiaries.",
      },
    ],
    tableRows: [
      { field: "Campaign Name", fieldZh: "广告系列名称", value: "Leads-Search-RB-08/05/26_EmployerSponsorshipEN", valueZh: "Leads-Search-RB-08/05/26_EmployerSponsorshipEN" },
      { field: "Period", fieldZh: "周期", value: "May 8, 2026 – Present (active)", valueZh: "2026年5月8日 – 至今（运行中）" },
      { field: "Company", fieldZh: "公司", value: "RedBridge Consulting (Siddeley Group)", valueZh: "RedBridge Consulting（Siddeley Group）" },
      { field: "Role", fieldZh: "职能", value: "Head of IT — Sole campaign manager", valueZh: "IT 总监 — 独立广告管理者" },
      { field: "Campaign Type", fieldZh: "广告类型", value: "Google Search — Leads objective", valueZh: "Google 搜索广告 — 潜在客户目标" },
      { field: "Target Audience", fieldZh: "目标受众", value: "English-speaking employers seeking sponsorship and migration services", valueZh: "寻求担保及移民服务的英语雇主" },
      { field: "Daily Budget", fieldZh: "每日预算", value: "A$211.91", valueZh: "A$211.91" },
      { field: "Total Spend (to date)", fieldZh: "累计花费", value: "A$861", valueZh: "A$861" },
      { field: "Impressions", fieldZh: "展示次数", value: "2,100", valueZh: "2,100" },
      { field: "Clicks", fieldZh: "点击次数", value: "178", valueZh: "178" },
      { field: "Avg. CTR", fieldZh: "平均点击率", value: "8.5% (industry avg: 3–5%)", valueZh: "8.5%（行业均值：3–5%）" },
      { field: "Avg. CPC", fieldZh: "平均每次点击费用", value: "A$4.84", valueZh: "A$4.84" },
      { field: "Keywords", fieldZh: "关键词", value: "10+ keyword groups (visa sponsorship jobs, job placement services, immigration consulting, migration agent, visa sponsorship, and more)", valueZh: "10+ 关键词组（签证担保工作、招聘服务、移民咨询、移民顾问、签证担保等）" },
    ],
    highlights: [
      "Sole ownership of campaign setup, keyword research, ad copywriting, and ongoing management",
      "8.5% average CTR — more than double the 3–5% benchmark for legal and migration consulting",
      "Top keyword: \"visa sponsorship\" at 15.48% CTR; \"job placement services\" at 10.09% CTR with highest click volume (32 clicks)",
      "\"visa sponsorship jobs\" generated 31 clicks at 14.90% CTR for A$138.92 — strong ROI on a high-intent term",
      "10+ keyword groups covering the full employer sponsorship search intent landscape",
      "A$4.84 avg CPC — competitive for the migration and legal services category in Melbourne",
      "Campaign launched May 8 and active — performance data reflects the first 3 days of a live, ongoing campaign",
    ],
    keywordsTable: [
      { keyword: "visa sponsorship jobs", cost: "A$138.92", clicks: 31, ctr: "14.90%" },
      { keyword: "job placement services", cost: "A$96.96", clicks: 32, ctr: "10.09%" },
      { keyword: "immigration consulting", cost: "A$90.54", clicks: 9, ctr: "8.18%" },
      { keyword: "migration agent", cost: "A$85.88", clicks: 9, ctr: "5.00%" },
      { keyword: "visa sponsorship", cost: "A$69.80", clicks: 13, ctr: "15.48%" },
    ],
    statsGrid: [
      { num: "2,100", label: "Impressions" },
      { num: "178", label: "Clicks" },
      { num: "8.5%", label: "Avg CTR" },
      { num: "A$4.84", label: "Avg CPC" },
      { num: "A$861", label: "Total spend" },
      { num: "10+", label: "Keyword groups" },
      { num: "A$211.91", label: "Daily budget" },
      { num: "Active", label: "Status" },
    ],
  },
  zh: {
    tag: "项目 5 · 2026年5月8日 – 至今",
    title: "Google Ads — 雇主担保推广",
    subtitle: "职能：IT 总监 — 广告系列创建、策略制定及管理（独立负责）",
    accent: "#1a73e8",
    impact: [
      {
        label: "成本",
        text: "广告系列完全由内部独立管理。Google Ads 的机构管理费通常为投放金额的 10–15% 或每月 $1,500–$3,000，由 Vanessa 亲自管理，完全避免了此项支出。",
      },
      {
        label: "营销",
        text: "针对雇主担保、移民咨询和移民顾问等高意向关键词进行精准定向，将合格的雇主询盘直接引导至 RedBridge。8.5% 的点击率超过行业基准（3–5%）一倍以上，印证了广告的高度相关性和关键词匹配质量。",
      },
      {
        label: "收入",
        text: "雇主担保是 RedBridge 最高价值的服务类别。每位转化的雇主客户代表可观的咨询收入，同时通过 Insight Idea 为签证申请创造客源，形成跨两家子公司的复利收入。",
      },
    ],
    tableRows: [
      { field: "Campaign Name", fieldZh: "广告系列名称", value: "Leads-Search-RB-08/05/26_EmployerSponsorshipEN", valueZh: "Leads-Search-RB-08/05/26_EmployerSponsorshipEN" },
      { field: "Period", fieldZh: "周期", value: "May 8, 2026 – Present (active)", valueZh: "2026年5月8日 – 至今（运行中）" },
      { field: "Company", fieldZh: "公司", value: "RedBridge Consulting (Siddeley Group)", valueZh: "RedBridge Consulting（Siddeley Group）" },
      { field: "Role", fieldZh: "职能", value: "Head of IT — Sole campaign manager", valueZh: "IT 总监 — 独立广告管理者" },
      { field: "Campaign Type", fieldZh: "广告类型", value: "Google Search — Leads objective", valueZh: "Google 搜索广告 — 潜在客户目标" },
      { field: "Target Audience", fieldZh: "目标受众", value: "English-speaking employers seeking sponsorship and migration services", valueZh: "寻求担保及移民服务的英语雇主" },
      { field: "Daily Budget", fieldZh: "每日预算", value: "A$211.91", valueZh: "A$211.91" },
      { field: "Total Spend (to date)", fieldZh: "累计花费", value: "A$861", valueZh: "A$861" },
      { field: "Impressions", fieldZh: "展示次数", value: "2,100", valueZh: "2,100" },
      { field: "Clicks", fieldZh: "点击次数", value: "178", valueZh: "178" },
      { field: "Avg. CTR", fieldZh: "平均点击率", value: "8.5% (industry avg: 3–5%)", valueZh: "8.5%（行业均值：3–5%）" },
      { field: "Avg. CPC", fieldZh: "平均每次点击费用", value: "A$4.84", valueZh: "A$4.84" },
      { field: "Keywords", fieldZh: "关键词", value: "10+ keyword groups", valueZh: "10+ 关键词组" },
    ],
    highlights: [
      "独立负责广告系列创建、关键词研究、广告文案撰写及持续管理",
      "平均点击率 8.5%，超过法律及移民咨询行业基准（3–5%）一倍以上",
      "最佳关键词：\"visa sponsorship\" 点击率 15.48%；\"job placement services\" 点击率 10.09%，点击量最高（32 次）",
      "\"visa sponsorship jobs\" 以 $138.92 获得 31 次点击，点击率 14.90%，高意向关键词投资回报显著",
      "覆盖雇主担保全意向层级的 10+ 关键词组",
      "平均每次点击费用 $4.84，在墨尔本移民及法律服务类目中具竞争力",
      "广告系列于 5 月 8 日上线并持续运行，当前数据反映上线 3 天内的实时表现",
    ],
    keywordsTable: [
      { keyword: "visa sponsorship jobs", cost: "A$138.92", clicks: 31, ctr: "14.90%" },
      { keyword: "job placement services", cost: "A$96.96", clicks: 32, ctr: "10.09%" },
      { keyword: "immigration consulting", cost: "A$90.54", clicks: 9, ctr: "8.18%" },
      { keyword: "migration agent", cost: "A$85.88", clicks: 9, ctr: "5.00%" },
      { keyword: "visa sponsorship", cost: "A$69.80", clicks: 13, ctr: "15.48%" },
    ],
    statsGrid: [
      { num: "2,100", label: "展示次数" },
      { num: "178", label: "点击次数" },
      { num: "8.5%", label: "平均点击率" },
      { num: "A$4.84", label: "平均每次点击费用" },
      { num: "A$861", label: "累计花费" },
      { num: "10+", label: "关键词组" },
      { num: "A$211.91", label: "每日预算" },
      { num: "运行中", label: "状态" },
    ],
  },
};

export const p6 = {
  en: {
    tag: "Project 6 · May 8–13, 2026",
    title: "Siddeley Group Website",
    subtitle: "Role: Head of IT — Sole front-end developer & technical lead · 2 phases across 6 days",
    accent: "#1e3a8a",
    impact: [
      {
        label: "Cost",
        text: "Hosting on Cloudflare Pages free tier — $0/month. No third-party translation services used; ~8,000 words of ZH content authored directly, avoiding est. $800–$1,600 in professional translation costs. All tooling open-source.",
      },
      {
        label: "Marketing",
        text: "The primary public-facing presence for The Siddeley Group and all four brands. The Chinese-language version expands reach to Melbourne's Chinese-Australian professional community — a primary audience for RedBridge, STL, and GoodMood. Mobile performance fixes reduce bounce rate across all inbound channels.",
      },
      {
        label: "Revenue",
        text: "The bilingual site materially increases the addressable market for all four brands. Bilingual insight articles targeting Chinese-speaking job seekers, visa applicants, and business owners are high-intent content that drives enquiries for fee-generating services across RedBridge, STL, and Insight Idea.",
      },
    ],
    tableRows: [
      { field: "Project Name", fieldZh: "项目名称", value: "Siddeley Group Public Website — Phase 1 & 2", valueZh: "Siddeley Group 公共网站 — 第一阶段 & 第二阶段" },
      { field: "Period", fieldZh: "周期", value: "May 8–13, 2026 (6 days, 2 phases)", valueZh: "2026年5月8日–13日（6天，2个阶段）" },
      { field: "Company", fieldZh: "公司", value: "The Siddeley Group (Melbourne house of companies)", valueZh: "Siddeley Group（墨尔本企业集团）" },
      { field: "Role", fieldZh: "职能", value: "Head of IT — Sole front-end developer & technical lead", valueZh: "IT 总监 — 独立前端开发者兼技术负责人" },
      { field: "Phase 1 scope", fieldZh: "第一阶段范围", value: "Layout, responsiveness, deployment pipeline correctness", valueZh: "布局、响应式适配及部署流水线修正" },
      { field: "Phase 2 scope", fieldZh: "第二阶段范围", value: "Full EN/ZH bilingual i18n, mobile org chart redesign, performance optimisation", valueZh: "完整中英双语国际化、移动端组织架构图重设计、性能优化" },
      { field: "Pages bilingual", fieldZh: "双语页面数", value: "8 pages + 8 insight articles", valueZh: "8 个页面 + 8 篇洞见文章" },
      { field: "ZH content", fieldZh: "中文内容", value: "~8,000 words authored directly (no translation service)", valueZh: "约 8,000 字直接撰写（无翻译服务）" },
      { field: "Translation cost avoided", fieldZh: "节省翻译费用", value: "Est. $800–$1,600 AUD at market rates", valueZh: "按市场价估计节省 $800–$1,600 澳元" },
      { field: "Hosting cost", fieldZh: "托管费用", value: "A$0/month — Cloudflare Pages free tier", valueZh: "$0/月 — Cloudflare Pages 免费层" },
    ],
    phases: [
      {
        number: "Phase 1",
        period: "May 8–11, 2026",
        title: "Foundation, Responsiveness & Deployment",
        outcomes: [
          "Identified and resolved a deployment misconfiguration — deploys were targeting `siddeley-group` instead of the correct `siddeleygroup-v` project; locked the target in both `wrangler.toml` and `package.json`",
          "Fixed the hero section not filling device screens — resolved a CSS constraint issue (`min-h` vs `h`) leaving large whitespace gaps on mobile",
          "Refactored the hero illustration panel from fragile absolute-positioned overlay to a proper flex column structure — making future content changes safe and predictable",
          "Fixed About section column alignment so headings and body text share a consistent top edge — directly affecting design quality perception for prospective clients",
        ],
      },
      {
        number: "Phase 2",
        period: "May 12–13, 2026",
        title: "EN/ZH i18n, Mobile Org Chart & Performance",
        outcomes: [
          "Full EN/ZH bilingual website across all 8 pages, 8 insight articles, and all shared components (Nav, Footer, Ticker, ESG pillars, org chart labels) — single static site, no backend required",
          "Built a non-intrusive language switcher fixed to the right edge, persisting preference via localStorage — visible on all screen sizes without obstructing content",
          "Authored ~8,000 words of Chinese-language content including 8 long-form insight articles (WeChat marketing, visa pathways, LinkedIn for Chinese professionals)",
          "Resolved a critical image blocker — 17–34 MB staff PNGs exceeded Cloudflare's 25 MB per-file limit; compressed all 20 photos to 60–120 KB JPEGs using `sips`",
          "Rebuilt org chart for mobile: desktop 5-column grid was unreadable on mobile (forced horizontal scroll, 190px-wide columns); replaced with a tap-to-expand accordion revealing teams, people, and detail cards",
          "Resolved persistent mobile touch lag across the entire site — three root causes fixed: disabled Lenis smooth scroll on touch devices; removed scale from `RevealChildren` animations (non-compositable); rewrote `CountUp` from `setState` per frame to direct DOM mutation, then skipped animation on touch entirely",
          "Removed custom cursor component and `cursor: none !important` CSS — eliminated 6 global mouse event listeners and 2 continuous Framer Motion spring animations",
        ],
      },
    ],
    highlights: [
      "Sole ownership across both phases: deployment, layout engineering, i18n architecture, mobile UX redesign, performance profiling, and CI/CD",
      "Full bilingual EN/ZH site across 8 pages and 8 articles — single static build, client-side switching, localStorage persistence",
      "~8,000 words of ZH content authored directly — est. $800–$1,600 in translation costs avoided",
      "Identified and fixed three independent sources of mobile touch lag (smooth scroll, stacking contexts, CountUp re-renders) in a single session",
      "Compressed 20 staff photos from 17–34 MB to 60–120 KB, unblocking deployment entirely",
      "Deployment pipeline hardened — wrong-project misconfiguration caught and locked before it caused a production incident",
      "Org chart rebuilt from a desktop-only 5-column grid to a fully mobile-usable tap-to-expand accordion",
    ],
    statsGrid: [
      { num: "2", label: "Phases" },
      { num: "6", label: "Days" },
      { num: "8", label: "Pages bilingual" },
      { num: "8", label: "Insight articles bilingual" },
      { num: "~8,000", label: "Words of ZH content" },
      { num: "20", label: "Photos compressed" },
      { num: "3", label: "Mobile lag root causes fixed" },
      { num: "A$0", label: "Hosting cost/month" },
    ],
  },
  zh: {
    tag: "项目 6 · 2026年5月8日–13日",
    title: "Siddeley Group 网站",
    subtitle: "职能：IT 总监 — 独立前端开发者兼技术负责人 · 6天两阶段",
    accent: "#1e3a8a",
    impact: [
      {
        label: "成本",
        text: "网站托管于 Cloudflare Pages 免费层，每月费用为零。全部约 8,000 字中文内容由 Vanessa 直接撰写，无需专业翻译服务，节省估计 $800–$1,600 澳元的翻译费用。所有工具均为开源，无授权成本。",
      },
      {
        label: "营销",
        text: "该网站是 Siddeley Group 及旗下四家品牌的主要公共形象窗口。中文版本将覆盖范围扩展至墨尔本华人专业人士群体，这是 RedBridge、维拓联才和 GoodMood 的核心目标受众。移动端性能优化降低各流量渠道的跳出率。",
      },
      {
        label: "收入",
        text: "双语网站从实质上扩大了四家品牌的可触达市场。面向华人求职者、签证申请人和企业主的双语洞见文章是高意向内容，可为 RedBridge、维拓联才和 Insight Idea 的收费服务带动询盘量。",
      },
    ],
    tableRows: [
      { field: "Project Name", fieldZh: "项目名称", value: "Siddeley Group Public Website — Phase 1 & 2", valueZh: "Siddeley Group 公共网站 — 第一阶段 & 第二阶段" },
      { field: "Period", fieldZh: "周期", value: "May 8–13, 2026 (6 days, 2 phases)", valueZh: "2026年5月8日–13日（6天，2个阶段）" },
      { field: "Company", fieldZh: "公司", value: "The Siddeley Group (Melbourne house of companies)", valueZh: "Siddeley Group（墨尔本企业集团）" },
      { field: "Role", fieldZh: "职能", value: "Head of IT — Sole front-end developer & technical lead", valueZh: "IT 总监 — 独立前端开发者兼技术负责人" },
      { field: "Phase 1 scope", fieldZh: "第一阶段范围", value: "Layout, responsiveness, deployment pipeline correctness", valueZh: "布局、响应式适配及部署流水线修正" },
      { field: "Phase 2 scope", fieldZh: "第二阶段范围", value: "Full EN/ZH bilingual i18n, mobile org chart redesign, performance optimisation", valueZh: "完整中英双语国际化、移动端组织架构图重设计、性能优化" },
      { field: "Pages bilingual", fieldZh: "双语页面数", value: "8 pages + 8 insight articles", valueZh: "8 个页面 + 8 篇洞见文章" },
      { field: "ZH content", fieldZh: "中文内容", value: "~8,000 words authored directly (no translation service)", valueZh: "约 8,000 字直接撰写（无翻译服务）" },
      { field: "Translation cost avoided", fieldZh: "节省翻译费用", value: "Est. $800–$1,600 AUD at market rates", valueZh: "按市场价估计节省 $800–$1,600 澳元" },
      { field: "Hosting cost", fieldZh: "托管费用", value: "A$0/month — Cloudflare Pages free tier", valueZh: "$0/月 — Cloudflare Pages 免费层" },
    ],
    phases: [
      {
        number: "第一阶段",
        period: "2026年5月8日–11日",
        title: "基础架构、响应式布局与部署流水线",
        outcomes: [
          "发现并修正部署配置错误 — 部署目标误指向 `siddeley-group` 而非正确的 `siddeleygroup-v` 项目；在 `wrangler.toml` 和 `package.json` 中锁定目标配置",
          "修复主视觉区未能充满设备屏幕的问题 — 解决 CSS 约束错误（`min-h` vs `h`），消除移动端大片空白区域",
          "将主视觉区插图面板从脆弱的绝对定位覆盖层重构为规范的 flex 列结构，使未来内容更改安全可预测",
          "修复「关于」板块列对齐问题，确保各列标题和正文共享一致的顶部对齐线，直接影响访客对设计品质的感知",
        ],
      },
      {
        number: "第二阶段",
        period: "2026年5月12日–13日",
        title: "中英双语国际化、移动端组织架构图与性能优化",
        outcomes: [
          "在全部 8 个页面、8 篇洞见文章及所有共享组件（导航、页脚、滚动条、ESG 支柱、组织架构标签）中实现完整中英双语支持，单一静态站点，无需后端",
          "构建固定于屏幕右侧边缘的非侵入式语言切换器，通过 localStorage 持久化用户偏好，在所有屏幕尺寸下均可见且不遮挡内容",
          "直接撰写约 8,000 字中文内容，包含 8 篇长篇洞见文章（微信营销、签证通道、华人 LinkedIn 使用指南等）",
          "解决关键图片阻塞问题 — 17–34 MB 的员工 PNG 图片超出 Cloudflare 25 MB 单文件限制；使用 `sips` 将全部 20 张图片压缩至 60–120 KB JPEG，完全解除部署阻塞",
          "重建移动端组织架构图：桌面端 5 列网格在移动端完全不可读（强制横向滚动，列宽仅 190px）；重构为点击展开的手风琴式交互，点击机构节点展开其团队和人员，点击姓名弹出详细卡片",
          "解决全站持续存在的移动端触控延迟 — 修复三个根本原因：在触控设备上禁用 Lenis 平滑滚动（移动端原生滚动已足够流畅）；从 `RevealChildren` 动画中移除 scale（非 GPU 合成属性）；将 `CountUp` 从每帧调用 `setState` 改写为直接操作 DOM `textContent`，并在触控设备上完全跳过动画",
          "移除自定义光标组件及其 `cursor: none !important` CSS 规则 — 消除 6 个全局鼠标事件监听器和 2 个持续运行的 Framer Motion 弹簧动画",
        ],
      },
    ],
    highlights: [
      "两阶段全程独立负责：部署配置、布局工程、国际化架构、移动端 UX 重设计、性能分析及 CI/CD",
      "8 个页面 + 8 篇文章完整双语化 — 单一静态构建，客户端切换，localStorage 持久化",
      "约 8,000 字中文内容直接撰写，节省估计 $800–$1,600 澳元翻译费用",
      "在单次工作周期内发现并修复三个独立的移动端触控延迟来源（平滑滚动、层叠上下文、CountUp 重渲染）",
      "将 20 张员工照片从 17–34 MB 压缩至 60–120 KB，完全解除部署阻塞",
      "捕获并锁定部署管道错误配置，防止生产事故发生",
      "组织架构图从仅适用于桌面端的 5 列网格重建为完整可用的移动端手风琴交互",
    ],
    statsGrid: [
      { num: "2", label: "阶段数" },
      { num: "6", label: "天数" },
      { num: "8", label: "双语页面" },
      { num: "8", label: "双语洞见文章" },
      { num: "~8,000", label: "中文字数" },
      { num: "20", label: "照片压缩数" },
      { num: "3", label: "移动端延迟根因修复" },
      { num: "A$0", label: "每月托管费用" },
    ],
  },
};
