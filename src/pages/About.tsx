import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Compass,
  Eye,
  Globe2,
  HeartHandshake,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTABand, FadeIn, PageHero, SectionHeading } from "@/components/Section";
import { stats } from "@/data/content";
import { SITE } from "@/config/site";

const values = [
  {
    icon: Target,
    title: "Precision Over Volume",
    description:
      "We submit three well-matched candidates, not thirty resumes. Every profile is calibrated against your intake notes.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership Mindset",
    description:
      "We act as an extension of your talent function — sharing market data, salary benchmarks, and honest feedback.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Compliance",
    description:
      "Clean paperwork, verified credentials, and full adherence to employment law in every state we operate in.",
  },
  {
    icon: Sparkles,
    title: "People First",
    description:
      "Contractors get benefits, timely pay, and a real career manager. Treating talent well is what keeps retention high.",
  },
];

const milestones = [
  { year: "Foundation", title: "Built by staffing operators", text: "Founded by recruiting and delivery leaders who spent careers inside enterprise talent programs." },
  { year: "Model", title: "Dual-shore delivery", text: "U.S. account and recruiting leadership paired with an India-based sourcing and engineering center." },
  { year: "Focus", title: "Technology-first practices", text: "Specialist pods for cloud, data, AI, Salesforce, security, and enterprise applications." },
  { year: "Today", title: "Scaling nationwide", text: "Supporting contract, direct hire, RPO and managed pod engagements across 30+ states." },
];

const commitments = [
  "Equal Opportunity Employer — hiring without regard to race, color, religion, sex, national origin, age, disability, or veteran status",
  "E-Verify participating employer with full I-9 compliance",
  "Multi-state payroll, workers' compensation, and general liability coverage",
  "Contractor benefits including medical, dental, vision, and 401(k) options",
  "Data handled under strict candidate privacy and consent standards",
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A workforce partner that behaves like"
        highlight="part of your team"
        description={`${SITE.name} is a U.S.-based staffing and staff augmentation firm. We help enterprises and high-growth companies hire specialized talent faster — with the compliance, reporting, and accountability procurement teams expect.`}
      >
        <Link to="/contact">
          <Button size="lg">
            Talk to Us <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </PageHero>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white py-14">
        <div className="container-page grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-extrabold text-brand md:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <FadeIn>
            <span className="eyebrow">Our Story</span>
            <h2 className="heading-2">Staffing done the way we always wished vendors did it</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                {SITE.name} was founded on a simple frustration: hiring managers were drowning in
                unqualified resumes while great candidates sat unheard. We rebuilt the delivery
                model around intake depth, specialist recruiters, and disciplined vetting.
              </p>
              <p>
                Our U.S. team owns client strategy, account management, and offer negotiation. Our
                offshore delivery center in {SITE.offshore.split(" (")[0]} runs 24/5 sourcing,
                screening, and engineering capacity — which is how we hold competitive rates
                without cutting quality.
              </p>
              <p>
                The result is a partner that fills roles quickly, keeps contractors engaged through
                assignment, and gives your procurement team clean, auditable paperwork every time.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-navy-950 p-8 text-white">
                <Compass className="mb-4 h-7 w-7 text-brand" />
                <h3 className="font-display text-lg font-bold">Our Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Connect organizations with the right professionals at the right moment — with
                  speed, integrity, and measurable outcomes.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <Eye className="mb-4 h-7 w-7 text-brand" />
                <h3 className="font-display text-lg font-bold text-navy-950">Our Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  To be the most trusted workforce partner for companies scaling technology teams
                  in North America.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <Globe2 className="mb-4 h-7 w-7 text-brand" />
                <h3 className="font-display text-lg font-bold text-navy-950">Dual-Shore Model</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  U.S. leadership and client delivery, backed by an offshore sourcing and
                  engineering center for round-the-clock coverage.
                </p>
              </div>
              <div className="rounded-2xl bg-brand p-8 text-white">
                <Building2 className="mb-4 h-7 w-7" />
                <h3 className="font-display text-lg font-bold">Enterprise Ready</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  MSP/VMS experienced, insured, E-Verify enrolled, and set up for multi-state
                  contract workforce management.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Values"
            title="The principles behind every placement"
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.05}>
                <div className="card h-full p-8 hover:border-brand hover:shadow-lg">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                    <v.icon className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy-950">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="How We're Built" title="Our foundation" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <FadeIn key={m.title} delay={i * 0.05}>
                <div className="h-full border-t-4 border-brand bg-slate-50 p-7">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
                    {m.year}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-navy-950">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Compliance & Commitments</span>
            <h2 className="heading-2">Boring paperwork, done properly</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Procurement and legal teams approve us quickly because our compliance posture is
              documented, insured, and audit-ready from day one.
            </p>
            <Link to="/contact" className="mt-8 inline-block">
              <Button variant="secondary">
                Request our supplier packet <ScrollText className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <ul className="space-y-3">
            {commitments.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-700"
              >
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        title="Let's talk about your hiring roadmap"
        description="Whether it's one specialist or an entire delivery pod, we'll map a plan in a 30-minute call."
      />
    </>
  );
}
