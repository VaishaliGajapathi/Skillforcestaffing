import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  CalendarClock,
  ChevronDown,
  Clock,
  DollarSign,
  GraduationCap,
  HeartPulse,
  Laptop,
  MapPin,
  Search,
  Upload,
  Wallet,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Select } from "@/components/ui/field";
import { LeadForm } from "@/components/LeadForm";
import { CTABand, FadeIn, PageHero, SectionHeading } from "@/components/Section";
import { jobCategories, jobs } from "@/data/jobs";
import { cn } from "@/lib/utils";

const benefits = [
  { icon: HeartPulse, title: "Medical, Dental & Vision", text: "Day-one eligible plans for W2 contractors and full-time staff." },
  { icon: Wallet, title: "401(k) with Match", text: "Retirement savings with employer contribution after 90 days." },
  { icon: Clock, title: "Weekly Pay", text: "Direct deposit every Friday with transparent, on-time payroll." },
  { icon: Laptop, title: "Remote & Hybrid Roles", text: "Most assignments offer remote or hybrid flexibility." },
  { icon: GraduationCap, title: "Certification Support", text: "Reimbursement for cloud, Salesforce, and security certifications." },
  { icon: CalendarClock, title: "Dedicated Career Manager", text: "One point of contact from onboarding through your next assignment." },
];

export default function Careers() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All Roles");
  const [workplace, setWorkplace] = useState<string>("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [applyingTo, setApplyingTo] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      jobs.filter((job) => {
        const matchesQuery =
          !query ||
          [job.title, job.summary, job.location, job.category]
            .join(" ")
            .toLowerCase()
            .includes(query.toLowerCase());
        const matchesCategory = category === "All Roles" || job.category === category;
        const matchesWorkplace = workplace === "All" || job.workplace === workplace;
        return matchesQuery && matchesCategory && matchesWorkplace;
      }),
    [query, category, workplace]
  );

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Find your next"
        highlight="opportunity"
        description="Browse live contract, contract-to-hire, and full-time roles with our client partners. Don't see a fit? Submit your profile and a recruiter will match you as new roles open."
      >
        <a href="#openings">
          <Button size="lg">
            View Open Roles <ArrowRight className="h-4 w-4" />
          </Button>
        </a>
        <Link to="/connect">
          <Button size="lg" variant="outline">
            <Upload className="h-4 w-4" />
            Submit Your Profile
          </Button>
        </Link>
      </PageHero>

      {/* Benefits */}
      <section className="border-b border-slate-200 bg-white py-16">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.04}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-slate-200 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                    <b.icon className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-navy-950">{b.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{b.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="scroll-mt-24 bg-slate-50 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Open Positions"
            title="Current opportunities"
            description={`${jobs.length} live requisitions across our client base. Updated daily.`}
          />

          {/* Filters */}
          <div className="mb-8 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-[1fr_auto_auto]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                className="pl-10"
                placeholder="Search by title, skill, or location"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search roles"
              />
            </div>
            <Select
              className="md:w-56"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Filter by practice"
            >
              {jobCategories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </Select>
            <Select
              className="md:w-44"
              value={workplace}
              onChange={(e) => setWorkplace(e.target.value)}
              aria-label="Filter by workplace"
            >
              {["All", "Remote", "Hybrid", "Onsite"].map((w) => (
                <option key={w}>{w}</option>
              ))}
            </Select>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-14 text-center">
              <p className="font-display text-lg font-bold text-navy-950">No matching roles</p>
              <p className="mt-2 text-sm text-slate-600">
                Try a broader search — or submit your profile and we'll reach out when something
                fits.
              </p>
              <Link to="/connect" className="mt-6 inline-block">
                <Button>Submit Your Profile</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((job, i) => {
                const open = expanded === job.id;
                return (
                  <FadeIn key={job.id} delay={Math.min(i * 0.04, 0.2)}>
                    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors hover:border-brand">
                      <div className="p-6 md:p-8">
                        <div className="flex flex-col gap-6 md:flex-row md:items-start">
                          <div className="flex-1">
                            <div className="mb-3 flex flex-wrap items-center gap-2">
                              <span className="rounded-full bg-navy-950 px-2.5 py-1 text-[11px] font-bold text-white">
                                {job.type}
                              </span>
                              <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-bold text-brand">
                                {job.workplace}
                              </span>
                              <span className="text-[11px] font-medium text-slate-400">
                                Posted {job.posted} &middot; Req {job.id.toUpperCase()}
                              </span>
                            </div>
                            <h3 className="font-display text-xl font-bold text-navy-950 md:text-2xl">
                              {job.title}
                            </h3>
                            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
                              <span className="flex items-center gap-1.5">
                                <Briefcase className="h-4 w-4 text-slate-400" /> {job.category}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <MapPin className="h-4 w-4 text-slate-400" /> {job.location}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Clock className="h-4 w-4 text-slate-400" /> {job.experience}
                              </span>
                              <span className="flex items-center gap-1.5 font-semibold text-navy-900">
                                <DollarSign className="h-4 w-4 text-brand" /> {job.rate}
                              </span>
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-slate-600">
                              {job.summary}
                            </p>
                          </div>

                          <div className="flex shrink-0 gap-3">
                            <Button onClick={() => setApplyingTo(job.title)}>
                              Apply Now <ArrowRight className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => setExpanded(open ? null : job.id)}
                              aria-expanded={open}
                            >
                              Details
                              <ChevronDown
                                className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
                              />
                            </Button>
                          </div>
                        </div>

                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-7 grid gap-8 border-t border-slate-100 pt-7 md:grid-cols-2">
                                <div>
                                  <h4 className="mb-3 font-display font-bold text-navy-950">
                                    Key Responsibilities
                                  </h4>
                                  <ul className="space-y-2">
                                    {job.responsibilities.map((r) => (
                                      <li
                                        key={r}
                                        className="flex items-start gap-2.5 text-sm text-slate-600"
                                      >
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                                        {r}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="mb-3 font-display font-bold text-navy-950">
                                    Requirements
                                  </h4>
                                  <ul className="space-y-2">
                                    {job.requirements.map((r) => (
                                      <li
                                        key={r}
                                        className="flex items-start gap-2.5 text-sm text-slate-600"
                                      >
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-400" />
                                        {r}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <CTABand
        title="Don't see the right role?"
        description="Submit your profile once and our recruiters will match you against every new requisition."
      />

      {/* Apply drawer */}
      <AnimatePresence>
        {applyingTo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setApplyingTo(null)}
            className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-navy-950/60 p-4 py-10 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl md:p-10"
            >
              <button
                type="button"
                onClick={() => setApplyingTo(null)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
              >
                <X className="h-4 w-4" />
              </button>
              <h2 className="font-display text-2xl font-bold text-navy-950">Apply for this role</h2>
              <p className="mb-6 mt-1 text-sm text-slate-600">
                Takes under 60 seconds. A recruiter reviews every submission.
              </p>
              <LeadForm variant="job-application" jobTitle={applyingTo} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
