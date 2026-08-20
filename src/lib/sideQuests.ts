export type Lang = "en" | "zh";

export interface SideQuestStep {
  label: string;
  detail: string;
}

export interface SideQuest {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  accent: string;
  tags: string[];
  summary: string;
  steps: SideQuestStep[];
  outcome: string;
}

export interface SideQuestsData {
  pageTitle: string;
  pageSubtitle: string;
  quests: SideQuest[];
}

export const sideQuests: Record<Lang, SideQuestsData> = {
  en: {
    pageTitle: "Side Quests",
    pageSubtitle: "Smaller technical problems solved outside the main project tracks — infrastructure fixes, tools built for the team, and things that needed doing.",
    quests: [
      {
        id: "zoho-dns",
        tag: "Infrastructure · Apr 2026",
        title: "Zoho Mail DNS Setup",
        subtitle: "@redbridge-consulting.com.au · MX · SPF · DKIM · DMARC",
        accent: "#0369a1",
        tags: ["DNS", "Email", "Zoho Mail", "SPF", "DKIM", "DMARC"],
        summary: "Configured professional email for @redbridge-consulting.com.au through Zoho Mail by adding the full set of DNS records required for delivery, authentication, and anti-spoofing — enabling the company to send and receive email on its own domain rather than a generic address.",
        steps: [
          {
            label: "MX Records",
            detail: "Added Zoho's MX records (mx.zoho.com.au, mx2.zoho.com.au, mx3.zoho.com.au at priorities 10, 20, 50) to the domain's DNS zone so inbound mail routes to Zoho's servers.",
          },
          {
            label: "Domain Verification (TXT)",
            detail: "Added the Zoho ownership verification TXT record to prove control of the domain before Zoho would activate the account.",
          },
          {
            label: "SPF Record",
            detail: 'Added a TXT record publishing the SPF policy (include:zoho.com.au ~all) so receiving mail servers can verify that Zoho is an authorised sender for the domain.',
          },
          {
            label: "DKIM",
            detail: "Generated the DKIM key pair in Zoho Mail Admin, then added the public key as a TXT record at the selector subdomain (zmail._domainkey). This cryptographically signs outgoing messages so recipients can verify they haven't been tampered with in transit.",
          },
          {
            label: "DMARC",
            detail: "Added a DMARC TXT record at _dmarc with a quarantine policy, instructing receiving servers to treat mail that fails both SPF and DKIM alignment as suspicious — reducing the risk of the domain being used for phishing.",
          },
          {
            label: "Verification",
            detail: "Confirmed all records propagated correctly using Zoho's built-in DNS checker and sent test messages to verify delivery, signatures, and header authentication results (DKIM=pass, SPF=pass, DMARC=pass).",
          },
        ],
        outcome: "All @redbridge-consulting.com.au email addresses functional via Zoho Mail. Outgoing mail passes DKIM, SPF, and DMARC checks — improving deliverability and protecting the domain from spoofing.",
      },
      {
        id: "intern-quiz",
        tag: "Internal Tool · 2026",
        title: "Intern Quiz Application",
        subtitle: "Knowledge assessment tool for new interns",
        accent: "#7c3aed",
        tags: ["Internal Tool", "Quiz", "Interns"],
        summary: "Built a quiz application for assessing intern knowledge — details to be added.",
        steps: [],
        outcome: "",
      },
    ],
  },
  zh: {
    pageTitle: "附属任务",
    pageSubtitle: "主项目之外解决的技术问题——基础设施修复、为团队构建的工具，以及需要处理的事项。",
    quests: [
      {
        id: "zoho-dns",
        tag: "基础设施 · 2026年4月",
        title: "Zoho 邮件 DNS 配置",
        subtitle: "@redbridge-consulting.com.au · MX · SPF · DKIM · DMARC",
        accent: "#0369a1",
        tags: ["DNS", "邮件", "Zoho Mail", "SPF", "DKIM", "DMARC"],
        summary: "通过 Zoho Mail 为 @redbridge-consulting.com.au 配置专业企业邮件，添加了投递、身份验证与反欺骗所需的完整 DNS 记录集，使公司能够使用自有域名收发邮件，而非依赖通用地址。",
        steps: [
          {
            label: "MX 记录",
            detail: "在域名 DNS 区域添加 Zoho MX 记录（mx.zoho.com.au、mx2.zoho.com.au、mx3.zoho.com.au，优先级分别为 10、20、50），使入站邮件路由至 Zoho 服务器。",
          },
          {
            label: "域名验证（TXT）",
            detail: "添加 Zoho 所有权验证 TXT 记录，以证明对该域名的控制权，这是 Zoho 激活账户的前提条件。",
          },
          {
            label: "SPF 记录",
            detail: "添加 TXT 记录以发布 SPF 策略（include:zoho.com.au ~all），使接收方邮件服务器能够验证 Zoho 为该域名的授权发件方。",
          },
          {
            label: "DKIM",
            detail: "在 Zoho 邮件管理后台生成 DKIM 密钥对，将公钥以 TXT 记录形式添加至选择器子域（zmail._domainkey）。该配置对外发邮件进行加密签名，使接收方可验证邮件在传输过程中未被篡改。",
          },
          {
            label: "DMARC",
            detail: "在 _dmarc 处添加 DMARC TXT 记录，策略设置为 quarantine，指示接收服务器将同时未通过 SPF 和 DKIM 对齐校验的邮件标记为可疑，降低该域名被用于网络钓鱼的风险。",
          },
          {
            label: "验证",
            detail: "使用 Zoho 内置 DNS 检查工具确认所有记录已正确传播，并发送测试邮件验证投递情况、签名及邮件头认证结果（DKIM=pass、SPF=pass、DMARC=pass）。",
          },
        ],
        outcome: "所有 @redbridge-consulting.com.au 邮件地址通过 Zoho Mail 正常运行。外发邮件通过 DKIM、SPF 和 DMARC 校验，提升了投递率，并保护域名免受欺骗攻击。",
      },
      {
        id: "intern-quiz",
        tag: "内部工具 · 2026年",
        title: "实习生测验应用",
        subtitle: "面向新实习生的知识测评工具",
        accent: "#7c3aed",
        tags: ["内部工具", "测验", "实习生"],
        summary: "为评估实习生知识掌握情况而构建的测验应用——详情待补充。",
        steps: [],
        outcome: "",
      },
    ],
  },
};
