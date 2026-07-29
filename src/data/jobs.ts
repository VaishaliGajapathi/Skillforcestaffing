export interface Job {
  id: string;
  title: string;
  category: string;
  location: string;
  workplace: "Remote" | "Hybrid" | "Onsite";
  type: "Contract" | "Contract-to-Hire" | "Full-time";
  experience: string;
  rate: string;
  posted: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

export const jobCategories = [
  "All Roles",
  "Cloud & DevOps",
  "Data & AI",
  "Salesforce",
  "Software Engineering",
  "Cybersecurity",
  "Business & PMO",
] as const;

export const jobs: Job[] = [
  {
    id: "sfs-1001",
    title: "Senior Salesforce Developer",
    category: "Salesforce",
    location: "Atlanta, GA",
    workplace: "Hybrid",
    type: "Contract-to-Hire",
    experience: "5+ years",
    rate: "$70 - $85 / hr",
    posted: "2 days ago",
    summary:
      "Build and extend enterprise Salesforce applications for a Fortune 500 healthcare client modernizing its service platform.",
    responsibilities: [
      "Develop Apex classes, triggers, and Lightning Web Components",
      "Design integrations with external systems via REST/SOAP and MuleSoft",
      "Own code reviews, unit test coverage, and deployment pipelines",
      "Partner with architects to translate requirements into scalable designs",
    ],
    requirements: [
      "5+ years hands-on Salesforce development",
      "Platform Developer I certification (PD II preferred)",
      "Strong Apex, SOQL, LWC and integration patterns",
      "Experience with Git-based CI/CD (Copado, Gearset, or Azure DevOps)",
    ],
  },
  {
    id: "sfs-1002",
    title: "AWS DevOps Engineer",
    category: "Cloud & DevOps",
    location: "Remote (US)",
    workplace: "Remote",
    type: "Contract",
    experience: "4+ years",
    rate: "$65 - $80 / hr",
    posted: "4 days ago",
    summary:
      "Own infrastructure-as-code and release automation for a high-traffic retail platform running on AWS EKS.",
    responsibilities: [
      "Build and maintain Terraform modules and Helm charts",
      "Operate EKS clusters, autoscaling, and observability stack",
      "Harden CI/CD pipelines in GitHub Actions",
      "Participate in on-call rotation and incident reviews",
    ],
    requirements: [
      "4+ years in DevOps/SRE roles on AWS",
      "Terraform, Kubernetes, Docker in production",
      "Strong scripting in Python or Go",
      "Prometheus/Grafana or Datadog experience",
    ],
  },
  {
    id: "sfs-1003",
    title: "Data Engineer — Snowflake",
    category: "Data & AI",
    location: "Dallas, TX",
    workplace: "Hybrid",
    type: "Contract",
    experience: "4+ years",
    rate: "$60 - $75 / hr",
    posted: "1 week ago",
    summary:
      "Design and deliver analytics-ready data products on Snowflake and dbt for a financial services data platform.",
    responsibilities: [
      "Build ELT pipelines with dbt, Airflow, and Snowflake",
      "Model dimensional and data-vault schemas",
      "Implement data quality checks and lineage",
      "Collaborate with analysts on semantic layer design",
    ],
    requirements: [
      "4+ years data engineering experience",
      "Expert SQL plus Python",
      "Hands-on Snowflake and dbt",
      "Exposure to financial or regulated data domains",
    ],
  },
  {
    id: "sfs-1004",
    title: "AI/ML Engineer (LLM Applications)",
    category: "Data & AI",
    location: "Remote (US)",
    workplace: "Remote",
    type: "Contract-to-Hire",
    experience: "3+ years",
    rate: "$75 - $95 / hr",
    posted: "3 days ago",
    summary:
      "Ship production LLM features — retrieval pipelines, evaluation harnesses, and guardrails — for an enterprise SaaS product.",
    responsibilities: [
      "Build RAG pipelines and vector search services",
      "Design evaluation and observability for model outputs",
      "Optimize latency and inference cost",
      "Partner with product on AI feature roadmap",
    ],
    requirements: [
      "3+ years in ML/AI engineering",
      "Python, PyTorch or TensorFlow",
      "Experience with LangChain/LlamaIndex or equivalent",
      "Cloud deployment on AWS, Azure, or GCP",
    ],
  },
  {
    id: "sfs-1005",
    title: "Full-Stack Engineer (React / Node)",
    category: "Software Engineering",
    location: "Charlotte, NC",
    workplace: "Hybrid",
    type: "Contract",
    experience: "3+ years",
    rate: "$55 - $70 / hr",
    posted: "5 days ago",
    summary:
      "Deliver customer-facing portal features across a React front end and Node/TypeScript services.",
    responsibilities: [
      "Build responsive UI components and accessible flows",
      "Develop REST and GraphQL services",
      "Write unit and integration tests",
      "Participate in agile ceremonies and code reviews",
    ],
    requirements: [
      "3+ years full-stack development",
      "React, TypeScript, Node.js",
      "PostgreSQL or MongoDB",
      "Docker and CI/CD familiarity",
    ],
  },
  {
    id: "sfs-1006",
    title: "Information Security Analyst (IAM)",
    category: "Cybersecurity",
    location: "Remote (US)",
    workplace: "Remote",
    type: "Contract",
    experience: "4+ years",
    rate: "$60 - $78 / hr",
    posted: "1 week ago",
    summary:
      "Support identity governance and access certification programs for a multi-cloud enterprise environment.",
    responsibilities: [
      "Administer IAM platforms (Okta, SailPoint, or Entra ID)",
      "Run access reviews and certification campaigns",
      "Document and remediate access risks",
      "Support SOX and SOC 2 audit evidence collection",
    ],
    requirements: [
      "4+ years in IAM or security operations",
      "Hands-on with Okta, SailPoint, or Entra ID",
      "Understanding of least-privilege and RBAC design",
      "Security+ , CISSP or equivalent preferred",
    ],
  },
  {
    id: "sfs-1007",
    title: "Technical Program Manager",
    category: "Business & PMO",
    location: "Atlanta, GA",
    workplace: "Onsite",
    type: "Full-time",
    experience: "7+ years",
    rate: "$140K - $165K / yr",
    posted: "6 days ago",
    summary:
      "Drive multi-team platform modernization programs end to end for a manufacturing enterprise.",
    responsibilities: [
      "Own program plans, risks, and executive reporting",
      "Coordinate across engineering, product, and vendors",
      "Manage budgets and delivery milestones",
      "Drive process improvements across delivery teams",
    ],
    requirements: [
      "7+ years managing technical programs",
      "Agile/SAFe delivery experience",
      "Strong executive communication",
      "PMP or SAFe certification preferred",
    ],
  },
  {
    id: "sfs-1008",
    title: "Salesforce Administrator",
    category: "Salesforce",
    location: "Remote (US)",
    workplace: "Remote",
    type: "Contract-to-Hire",
    experience: "3+ years",
    rate: "$45 - $58 / hr",
    posted: "1 day ago",
    summary:
      "Own day-to-day Salesforce configuration, automation, and user enablement for a growing SaaS revenue org.",
    responsibilities: [
      "Manage users, profiles, permission sets, and security",
      "Build flows, validation rules, reports, and dashboards",
      "Manage release cycles and sandbox refreshes",
      "Train users and document processes",
    ],
    requirements: [
      "3+ years as a Salesforce Administrator",
      "Salesforce Administrator certification",
      "Sales Cloud and Service Cloud experience",
      "Strong stakeholder communication skills",
    ],
  },
];
