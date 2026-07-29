import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Linkedin, Mail, Phone, X } from "lucide-react";
import { SITE } from "@/config/site";
import type { LeadType } from "@/lib/leads";

interface SuccessModalProps {
  open: boolean;
  name: string;
  variant: LeadType;
  onClose: () => void;
}

const copy: Record<LeadType, { title: string; body: string }> = {
  candidate: {
    title: "Profile received",
    body: "A recruiter will review your profile and reach out within one business day with matching roles.",
  },
  "job-application": {
    title: "Application submitted",
    body: "Our recruiting team is reviewing your application. If there is a fit, we will contact you within 1-2 business days.",
  },
  employer: {
    title: "Request received",
    body: "An account director will contact you within 4 business hours to schedule an intake call.",
  },
  contact: {
    title: "Message sent",
    body: "Thanks for reaching out. Our team will respond within one business day.",
  },
};

export function SuccessModal({ open, name, variant, onClose }: SuccessModalProps) {
  const content = copy[variant];
  const firstName = name.split(" ")[0] || "there";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 16 }}
            transition={{ type: "spring", duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 px-6 py-8 text-center text-white">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.12, type: "spring" }}
                className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg"
              >
                <CheckCircle2 className="h-9 w-9 text-brand" strokeWidth={2.4} />
              </motion.div>
              <h3 className="font-display text-xl font-bold">
                {content.title}, {firstName}!
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-slate-300">{content.body}</p>
            </div>

            <div className="space-y-3 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Need us sooner?
              </p>
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-navy-900 transition-colors hover:border-brand hover:bg-brand-50"
              >
                <Phone className="h-4 w-4 text-brand" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-navy-900 transition-colors hover:border-brand hover:bg-brand-50"
              >
                <Mail className="h-4 w-4 text-brand" />
                {SITE.email}
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-navy-900 transition-colors hover:border-brand hover:bg-brand-50"
              >
                <Linkedin className="h-4 w-4 text-brand" />
                Follow us for new openings
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full pt-2 text-center text-xs text-slate-500 transition-colors hover:text-navy-800"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
