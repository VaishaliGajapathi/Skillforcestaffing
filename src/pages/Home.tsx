import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  Clock,
  MapPin,
  Quote,
  Search,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTABand, FadeIn, SectionHeading } from "@/components/Section";
import {
  differentiators,
  industries,
  practices,
  process,
  services,
  stats,
  testimonials,
} from "@/data/content";
import { jobs } from "@/data/jobs";
import { SITE } from "@/config/site";

const clientLogos = [
  "Healthcare Systems",
  "Global Retail Group",
  "FinServ Partners",
  "MedTech Labs",
  "LogiChain",
  "CloudScale SaaS",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50/40">
        <div className="grid-pattern absolute inset-0" />
        <div className="absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute -bottom-48 -left-32 h-[480px] w-[480px] rounded-full bg-navy-500/10 blur-3xl" />

        <div className="container-page relative py-20 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-navy-800 shadow-sm"
              >
                <span className="flex h-2 w-2 rounded-full bg-brand" />
                Now staffing across 30+ U.S. states
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="heading-1"
              >
                Right People.
                <br />
                Right Skills.
                <br />
                <span className="text-gradient">Right Time.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
              >
                {SITE.name} is an enterprise workforce partner delivering vetted contract,
                contract-to-hire, and direct placement talent — plus fully managed
                augmentation pods — across technology, data, cloud, and business functions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
                className="mt-9 flex flex-wrap gap-4"
              >
                <Link to="/connect#employer">
                  <Button size="lg">
                    Hire Talent
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/careers">
                  <Button size="lg" variant="outline">
                    <Search className="h-4 w-4" />
                    Find a Job
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32 }}
                className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-600"
              >
                <span className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <strong className="text-navy-900">4.9/5</strong> client rating
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> E-Verify Employer
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> MSP / VMS Ready
                </span>
              </motion.div>
            </div>

            {/* Requisition dashboard mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
                <div className="flex items-center gap-3 border-b border-navy-800 bg-navy-950 px-5 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-semibold text-white">
                    SkillForce Delivery Console
                  </span>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-white p-6">
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <h3 className="font-display font-bold text-navy-950">Active Requisitions</h3>
                      <p className="text-xs text-slate-500">Live pipeline health</p>
                    </div>
                    <span className="rounded-full bg-brand/10 px-3 py-1 text-[11px] font-bold text-brand">
                      LIVE
                    </span>
                  </div>

                  <div className="mb-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                        <Briefcase className="h-4 w-4 text-brand" /> Open Roles
                      </div>
                      <p className="text-2xl font-bold text-navy-950">128</p>
                      <p className="text-xs text-emerald-600">+22 this week</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                        <Clock className="h-4 w-4 text-brand" /> Avg. Time to Fill
                      </div>
                      <p className="text-2xl font-bold text-navy-950">11 days</p>
                      <p className="text-xs text-emerald-600">-38% vs. industry</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="mb-3 text-xs font-semibold text-slate-500">
                      Submittals by practice
                    </p>
                    <div className="space-y-2.5">
                      {[
                        { label: "Cloud & DevOps", value: 86 },
                        { label: "Data & AI", value: 72 },
                        { label: "Salesforce", value: 64 },
                        { label: "Cybersecurity", value: 48 },
                      ].map((row, i) => (
                        <div key={row.label}>
                          <div className="mb-1 flex justify-between text-[11px] text-slate-600">
                            <span>{row.label}</span>
                            <span className="font-semibold text-navy-900">{row.value}</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${row.value}%` }}
                              transition={{ delay: 0.5 + i * 0.12, duration: 0.7 }}
                              className="h-full rounded-full bg-gradient-to-r from-navy-700 to-brand"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute -left-6 -top-6 hidden items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xl sm:flex"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10">
                  <BadgeCheck className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Vetted candidates</p>
                  <p className="text-sm font-bold text-navy-950">120,000+</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 hidden items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xl sm:flex"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900/10">
                  <TrendingUp className="h-5 w-5 text-navy-900" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Fill rate</p>
                  <p className="text-sm font-bold text-navy-950">96%</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats */}
          <FadeIn delay={0.1}>
            <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white p-6 md:p-8">
                  <p className="font-display text-3xl font-extrabold text-navy-950 md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Client logos */}
      <section className="border-y border-slate-100 bg-white py-14">
        <div className="container-page">
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Trusted by enterprise talent teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="font-display text-lg font-bold text-slate-400 transition-colors hover:text-navy-800 md:text-xl"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                Workforce solutions built for
                <br className="hidden md:block" /> enterprise delivery
              </>
            }
            description="From a single specialist to a full delivery pod — flexible engagement models that fit how your teams actually work."
          />

          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.05} className="bg-white">
                <div className="group h-full p-8 transition-colors hover:bg-slate-50">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 transition-colors group-hover:bg-brand">
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.summary}</p>
                  <ul className="mt-5 space-y-2">
                    {service.bullets.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/what-we-do#${service.id}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-brand"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Talent Practices"
            title="Deep benches across the roles you hire most"
            description="Specialist recruiters per practice area — not generalists guessing at job descriptions."
            align="center"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {practices.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.04}>
                <div className="card h-full p-6 hover:-translate-y-1 hover:border-brand hover:shadow-lg">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10">
                    <p.icon className="h-5 w-5 text-brand" />
                  </div>
                  <h3 className="font-display text-base font-bold text-navy-950">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.roles}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-navy-950 py-20 text-white md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why SkillForce"
            title={
              <>
                Staffing without the guesswork,
                <br className="hidden md:block" /> the delays, or the surprises
              </>
            }
            description="We built our delivery model around the three things hiring managers complain about most: speed, quality, and transparency."
            light
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 transition-colors hover:bg-white/10">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Process"
            title="Six steps from intake to day one"
            description="A repeatable delivery process with checkpoints your hiring managers can actually see."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.05}>
                <div className="card h-full p-7 hover:border-brand hover:shadow-lg">
                  <span className="font-display text-4xl font-extrabold text-brand/25">
                    {step.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-navy-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured jobs */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Open Roles"
              title="Currently hiring"
              description="A snapshot of live requisitions across our client base."
            />
            <Link to="/careers" className="shrink-0">
              <Button variant="outline">
                View all roles
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {jobs.slice(0, 6).map((job, i) => (
              <FadeIn key={job.id} delay={i * 0.05}>
                <Link
                  to="/careers"
                  className="card group flex h-full flex-col p-6 hover:-translate-y-1 hover:border-brand hover:shadow-lg"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-navy-950 px-2.5 py-1 text-[11px] font-bold text-white">
                      {job.type}
                    </span>
                    <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-bold text-brand">
                      {job.workplace}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy-950 group-hover:text-brand">
                    {job.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {job.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5" /> {job.experience}
                    </span>
                    <span className="font-semibold text-navy-900">{job.rate}</span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries"
            title="Sector expertise that shortens ramp time"
            align="center"
            description="Our recruiters understand the compliance, tooling, and domain language of the industries we serve."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <FadeIn key={ind.name} delay={i * 0.04}>
                <div className="card flex h-full items-center gap-4 p-5 hover:border-brand hover:shadow-md">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950">
                    <ind.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-navy-900">{ind.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Client Feedback"
            title="What partners say about working with us"
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name + i} delay={i * 0.07}>
                <figure className="card h-full p-8">
                  <Quote className="h-8 w-8 text-brand/30" />
                  <blockquote className="mt-4 text-[15px] leading-relaxed text-slate-700">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-slate-100 pt-4">
                    <p className="text-sm font-bold text-navy-950">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.company}</p>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
