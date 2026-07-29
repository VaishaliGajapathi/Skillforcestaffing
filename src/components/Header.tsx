import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/about", label: "About Us" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-white/70 backdrop-blur-sm"
      )}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" aria-label={SITE.name}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors",
                  isActive
                    ? "text-brand"
                    : "text-navy-800 hover:bg-slate-100 hover:text-navy-950"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-brand"
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
          <Link to="/connect">
            <Button size="sm">Connect With Us</Button>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-navy-900 hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="container-page flex flex-col py-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-3 text-[15px] font-semibold",
                    isActive ? "bg-brand-50 text-brand" : "text-navy-900 hover:bg-slate-50"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/connect" className="mt-3">
              <Button className="w-full">Connect With Us</Button>
            </Link>
            <a
              href={SITE.phoneHref}
              className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-navy-800"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
