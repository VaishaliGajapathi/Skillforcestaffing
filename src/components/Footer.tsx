import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SITE } from "@/config/site";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "What We Do", to: "/what-we-do" },
      { label: "Careers", to: "/careers" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Contract Staffing", to: "/what-we-do#contract" },
      { label: "Staff Augmentation", to: "/what-we-do#augmentation" },
      { label: "Direct Hire", to: "/what-we-do#direct-hire" },
      { label: "Managed Teams", to: "/what-we-do#managed" },
    ],
  },
  {
    title: "For Talent",
    links: [
      { label: "Open Roles", to: "/careers" },
      { label: "Submit Your Resume", to: "/connect" },
      { label: "Connect With a Recruiter", to: "/connect" },
      { label: "Hire Talent", to: "/connect#employer" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-slate-300">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="light" showTagline />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
              {SITE.name} is a workforce solutions partner delivering vetted contract,
              contract-to-hire, and direct placement talent to enterprises across the U.S.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-brand">
                <Mail className="h-4 w-4 text-brand" />
                {SITE.email}
              </a>
              <a href={SITE.phoneHref} className="flex items-center gap-3 hover:text-brand">
                <Phone className="h-4 w-4 text-brand" />
                {SITE.phone}
              </a>
              <p className="flex items-center gap-3 text-slate-400">
                <MapPin className="h-4 w-4 text-brand" />
                {SITE.address}
              </p>
            </div>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white">
                  {col.title}
                </h3>
                <ul className="space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-slate-400 hover:text-brand">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            {SITE.domain} &middot; Equal Opportunity Employer &middot; E-Verify Participant
          </p>
        </div>
      </div>
    </footer>
  );
}
