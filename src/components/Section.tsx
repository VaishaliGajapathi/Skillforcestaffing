import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      <div className="grid-pattern absolute inset-0" />
      <div className="container-page relative py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="heading-1">
            {title} {highlight && <span className="text-gradient">{highlight}</span>}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">{description}</p>
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={cn("mb-12 max-w-3xl", align === "center" && "mx-auto text-center")}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={cn("heading-2", light && "text-white")}>{title}</h2>
      {description && (
        <p className={cn("mt-4 text-lg leading-relaxed", light ? "text-slate-300" : "text-slate-600")}>
          {description}
        </p>
      )}
    </div>
  );
}

export function CTABand({
  title = "Ready to build your team?",
  description = "Tell us what you need and we will have qualified profiles in your inbox within 48 hours.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20">
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-navy-600/30 blur-3xl" />
      <div className="container-page relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-slate-300">{description}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/connect#employer">
            <Button size="lg">
              Hire Talent
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/careers">
            <Button size="lg" variant="white">
              Browse Open Roles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
