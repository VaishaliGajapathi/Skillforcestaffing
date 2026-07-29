import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTABand, FadeIn, PageHero, SectionHeading } from "@/components/Section";
import { faqs, industries, practices, process, services } from "@/data/content";

const engagementModels = [
  {
    name: "Contract",
    best: "Project surges, backfills, seasonal capacity",
    duration: "3 – 18 months",
    billing: "Hourly, weekly invoicing",
  },
  {
    name: "Contract-to-Hire",
    best: "Try-before-you-hire for critical roles",
    duration: "3 – 6 months, then convert",
    billing: "Hourly, no conversion fee after term",
  },
  {
    name: "Direct Hire",
    best: "Permanent and leadership hires",
    duration: "Permanent",
    billing: "One-time placement fee",
  },
  {
    name: "Managed Pod",
    best: "Owned workstreams and outcomes",
    duration: "6 – 24 months",
    billing: "Fixed monthly per pod",
  },
];

export default function WhatWeDo() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Staffing and staff augmentation"
        highlight="engineered for delivery"
        description="We combine specialist recruiting, rigorous vetting, and airtight compliance so your teams get the right people — fast, and without operational drag."
      >
        <Link to="/connect#employer">
          <Button size="lg">
            Request Talent <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
        <Link to="/contact">
          <Button size="lg" variant="outline">
            Talk to an Account Director
          </Button>
        </Link>
      </PageHero>

      {/* Services detail */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page space-y-6">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.04}>
              <article
                id={service.id}
                className="card scroll-mt-28 p-8 hover:border-brand hover:shadow-lg md:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950">
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-navy-950">
                      {service.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-slate-600">{service.summary}</p>
                    <Link
                      to="/connect#employer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-700"
                    >
                      Start an intake call <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {service.bullets.map((b) => (
                        <div
                          key={b}
                          className="flex items-start gap-2.5 rounded-xl bg-slate-50 p-4 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Engagement models table */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Engagement Models"
            title="Pick the model that fits the work"
            description="Mix and match across requisitions — most clients run contract and direct hire side by side."
          />
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="hidden grid-cols-4 gap-px bg-slate-200 md:grid">
              {["Model", "Best for", "Typical duration", "Commercials"].map((h) => (
                <div
                  key={h}
                  className="bg-navy-950 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white"
                >
                  {h}
                </div>
              ))}
            </div>
            {engagementModels.map((m) => (
              <div
                key={m.name}
                className="grid gap-2 border-t border-slate-100 p-6 md:grid-cols-4 md:gap-6 md:px-6 md:py-5"
              >
                <p className="font-display font-bold text-navy-950">{m.name}</p>
                <p className="text-sm text-slate-600">{m.best}</p>
                <p className="text-sm text-slate-600">{m.duration}</p>
                <p className="text-sm text-slate-600">{m.billing}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Practice Areas"
            title="Roles we fill every week"
            align="center"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {practices.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.04}>
                <div className="card h-full p-6 hover:border-brand hover:shadow-md">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10">
                    <p.icon className="h-5 w-5 text-brand" />
                  </div>
                  <h3 className="font-display text-base font-bold text-navy-950">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.roles}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy-950 py-20 text-white md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Delivery Process"
            title="How an engagement runs"
            description="Structured, measurable, and visible to your hiring managers at every checkpoint."
            light
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {process.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7">
                  <span className="font-display text-4xl font-extrabold text-brand/50">
                    {s.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Industries" title="Where we deliver" align="center" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <FadeIn key={ind.name} delay={i * 0.04}>
                <div className="card flex h-full items-center gap-4 p-5">
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

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Common questions" align="center" />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 0.04}>
                <details className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 open:bg-white open:shadow-md">
                  <summary className="cursor-pointer list-none font-display text-[17px] font-bold text-navy-950 marker:hidden">
                    {faq.q}
                  </summary>
                  <p className="mt-3 leading-relaxed text-slate-600">{faq.a}</p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
