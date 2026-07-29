import {
  Award,
  Banknote,
  BriefcaseBusiness,
  Building2,
  Cloud,
  Cpu,
  Database,
  FileSearch,
  Factory,
  Gauge,
  GraduationCap,
  Handshake,
  HeartPulse,
  Layers,
  LineChart,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Timer,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  bullets: string[];
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: "contract",
    icon: Timer,
    title: "Contract Staffing",
    summary:
      "Scale delivery capacity in days, not quarters. We supply pre-vetted contractors for short-term surges, backfills, and project ramp-ups.",
    bullets: [
      "Qualified profiles within 48 hours",
      "W2, 1099 and C2C engagement models",
      "Full payroll, benefits and compliance handled",
      "Weekly timesheet and burn-rate reporting",
    ],
  },
  {
    id: "augmentation",
    icon: Layers,
    title: "Staff Augmentation",
    summary:
      "Embed senior engineers, admins and analysts directly into your teams — your process, your tooling, your sprint cadence.",
    bullets: [
      "Onshore, nearshore and offshore blends",
      "Dedicated resources reporting to your leads",
      "Ramp up or down with 2-week notice",
      "Knowledge-transfer and exit documentation",
    ],
    featured: true,
  },
  {
    id: "direct-hire",
    icon: UserCheck,
    title: "Direct Hire & Executive Search",
    summary:
      "Permanent placement for hard-to-fill roles, backed by a structured search process and a 90-day replacement guarantee.",
    bullets: [
      "Market mapping and calibrated shortlists",
      "Behavioral plus technical assessment",
      "Offer management and closing support",
      "90-day replacement guarantee",
    ],
  },
  {
    id: "managed",
    icon: Workflow,
    title: "Managed Delivery Teams",
    summary:
      "A pod of engineers, a delivery manager, and agreed SLAs — outcome-based teams that own a workstream end to end.",
    bullets: [
      "Cross-functional pods (dev, QA, DevOps)",
      "SLA-backed delivery and reporting",
      "Fixed monthly cost per pod",
      "24/5 coverage across time zones",
    ],
  },
  {
    id: "rpo",
    icon: FileSearch,
    title: "RPO & Talent Sourcing",
    summary:
      "Recruitment process outsourcing for high-volume hiring — we run sourcing, screening and scheduling as an extension of your TA team.",
    bullets: [
      "Dedicated sourcing pods",
      "ATS-integrated pipeline management",
      "Employer branding and outreach",
      "Cost per hire reduced up to 40%",
    ],
  },
  {
    id: "payroll",
    icon: Banknote,
    title: "Payrolling & Compliance",
    summary:
      "Already sourced the talent? We onboard, payroll and manage them as employer of record with complete compliance coverage.",
    bullets: [
      "Employer of record services",
      "I-9, E-Verify and background checks",
      "Multi-state tax and insurance compliance",
      "Transparent, low-markup pricing",
    ],
  },
];

export const practices = [
  { icon: Cloud, title: "Cloud & DevOps", roles: "AWS, Azure, GCP, Kubernetes, Terraform, SRE" },
  { icon: Database, title: "Data & Analytics", roles: "Snowflake, Databricks, Power BI, ETL, Data Engineering" },
  { icon: Cpu, title: "AI & Machine Learning", roles: "LLM, MLOps, Computer Vision, Data Science" },
  { icon: BriefcaseBusiness, title: "Salesforce & CRM", roles: "Admin, Developer, Architect, Consultant" },
  { icon: Layers, title: "Software Engineering", roles: "Java, .NET, React, Node, Python, Mobile" },
  { icon: ShieldCheck, title: "Cybersecurity & GRC", roles: "SOC, IAM, Risk, Compliance, Pen Testing" },
  { icon: Gauge, title: "ERP & Enterprise Apps", roles: "SAP, Oracle, Workday, ServiceNow" },
  { icon: Users, title: "Business & PMO", roles: "BA, Scrum Master, Project & Program Managers" },
];

export const industries = [
  { icon: HeartPulse, name: "Healthcare & Life Sciences" },
  { icon: Banknote, name: "Banking & Financial Services" },
  { icon: ShoppingCart, name: "Retail & E-Commerce" },
  { icon: Factory, name: "Manufacturing & Logistics" },
  { icon: Building2, name: "Public Sector & Government" },
  { icon: Rocket, name: "Technology & SaaS" },
  { icon: GraduationCap, name: "Education & EdTech" },
  { icon: LineChart, name: "Insurance & Professional Services" },
];

export const stats = [
  { value: "48 hrs", label: "Average time to first qualified submittal" },
  { value: "92%", label: "Submittal-to-interview conversion" },
  { value: "500+", label: "Professionals placed nationwide" },
  { value: "94%", label: "Contractor retention through assignment" },
];

export const differentiators = [
  {
    icon: FileSearch,
    title: "Rigorous 6-Stage Vetting",
    description:
      "Screening, technical assessment, panel interview, reference checks, background verification, and manager fit review before any profile reaches you.",
  },
  {
    icon: Timer,
    title: "Speed Without Shortcuts",
    description:
      "Warm bench plus an always-on sourcing engine means qualified profiles typically land in your inbox within 48 hours of intake.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Built In",
    description:
      "E-Verify, I-9, multi-state payroll tax, workers' compensation, and MSP/VMS compliance are managed end to end by our operations team.",
  },
  {
    icon: Handshake,
    title: "Transparent Commercials",
    description:
      "Clear markups, no hidden conversion fees, and flexible engagement models — contract, C2H, direct hire, or managed pods.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description:
      "Free replacement within 30 days for contract roles and 90 days for direct hire placements. We stand behind every placement.",
  },
  {
    icon: Users,
    title: "Dedicated Account Pods",
    description:
      "One account manager, one delivery lead, one sourcing team — the same people who know your stack, culture, and hiring bar.",
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery & Intake",
    description:
      "We meet your hiring managers to capture the role scope, must-have skills, team dynamics, and success criteria.",
  },
  {
    step: "02",
    title: "Targeted Sourcing",
    description:
      "Our recruiters tap an active database of 120K+ professionals plus referral and community networks to build a calibrated slate.",
  },
  {
    step: "03",
    title: "Vetting & Assessment",
    description:
      "Technical screening, structured behavioral interviews, reference checks, and background verification before submittal.",
  },
  {
    step: "04",
    title: "Submittal & Interviews",
    description:
      "You receive a shortlist with scorecards. We coordinate scheduling, feedback loops, and interview logistics.",
  },
  {
    step: "05",
    title: "Onboarding & Compliance",
    description:
      "Offer management, background checks, I-9/E-Verify, equipment coordination, and day-one readiness.",
  },
  {
    step: "06",
    title: "Aftercare & QBRs",
    description:
      "Check-ins at day 7, 30 and 90, plus quarterly business reviews on fill rate, retention, and cost efficiency.",
  },
];

export const testimonials = [
  {
    quote:
      "SkillForce filled three senior cloud roles in under two weeks after our previous vendor spent two months on the same reqs. Their intake process is genuinely different.",
    name: "Director of Engineering",
    company: "Healthcare SaaS, Atlanta",
  },
  {
    quote:
      "The augmentation pod plugged straight into our sprints. No ramp drag, no babysitting — they were shipping in week one.",
    name: "VP, Technology",
    company: "National Retail Group",
  },
  {
    quote:
      "Transparent markups and clean compliance paperwork. Our procurement team approved them as a preferred supplier within a quarter.",
    name: "Head of Talent Acquisition",
    company: "Financial Services Firm",
  },
];

export const faqs = [
  {
    q: "How quickly can you submit qualified candidates?",
    a: "For most roles we deliver the first qualified submittals within 48 hours of intake. Niche or cleared roles typically take 3-5 business days.",
  },
  {
    q: "What engagement models do you support?",
    a: "Contract, contract-to-hire, direct hire, payrolling/employer of record, and fully managed delivery pods. We support W2, 1099, and C2C arrangements.",
  },
  {
    q: "Do you work with MSP/VMS programs?",
    a: "Yes. We are experienced with Fieldglass, Beeline, Coupa, and similar platforms, and can operate as a tier-1 or subcontracted supplier.",
  },
  {
    q: "What is your replacement guarantee?",
    a: "Contract placements carry a 30-day replacement guarantee; direct hire placements carry 90 days. Replacements are at no additional fee.",
  },
  {
    q: "How do you handle compliance and background checks?",
    a: "Our operations team manages I-9, E-Verify, drug screening, criminal background checks, multi-state payroll tax, workers' compensation, and client-specific requirements.",
  },
  {
    q: "Do you support offshore or nearshore delivery?",
    a: "Yes. Our India delivery center provides cost-effective engineering, QA, and support capacity that blends with your onshore team.",
  },
];
