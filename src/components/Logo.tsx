import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  showTagline?: boolean;
}

/**
 * SkillForce Staffing lockup: circular "people" swoosh mark + SF wordmark.
 * Drop the official PNG at /public/logo.png to swap this SVG for the raster file.
 */
export function Logo({ className, variant = "dark", showTagline = false }: LogoProps) {
  const navy = variant === "dark" ? "#122040" : "#FFFFFF";
  const grey = variant === "dark" ? "#9AA3B2" : "#C9D1DE";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 64 64" className="h-10 w-10 shrink-0" aria-hidden="true">
        <path
          d="M52 14A26 26 0 0 0 10 22"
          fill="none"
          stroke={navy}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M12 42a26 26 0 0 0 42 8"
          fill="none"
          stroke="#F26522"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="19" cy="18" r="4" fill={navy} />
        <path d="M19 24c-6 2-9 9-8 18 4-8 8-11 13-12-3-2-4-4-5-6Z" fill={navy} />
        <circle cx="26" cy="28" r="3.4" fill="#F26522" />
        <path d="M26 33c-5 2-7 8-6 15 3-7 6-9 10-10-2-2-3-3-4-5Z" fill="#F26522" />
        <circle cx="32" cy="37" r="2.8" fill={grey} />
        <path d="M32 41c-4 2-5 6-4 11 2-5 5-7 8-8-2-1-3-2-4-3Z" fill={grey} />
        <text
          x="34"
          y="43"
          fontFamily="Sora, Inter, sans-serif"
          fontSize="30"
          fontWeight="800"
          fill={navy}
        >
          S
        </text>
        <text
          x="44"
          y="52"
          fontFamily="Sora, Inter, sans-serif"
          fontSize="30"
          fontWeight="800"
          fill="#F26522"
        >
          F
        </text>
      </svg>

      <div className="leading-none">
        <div className="font-display text-[19px] font-extrabold tracking-tight">
          <span style={{ color: navy }}>SKILL</span>
          <span className="text-brand">FORCE</span>
        </div>
        <div
          className="mt-0.5 text-[9.5px] font-semibold uppercase tracking-[0.34em]"
          style={{ color: variant === "dark" ? "#64748B" : "#C9D1DE" }}
        >
          Staffing
        </div>
        {showTagline && (
          <div
            className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.14em]"
            style={{ color: variant === "dark" ? "#94A3B8" : "#9FB0C6" }}
          >
            Right People. Right Skills. Right Time.
          </div>
        )}
      </div>
    </div>
  );
}
