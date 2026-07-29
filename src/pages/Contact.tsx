import { Link } from "react-router-dom";
import { Building2, Clock, Globe, Linkedin, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { FadeIn, PageHero } from "@/components/Section";
import { SITE } from "@/config/site";

const contactCards = [
  { icon: Mail, label: "General", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Building2, label: "New Business", value: SITE.salesEmail, href: `mailto:${SITE.salesEmail}` },
  { icon: UserRound, label: "Careers", value: SITE.careersEmail, href: `mailto:${SITE.careersEmail}` },
  { icon: Phone, label: "Phone", value: SITE.phone, href: SITE.phoneHref },
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in"
        highlight="touch"
        description="Talk to our team about workforce planning, an urgent requisition, supplier onboarding, or a role you're interested in. We respond within one business day."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-navy-950">Send us a message</h2>
            <p className="mb-8 mt-2 text-slate-600">
              Fill out the form and the right person will get back to you — no call centers, no
              generic autoresponders.
            </p>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">
              <LeadForm variant="contact" />
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-950">
                Contact information
              </h2>
              <p className="mt-2 text-slate-600">
                Reach the right team directly, or use the form and we'll route it internally.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactCards.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="card flex items-start gap-4 p-5 hover:border-brand hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                    <c.icon className="h-5 w-5 text-brand" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">{c.label}</p>
                    <p className="truncate text-sm font-semibold text-navy-900">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="card p-6">
              <h3 className="font-display text-lg font-bold text-navy-950">Offices</h3>
              <div className="mt-4 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <div>
                    <p className="font-semibold text-navy-900">Headquarters</p>
                    <p className="text-slate-600">{SITE.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <div>
                    <p className="font-semibold text-navy-900">Delivery Center</p>
                    <p className="text-slate-600">{SITE.offshore}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <div>
                    <p className="font-semibold text-navy-900">Business Hours</p>
                    <p className="text-slate-600">{SITE.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-navy-950 p-7 text-white">
              <h3 className="font-display text-lg font-bold">Looking for something specific?</h3>
              <div className="mt-4 space-y-3 text-sm">
                <Link
                  to="/connect#employer"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
                >
                  Request talent for an open role
                  <Building2 className="h-4 w-4 text-brand" />
                </Link>
                <Link
                  to="/careers"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
                >
                  Browse current job openings
                  <UserRound className="h-4 w-4 text-brand" />
                </Link>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
                >
                  Follow us on LinkedIn
                  <Linkedin className="h-4 w-4 text-brand" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
