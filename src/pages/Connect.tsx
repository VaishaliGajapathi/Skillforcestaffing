import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Building2,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { FadeIn, PageHero } from "@/components/Section";
import { SITE } from "@/config/site";
import { cn } from "@/lib/utils";

type Tab = "candidate" | "employer";

const talentPoints = [
  "One profile, matched against every new requisition",
  "Recruiters who specialize in your technology stack",
  "Transparent rates and honest feedback after every submittal",
  "W2 benefits, weekly pay, and a dedicated career manager",
];

const employerPoints = [
  "Qualified submittals within 48 hours of intake",
  "30-day contract / 90-day direct hire replacement guarantee",
  "MSP, VMS, and procurement-ready compliance documentation",
  "Flexible models: contract, C2H, direct hire, or managed pods",
];

export default function Connect() {
  const { hash } = useLocation();
  const [tab, setTab] = useState<Tab>("candidate");

  useEffect(() => {
    if (hash === "#employer") setTab("employer");
    if (hash === "#candidate") setTab("candidate");
  }, [hash]);

  const isEmployer = tab === "employer";

  return (
    <>
      <PageHero
        eyebrow="Connect With Us"
        title="Let's start a"
        highlight="conversation"
        description="Whether you're looking for your next role or building a team, share your details and the right specialist will reach out — usually the same business day."
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          {/* Left panel */}
          <FadeIn className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 className="heading-2 text-[30px] md:text-[34px]">
                {isEmployer ? "Hire vetted talent, fast" : "Get matched to real openings"}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                {isEmployer
                  ? "Tell us the roles, the stack, and the timeline. An account director will run a structured intake and have a calibrated shortlist moving within 48 hours."
                  : "Submit your profile once. Our recruiters review every submission and match you against live requisitions across our client base — no spam, no resume black holes."}
              </p>

              <ul className="mt-8 space-y-3">
                {(isEmployer ? employerPoints : talentPoints).map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-3">
                {[
                  { icon: Phone, label: "Call us", value: SITE.phone, href: SITE.phoneHref },
                  {
                    icon: Mail,
                    label: "Email us",
                    value: SITE.email,
                    href: `mailto:${SITE.email}?subject=${
                      isEmployer ? "Talent%20Request" : "Candidate%20Enquiry"
                    }%20-%20SkillForce%20Staffing`,
                  },
                  { icon: Clock, label: "Hours", value: SITE.hours },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10">
                      <item.icon className="h-4 w-4 text-brand" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-semibold text-navy-900 hover:text-brand"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-navy-900">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-xl bg-navy-950 p-5 text-sm text-slate-300">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                Your information is used solely to evaluate opportunities with {SITE.name}. We never
                sell or share candidate data.
              </div>
            </div>
          </FadeIn>

          {/* Form panel */}
          <FadeIn delay={0.08} className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl md:p-10">
              <div className="mb-8 grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1.5">
                {(
                  [
                    { key: "candidate", label: "I'm looking for a job", icon: UserRound },
                    { key: "employer", label: "I'm hiring talent", icon: Building2 },
                  ] as const
                ).map((option) => (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => setTab(option.key)}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all",
                      tab === option.key
                        ? "bg-white text-navy-950 shadow-sm"
                        : "text-slate-500 hover:text-navy-800"
                    )}
                  >
                    <option.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{option.label}</span>
                    <span className="sm:hidden">
                      {option.key === "candidate" ? "Job Seeker" : "Employer"}
                    </span>
                  </button>
                ))}
              </div>

              <LeadForm key={tab} variant={tab} />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
