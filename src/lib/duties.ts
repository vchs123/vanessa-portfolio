export type DutyBullet = {
  accomplished: string;
  by: string;
  resulting: string;
};

export type DutyTab = {
  id: string;
  label: string;
  subtitle: string;
  bullets: DutyBullet[];
};

export type DutiesData = {
  pageTitle: string;
  pageSubtitle: string;
  note: string;
  tabs: DutyTab[];
};

export const duties: { en: DutiesData; zh: DutiesData } = {
  en: {
    pageTitle: "Duties & Achievements",
    pageSubtitle:
      "Head of IT · Siddeley Group — roles performed across the Feb–Jul 2026 review period, written in Google's XYZ formula.",
    note: "Official title: Head of IT. The following tabs reflect the functional roles performed within that position.",
    tabs: [
      {
        id: "fullstack",
        label: "Full-Stack Engineer",
        subtitle:
          "Backend, database, API, integrations — sole engineer across P1, P3, and the Cloudflare Workers runtime.",
        bullets: [
          {
            accomplished:
              "Built a 12-table PostgreSQL database schema with 28 row-level-security policies and 5 automated triggers for a staff CRM and client booking system",
            by: "designing the full data model, implementing Supabase RLS, and wiring it to a Cloudflare Workers API from scratch as sole engineer",
            resulting:
              "a production-grade multi-tenant backend with access-scoped security enforced at the database layer, avoiding an estimated $50,000–$100,000 AUD in external agency cost",
          },
          {
            accomplished:
              "Implemented server-side Meta Conversions API integration for Facebook/Instagram campaign attribution",
            by: "forwarding events from a Cloudflare Workers edge function (awaiting CAPI in parallel with Google Sheets POST), diagnosing and fixing silent event drops specific to the Workers runtime, then removing test_event_code to confirm production",
            resulting:
              "accurate cross-ad-blocker lead attribution with no client-side pixel dependency — confirmed live in production",
          },
          {
            accomplished:
              "Delivered a production-ready bilingual job listings platform in under 5 days",
            by: "executing a same-day framework migration from Vite SPA to Next.js 15 mid-build after identifying the SPA architecture would block SSR and organic search indexability",
            resulting:
              "Siddeley Talent Link live in under one calendar week, with a 7/7 unanimous blind stakeholder vote for the delivered design",
          },
          {
            accomplished:
              "Delivered real-time job engagement analytics at zero database cost",
            by: "building a Cloudflare KV + Pages Functions view and apply counter wired to each job listing, with no schema changes or database provisioning",
            resulting:
              "live per-job engagement tracking across all listings without any hosting cost or infrastructure overhead",
          },
          {
            accomplished:
              "Diagnosed and fixed three independent root causes of a silent production bug where FAQ inline links were being dropped in Cloudflare Workers",
            by: "tracing each root cause separately — next-intl t.raw() stripping nested arrays, OpenNext esbuild dropping JSON array-of-objects outside src/, and next-intl rich-text parser incompatibility with the Workers runtime",
            resulting:
              "a custom parseRichText() regex helper with zero external dependencies that resolved all three causes simultaneously with no regression",
          },
          {
            accomplished:
              "Authored ~8,000 words of Chinese-language content for the Siddeley Group website including 8 long-form insight articles, 8 bilingual pages, and all shared component strings",
            by: "producing the content in parallel with front-end development from a single Next.js static export, with no external translator",
            resulting:
              "an estimated $800–$1,600 AUD translation cost avoided and a single production build serving both EN and ZH audiences from one codebase",
          },
        ],
      },
      {
        id: "frontend",
        label: "Front-End Developer",
        subtitle:
          "Components, i18n, design systems, layout, and mobile performance — across P1, P3, P6, and P7 Phases 1–3.",
        bullets: [
          {
            accomplished:
              "Replaced 58 inline styles with Tailwind utility classes and standardised 20+ design tokens across 178 components in a single refactor pass",
            by: "conducting a full component-library audit in Phase 3, mapping each inline style to a Tailwind equivalent, and establishing shared spacing, colour, and typography tokens",
            resulting:
              "visual consistency across the full component library, reduced CSS specificity conflicts, and a maintainable design system that held through 7 subsequent development phases",
          },
          {
            accomplished:
              "Fixed persistent mobile touch lag on the Siddeley Group website",
            by: "diagnosing three independent root causes — Lenis smooth scroll running on touch devices, non-compositable CSS scale transforms inside animation components, and setState-per-frame CountUp updates — and fixing each root cause specifically",
            resulting:
              "smooth, native-feeling tap and scroll interactions on all tested mobile devices with no animation regression on desktop",
          },
          {
            accomplished:
              "Delivered a fully bilingual EN/ZH front-end across all 18 Next.js routes",
            by: "implementing next-intl with locale-aware metadata, hreflang alternates, and sitemap generation from a single codebase, covering every page, component, and shared layout",
            resulting:
              "both language audiences served without URL duplication, and Chinese-language pages indexed independently under correct canonical signals",
          },
          {
            accomplished:
              "Diagnosed and fixed NavBar logo overflow appearing across all breakpoints",
            by: "identifying the true PNG aspect ratio (2.855:1) vs the assumed 4:1 hint in the Next.js Image component, raising nav height from h-24 to h-28, adding a translate-y nudge to compensate for asymmetric PNG padding, and updating 16 page top-padding offsets across 18 files",
            resulting:
              "correct logo display at all breakpoints with no content overlap, a clean TypeScript and CI pass, and zero visual regression across the site",
          },
          {
            accomplished:
              "Fixed two concurrent CSS layout failures in the employer pathway PaymentMilestones component",
            by: "root-causing each independently — a 7-item flex layout producing an 840px minimum width floor against a 700px mobile-stack breakpoint (fixed: raise breakpoint to 900px), and mobile step-number dots self-centering inside variable-width content divs (fixed: restructure to flex-row with dot as a fixed-shrink anchor)",
            resulting:
              "correct layout verified across mobile, tablet, and desktop with no regression on a core employer conversion page",
          },
          {
            accomplished:
              "Built a grouped mega menu redesign for desktop and mobile navigation",
            by: "restructuring the dropdown and mobile accordion into two labelled groups surfacing all 9 employer pathway pages, adding 8 new translation keys in both EN and ZH, with zero hardcoded strings",
            resulting:
              "homepage-to-guide click depth reduced from 2 to 1 for every visitor on every page of the site",
          },
        ],
      },
      {
        id: "seo",
        label: "Technical SEO Specialist",
        subtitle:
          "Hreflang, structured data, content architecture, crawlability, and regulatory accuracy — P7 Phases 4–5 and 7–10.",
        bullets: [
          {
            accomplished:
              "Restored Chinese-language audience indexability across the entire RedBridge website",
            by: "diagnosing and fixing broken hreflang alternate tag annotations that were blocking zh-CN indexing, and submitting the first-ever sitemap.xml with hreflang alternates to Google Search Console",
            resulting:
              "Chinese-language pages properly indexed and eligible to rank in Mandarin-language Google Search, opening the organic acquisition channel for RedBridge's core Mandarin-speaking skilled migrant audience",
          },
          {
            accomplished:
              "Expanded FAQPage structured data eligibility to 27 Q&A pairs across the site",
            by: "expanding FAQPage JSON-LD on /faqs from 8 to 23 Q&A pairs across all three FAQ categories, and separately adding FAQPage schema to /visa-sponsorship-jobs-australia with 4 additional pairs",
            resulting:
              "27 FAQ answers now eligible to appear as rich result accordions in Google Search at zero marginal cost",
          },
          {
            accomplished:
              "Identified and fixed a previously undetected SEO bug hiding 11 FAQ answers from Googlebot",
            by: "auditing the delta between what Googlebot receives in server-side HTML vs what a user sees, discovering the tab system was rendering only the active category's content, then restructuring tabs to always-mount all panels with CSS-hidden inactive tabs",
            resulting:
              "11 previously Googlebot-invisible FAQ answers restored to server-side HTML without any UI change visible to users",
          },
          {
            accomplished:
              "Built 6 new indexed informational pages across 7 content clusters totalling 7,166+ words",
            by: "identifying high-intent migration search queries not covered by any existing URL, building each page with appropriate structure, structured data, canonical metadata, and internal linking from day one",
            resulting:
              "new organic ranking candidates for high-volume queries including '482 visa requirements', 'visa sponsorship jobs', and 'skills in demand visa', none of which had a dedicated page before Phase 7",
          },
          {
            accomplished:
              "Resolved a live i18n rendering bug exposing a raw key string in the footer to all site visitors",
            by: "diagnosing a duplicate namespace prefix in the t() call for footer.footer.affiliationPrefix and fixing it before any employer prospect encountered the raw key on a client-facing regulated services site",
            resulting:
              "zero raw key strings visible to users, preserving professional credibility on a site where trust signals directly affect employer enquiry conversion",
          },
          {
            accomplished:
              "Maintained regulatory content accuracy across a migration services site under active compliance obligations",
            by: "independently identifying and correcting a MARN attribution error in client-proposed title copy before it went live, replacing deprecated MLTSSL references with CSOL across 4 files after the Dec 2024 Skills in Demand reform, and updating the CSIT salary threshold from $76,515 to $79,499 on the day of the 1 July 2026 government indexation",
            resulting:
              "zero stale or non-compliant regulatory data on a site where incorrect salary thresholds or credential references carry legal and reputational risk for a registered migration agent",
          },
        ],
      },
      {
        id: "pm",
        label: "Product Manager",
        subtitle:
          "Team direction, PR governance, stakeholder decisions, and concurrent delivery — P2 and P4.",
        bullets: [
          {
            accomplished:
              "Managed concurrent delivery of three simultaneous production projects",
            by: "directing Nicole, Eric (Yinjia), and Chloe across RedBridge V2 and GoodMood Studio while personally building Siddeley Talent Link solo in under 5 days, across the same two-week period",
            resulting:
              "all three projects delivered on schedule with no broken builds to production and no missed client-facing milestones",
          },
          {
            accomplished:
              "Maintained zero broken production builds across all team pull requests during concurrent delivery",
            by: "reviewing, testing, and providing structured feedback on all PRs from three direct reports before any merge to the main branch",
            resulting:
              "a clean deployment history across three active projects with zero broken production builds attributable to team-member changes throughout the concurrent delivery period",
          },
          {
            accomplished:
              "Unblocked GoodMood Studio delivery when client domain access was inaccessible",
            by: "provisioning a new subdomain to maintain build and deployment momentum rather than waiting on an unresponsive external dependency",
            resulting:
              "no delivery delay, and the full technical groundwork remaining intact when the project was subsequently placed on hold following a management rebrand decision",
          },
          {
            accomplished:
              "Validated a design direction through objective blind stakeholder testing",
            by: "running a 7-person blind vote comparing Vanessa's Siddeley Talent Link design against a competing team member's design, with participants unaware of authorship",
            resulting:
              "a unanimous 7/7 outcome for Vanessa's design, providing an evidence-based decision with no subjective override and full team alignment before the production build commenced",
          },
          {
            accomplished:
              "Re-onboarded from a planned absence into simultaneous live delivery across two subsidiaries without delay",
            by: "resuming on 13 April directly into active management and development responsibilities across three concurrent projects, re-establishing full context within the same business day",
            resulting:
              "no measurable velocity drop in commit history or delivery dates across any of the three concurrent projects",
          },
        ],
      },
      {
        id: "devops",
        label: "DevOps / CI/CD Engineer",
        subtitle:
          "Deployment pipelines, smoke testing, Cloudflare Workers runtime, and production incident resolution — P1, P2, P6.",
        bullets: [
          {
            accomplished:
              "Designed and shipped a GitHub Actions CI/CD pipeline that builds and deploys to Cloudflare Workers globally on every push to main",
            by: "authoring the full workflow YAML, configuring Wrangler for Cloudflare Workers deployment, and wiring it to the existing OpenNext build step",
            resulting:
              "production deployments completing in ~2.5 minutes per commit with no manual steps, eliminating the class of manual deployment error that caused the prior sitewide navigation failure",
          },
          {
            accomplished:
              "Built a 7-step automated post-deploy smoke test suite covering cache purge, propagation wait, and route verification",
            by: "writing test steps that purge Cloudflare edge cache, wait for global propagation, then verify critical links and i18n strings across 4 live routes after every single deploy",
            resulting:
              "regressions caught at deploy time before any user encounters them, across 340+ production commits to date",
          },
          {
            accomplished:
              "Diagnosed and resolved a critical production incident where all employer pathway navigation links were broken sitewide",
            by: "identifying that a stale Cloudflare build artifact was being served instead of the latest deployment, determining the artifact retention root cause, and deploying a clean build",
            resulting:
              "all employer pathway routes restored to correct navigation, with no recurrence of the same failure class after the CI/CD pipeline was introduced",
          },
          {
            accomplished:
              "Fixed Cloudflare Bot Fight Mode blocking GitHub Actions smoke test runner IPs",
            by: "diagnosing the WAF block pattern in the response headers, then redirecting smoke tests to test the workers.dev origin URL directly, bypassing the WAF without disabling any security controls",
            resulting:
              "reliable post-deploy verification running on every commit without any security trade-offs or WAF rule modifications",
          },
          {
            accomplished:
              "Unblocked Siddeley Group website deployment blocked by a Cloudflare 25 MB file size limit",
            by: "compressing 20 staff PNG photos from 17–34 MB each to 60–120 KB JPEGs using macOS sips batch processing in a single terminal session",
            resulting:
              "all 20 assets compliant with platform limits and the deployment unblocked within the same working session, with no visible quality loss at web display resolution",
          },
        ],
      },
      {
        id: "campaigns",
        label: "Digital Campaign Manager",
        subtitle:
          "Google Ads campaign setup, keyword strategy, ad copywriting, attribution, and performance management — P5.",
        bullets: [
          {
            accomplished:
              "Achieved 8.5% average CTR on a Melbourne employer sponsorship paid search campaign",
            by: "structuring 10+ tightly themed keyword groups covering the full 482 visa and employer sponsorship search intent landscape, and writing precision-matched ad copy aligned to each group's intent",
            resulting:
              "a CTR more than double the 3–5% industry benchmark for legal and migration consulting in Australia, from a standing start with no historical campaign data",
          },
          {
            accomplished:
              "Achieved 15.48% CTR on the 'visa sponsorship' keyword",
            by: "writing intent-matched ad copy specifically targeting employers in the active decision phase of exploring 482 visa sponsorship options, rather than generic awareness copy",
            resulting:
              "the highest-performing individual keyword in the campaign, confirming the intent-matched copy approach as the benchmark for expanding the ad group's keyword and bid strategy",
          },
          {
            accomplished:
              "Implemented accurate multi-platform conversion attribution across Google Ads, Facebook, and Instagram",
            by: "configuring Google Tag Manager with Google Ads conversion tag and Meta Pixel, wiring server-side Meta CAPI alongside to capture leads that ad blockers would strip, and appending ctasrc and locale URL parameters to all booking form submissions",
            resulting:
              "cross-channel attribution that distinguishes Facebook, Instagram, and Google Ads leads independently of client-side pixel data — survivable to ad blockers and browser privacy restrictions",
          },
          {
            accomplished:
              "Maintained A$4.84 average CPC across migration consulting keywords with A$861 total spend",
            by: "structuring high-relevance, tightly scoped ad groups to maximise Quality Score and suppressing lower-intent broad match terms that would inflate volume without conversion intent",
            resulting:
              "competitive cost per click in a category where migration and legal services in Australia typically command significantly higher CPC rates, with 178 clicks across 2,100 impressions",
          },
        ],
      },
    ],
  },
  zh: {
    pageTitle: "职责与成就",
    pageSubtitle:
      "IT 总监 · Siddeley Group — 2026年2月–7月考核期内承担的职能角色，以谷歌 XYZ 公式撰写。",
    note: "正式职衔：IT 总监。以下各标签页反映该职位下实际履行的职能角色。",
    tabs: [
      {
        id: "fullstack",
        label: "全栈工程师",
        subtitle:
          "后端、数据库、API、集成开发 — 项目1、3 及 Cloudflare Workers 运行时的独立工程师。",
        bullets: [
          {
            accomplished:
              "为员工 CRM 与客户预约系统构建了包含 12 张数据表、28 条行级安全策略和 5 个自动化触发器的 PostgreSQL 数据库架构",
            by: "以独立工程师身份从零设计完整数据模型、实施 Supabase RLS，并将其接入 Cloudflare Workers API",
            resulting:
              "具备数据库层访问权限隔离的生产级多租户后端，节省外部机构费用约 $50,000–$100,000 澳元",
          },
          {
            accomplished:
              "实施了用于 Facebook/Instagram 广告归因的服务端 Meta Conversions API 集成",
            by: "通过 Cloudflare Workers 边缘函数转发事件（与 Google Sheets POST 并行 await CAPI），诊断并修复 Workers 运行时特有的静默事件丢失问题，最终移除 test_event_code 确认生产环境正常",
            resulting:
              "无需依赖客户端像素即可实现跨广告拦截器的精准线索归因，已在生产环境中确认正常运行",
          },
          {
            accomplished: "在 5 天内交付生产就绪的双语招聘平台",
            by: "在开发过程中识别到 Vite SPA 架构将阻碍 SSR 和自然搜索索引能力后，当天执行框架迁移至 Next.js 15",
            resulting:
              "维拓联才（Siddeley Talent Link）在不到一个日历周内上线，7 人盲测全票（7/7）选择交付的设计方案",
          },
          {
            accomplished: "以零数据库成本实现招聘岗位实时互动数据追踪",
            by: "构建 Cloudflare KV + Pages Functions 的浏览量与申请计数器，接入每个招聘岗位，无需数据库配置或架构变更",
            resulting:
              "所有岗位的实时参与度追踪无需任何托管成本或基础设施开销",
          },
          {
            accomplished:
              "诊断并修复了 Cloudflare Workers 中 FAQ 内联链接静默消失的三个独立根因",
            by: "分别追踪每个根因 — next-intl t.raw() 剔除嵌套数组、OpenNext esbuild 丢弃 src/ 外的 JSON 数组对象、next-intl 富文本解析器与 Workers 运行时不兼容",
            resulting:
              "自定义 parseRichText() 正则辅助函数（零外部依赖）同时解决全部三个根因，无任何回归",
          },
          {
            accomplished:
              "为 Siddeley Group 网站撰写约 8,000 字的中文内容，包括 8 篇长篇洞察文章、8 个双语页面及所有共享组件文案",
            by: "在前端开发的同时平行产出内容，通过单一 Next.js 静态导出构建，无需外部翻译人员",
            resulting:
              "节省约 $800–$1,600 澳元翻译费用，单一代码库同时为中英文两个受众群体提供服务",
          },
        ],
      },
      {
        id: "frontend",
        label: "前端开发工程师",
        subtitle:
          "组件、国际化、设计系统、布局与移动端性能 — 项目1、3、6 及 V3 第1–3阶段。",
        bullets: [
          {
            accomplished:
              "在一次重构中将 58 处内联样式替换为 Tailwind 工具类，并为 178 个组件标准化 20 余项设计令牌",
            by: "在第三阶段进行完整的组件库审计，将每处内联样式映射至 Tailwind 等效类，并建立共享的间距、色彩与排版令牌",
            resulting:
              "组件库视觉一致性提升，CSS 特异性冲突减少，可维护的设计系统在后续 7 个开发阶段中保持稳定",
          },
          {
            accomplished: "修复了 Siddeley Group 网站长期存在的移动端触摸延迟问题",
            by: "诊断三个独立根因 — 触摸设备上运行的 Lenis 平滑滚动、动画组件中非合成层的 CSS scale 变换、以及 CountUp 的每帧 setState 更新 — 并针对每个根因单独修复",
            resulting:
              "所有测试移动设备上的触摸和滚动交互流畅自然，桌面端动画效果无任何回归",
          },
          {
            accomplished: "为全部 18 个 Next.js 路由交付完整的中英双语前端",
            by: "通过 next-intl 实现本地化元数据、hreflang 备用标签和站点地图生成，覆盖每个页面、组件及共享布局，从单一代码库构建",
            resulting:
              "两种语言受众均可访问且无 URL 重复，中文页面在正确的规范信号下独立索引",
          },
          {
            accomplished: "诊断并修复了出现在所有断点的导航栏 Logo 溢出问题",
            by: "识别 PNG 真实长宽比（2.855:1）与 Next.js Image 组件假定比例（4:1）之间的差异，将导航栏高度从 h-24 调整至 h-28，添加 translate-y 微调补偿 PNG 透明边距，并跨 18 个文件更新 16 处页面顶部内边距",
            resulting:
              "所有断点下 Logo 显示正确且无内容遮挡，TypeScript 与 CI 验证均通过，全站无视觉回归",
          },
          {
            accomplished:
              "修复了雇主担保通道 PaymentMilestones 组件中同时存在的两个 CSS 布局故障",
            by: "分别确定每个故障的根因 — 7 个弹性布局项目产生 840px 最小宽度底限但移动端堆叠断点仅为 700px（修复：将断点提升至 900px），以及移动端步骤编号圆点在可变宽度内容 div 中各自居中（修复：重构为 flex-row 并将圆点设为固定收缩的左侧锚点）",
            resulting:
              "在移动端、平板端和桌面端均验证布局正确，核心雇主转化页面无任何回归",
          },
          {
            accomplished: "为桌面端和移动端导航构建了分组大菜单重设计",
            by: "将下拉菜单和移动手风琴重构为两个带标签的分组，展示全部 9 个雇主担保通道页面，新增 8 个中英双语翻译键，无任何硬编码字符串",
            resulting:
              "网站任意页面到任意指南页面的点击次数从两次减少至一次",
          },
        ],
      },
      {
        id: "seo",
        label: "技术 SEO 专员",
        subtitle:
          "Hreflang、结构化数据、内容架构、可爬取性与法规准确性 — V3 第4–5及7–10阶段。",
        bullets: [
          {
            accomplished: "恢复了 RedBridge 网站全站的中文受众索引能力",
            by: "诊断并修复了阻止 zh-CN 索引的 hreflang 备用标签注释错误，并首次向 Google Search Console 提交含 hreflang 备用链接的 sitemap.xml",
            resulting:
              "中文页面正确索引并具备在普通话版 Google 搜索中排名的资格，为 RedBridge 核心华语技术移民受众打开自然搜索获客渠道",
          },
          {
            accomplished:
              "将全站 FAQPage 结构化数据覆盖扩展至 27 条问答对",
            by: "将 /faqs 页面的 FAQPage JSON-LD 从 8 条扩展至 23 条（覆盖三个 FAQ 类别），并单独为 /visa-sponsorship-jobs-australia 新增含 4 条的 FAQPage 结构化数据",
            resulting:
              "全站 27 条 FAQ 答案现可作为 Google 搜索富媒体折叠面板展示，零边际成本",
          },
          {
            accomplished:
              "发现并修复了此前未被检测到的 SEO 漏洞 — 11 条 FAQ 答案对 Googlebot 不可见",
            by: "审计 Googlebot 在服务端 HTML 中接收到的内容与用户看到的内容之间的差异，发现标签系统仅将当前活动类别的内容渲染至服务端 HTML，随后将标签重构为始终挂载所有面板并通过 CSS 隐藏非活动标签",
            resulting:
              "11 条此前 Googlebot 不可见的 FAQ 答案恢复为服务端 HTML 可见，用户界面行为无任何变化",
          },
          {
            accomplished:
              "跨 7 个内容集群构建 6 个新索引信息页面，共计 7,166+ 字",
            by: "识别现有 URL 结构中未覆盖的高意向移民搜索查询，为每个页面从第一天起就配置适当的内容结构、结构化数据、规范元数据和内部链接",
            resulting:
              "为此前网站无对应页面的高流量查询（包括'482 签证要求'、'签证担保工作'和'SID 签证'）获得新的自然排名候选",
          },
          {
            accomplished:
              "修复了向所有访客暴露原始键名字符串的上线 i18n 渲染 bug",
            by: "诊断 footer.footer.affiliationPrefix 的 t() 调用中存在重复命名空间前缀，并在任何雇主候选人在受监管服务网站上看到原始键名之前完成修复",
            resulting:
              "向用户显示的原始键名字符串归零，在信任信号直接影响雇主询盘转化的网站上维护了专业可信度",
          },
          {
            accomplished: "在具有持续合规义务的移民服务网站上保持法规内容准确性",
            by: "独立识别并纠正了客户提案标题文案中在发布前就会导致 MARN 归属错误的事实错误；将 4 个文件中已于 2024 年 12 月 SID 签证改革后废止的 MLTSSL 引用替换为 CSOL；并在 2026 年 7 月 1 日政府更新当日将 CSIT 薪资门槛从 $76,515 更新为 $79,499",
            resulting:
              "在一个注册移民代理人运营的网站上，薪资门槛或资质引用的错误将带来法律和声誉风险，实现了零过期或不合规法规数据",
          },
        ],
      },
      {
        id: "pm",
        label: "产品经理",
        subtitle:
          "团队指导、PR 审核、利益相关方决策与并行交付 — 项目2与4。",
        bullets: [
          {
            accomplished: "管理了三个同时进行的生产项目的并行交付",
            by: "在两周时间内指导 Nicole、Eric（Yinjia）和 Chloe 完成 RedBridge V2 与 GoodMood Studio，同时个人独立在 5 天内构建了维拓联才",
            resulting:
              "三个项目均按时交付，无任何生产环境构建错误，无客户可见的交付节点延误",
          },
          {
            accomplished:
              "在并行交付期间保持所有团队 Pull Request 的生产构建零错误",
            by: "在任何合并至主分支之前，对三名直属下属的所有 PR 进行审查、测试并提供结构化反馈",
            resulting:
              "三个活跃项目在整个并行交付期间保持清晰的部署历史，无任何因团队成员变更导致的生产构建失败",
          },
          {
            accomplished:
              "在客户域名访问受阻时解除了 GoodMood Studio 的交付阻塞",
            by: "配置新子域名以维持构建和部署进度，而非等待无响应的外部依赖",
            resulting:
              "无任何交付延迟，当项目因管理层品牌重塑决策而暂停时，全部技术基础工作保持完整",
          },
          {
            accomplished: "通过客观盲测验证了设计方向决策",
            by: "组织 7 人盲测，对比 Vanessa 的维拓联才设计与团队成员的竞争方案，参与者不知晓设计作者身份",
            resulting:
              "Vanessa 方案获全票（7/7）支持，在生产构建开始前实现了有数据支撑、无主观干预的决策，并达成完整的团队共识",
          },
          {
            accomplished: "从计划外缺席中重新融入，同时进行跨两个子公司的三个活跃项目交付，无任何延误",
            by: "于 4 月 13 日复工，当天即直接恢复对三个并行项目的技术与管理职责，在同一工作日内重建完整的项目上下文",
            resulting:
              "三个并行项目在提交历史或交付日期上均无可测量的效率下降",
          },
        ],
      },
      {
        id: "devops",
        label: "DevOps / CI/CD 工程师",
        subtitle:
          "部署流水线、冒烟测试、Cloudflare Workers 运行时与生产事故响应 — 项目1、2、6。",
        bullets: [
          {
            accomplished:
              "设计并交付了 GitHub Actions CI/CD 流水线，每次推送至 main 即全球部署至 Cloudflare Workers",
            by: "编写完整的 workflow YAML，配置 Cloudflare Workers 部署的 Wrangler，并接入现有的 OpenNext 构建步骤",
            resulting:
              "每次提交生产部署约 2.5 分钟内完成，无需任何人工步骤，消除了导致此前全站导航故障的手动部署错误类型",
          },
          {
            accomplished:
              "构建了涵盖缓存清除、传播等待和路由验证的 7 步自动化部署后冒烟测试套件",
            by: "编写测试步骤：清除 Cloudflare 边缘缓存、等待全球传播，然后在每次部署后验证 4 条线上路由的关键链接和国际化字符串",
            resulting:
              "在迄今 340+ 次生产提交中，回归问题均在部署时被捕获，早于任何用户发现",
          },
          {
            accomplished:
              "诊断并解决了所有雇主担保通道导航链接全站失效的关键生产事故",
            by: "识别到 Cloudflare 陈旧构建产物被持续提供而非最新部署，确定产物留存根因，并部署干净构建",
            resulting:
              "所有雇主担保通道路由导航恢复正常，CI/CD 流水线引入后同类故障未再发生",
          },
          {
            accomplished:
              "修复了 Cloudflare Bot Fight Mode 拦截 GitHub Actions 冒烟测试 runner IP 的问题",
            by: "在响应头中诊断 WAF 拦截模式，将冒烟测试改为直接测试 workers.dev 源 URL，绕过 WAF 而不禁用任何安全控制",
            resulting:
              "每次提交均可可靠运行部署后验证，无任何安全权衡或 WAF 规则修改",
          },
          {
            accomplished:
              "解除了 Cloudflare 25 MB 文件大小限制对 Siddeley Group 网站部署的阻塞",
            by: "在单次终端会话中使用 macOS sips 批量将 20 张员工 PNG 照片（17–34 MB）压缩至 60–120 KB JPEG",
            resulting:
              "所有 20 个资源符合平台限制，在同一工作会话内解除阻塞完成部署，网页展示分辨率下无可见质量损失",
          },
        ],
      },
      {
        id: "campaigns",
        label: "数字广告投放经理",
        subtitle:
          "Google Ads 广告系列设置、关键词策略、广告文案撰写、归因追踪与效果管理 — 项目5。",
        bullets: [
          {
            accomplished:
              "墨尔本雇主担保关键词付费搜索广告系列实现 8.5% 平均点击率",
            by: "构建 10+ 个主题紧密的关键词组，覆盖 482 签证和雇主担保搜索意图全景，并为每组撰写精准匹配的广告文案",
            resulting:
              "点击率超过澳大利亚法律和移民咨询行业基准（3–5%）的两倍以上，从零历史数据起步实现",
          },
          {
            accomplished: "'visa sponsorship' 关键词实现 15.48% 点击率",
            by: "撰写精准意图匹配的广告文案，专门面向正处于探索 482 签证担保选项决策阶段的雇主，而非通用认知类文案",
            resulting:
              "成为广告系列中表现最优的单一关键词，确认意图匹配文案方法论作为广告组关键词与出价策略扩展的基准",
          },
          {
            accomplished:
              "实现了跨 Google Ads、Facebook 和 Instagram 的精准多平台转化归因",
            by: "配置 Google Tag Manager（含 Google Ads 转化标签和 Meta Pixel），同时接入服务端 Meta CAPI 以捕获广告拦截器屏蔽的线索，并为所有预约表单提交附加 ctasrc 和 locale URL 参数",
            resulting:
              "无需依赖客户端像素数据，独立区分 Facebook、Instagram 和 Google Ads 来源线索的跨渠道归因 — 可抵御广告拦截器和浏览器隐私限制",
          },
          {
            accomplished:
              "以 $861 澳元总支出维持 $4.84 澳元平均单次点击费用",
            by: "构建高相关性、范围精确的广告组以最大化质量得分，并抑制低意向宽泛匹配词条以避免无效流量膨胀",
            resulting:
              "在澳大利亚移民和法律服务通常需要支付更高单次点击费用的市场中实现竞争力定价，以 $861 澳元获得 2,100 次展示和 178 次点击",
          },
        ],
      },
    ],
  },
};
