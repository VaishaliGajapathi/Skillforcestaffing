import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input, Label, RadioCard, Select, Textarea } from "@/components/ui/field";
import { SuccessModal } from "@/components/SuccessModal";
import { COUNTRY_CODES, DEFAULT_COUNTRY_ID, SITE } from "@/config/site";
import { emailRegex, submitLead } from "@/lib/leads";
import type { LeadType } from "@/lib/leads";

interface LeadFormProps {
  variant: LeadType;
  jobTitle?: string;
  compact?: boolean;
}

const initialState = {
  name: "",
  email: "",
  countryId: DEFAULT_COUNTRY_ID as string,
  phone: "",
  company: "",
  role: "",
  skills: "",
  experience: "3-5",
  workAuth: "Indian Citizen",
  location: "",
  hiringNeed: "1-3 roles",
  resumeLink: "",
  message: "",
};

const experienceOptions = ["0-2", "3-5", "6-9", "10+"];
const workAuthOptions = [
  "Indian Citizen",
  "India — Work Permit / Visa Holder",
  "US Citizen",
  "Green Card",
  "H1-B",
  "H4-EAD",
  "OPT / CPT",
  "UK / EU Work Permit",
  "UAE Work Visa",
  "Other",
];
const hiringNeedOptions = ["1-3 roles", "4-10 roles", "10+ roles", "Managed team / pod", "Not sure yet"];

export function LeadForm({ variant, jobTitle, compact }: LeadFormProps) {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const country = useMemo(
    () => COUNTRY_CODES.find((c) => c.id === form.countryId) ?? COUNTRY_CODES[0],
    [form.countryId]
  );

  const isTalent = variant === "candidate" || variant === "job-application";
  const isEmployer = variant === "employer";

  const set = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.name.trim()) return toast.error("Please enter your full name");
    if (!emailRegex.test(form.email.trim())) return toast.error("Please enter a valid email address");

    const digits = form.phone.replace(/\D/g, "");
    if (digits.length !== country.digits) {
      return toast.error(`Phone number must be ${country.digits} digits for ${country.country}`);
    }
    if (isEmployer && !form.company.trim()) return toast.error("Please enter your company name");

    setSubmitting(true);
    try {
      await submitLead({
        leadType: variant,
        name: form.name.trim(),
        email: form.email.trim(),
        phone: `${country.code} ${digits}`,
        company: form.company.trim(),
        jobTitle: jobTitle ?? "",
        role: form.role.trim(),
        skills: isTalent ? form.skills.trim() : "",
        experience: isTalent ? `${form.experience} years` : "",
        workAuth: isTalent ? form.workAuth : "",
        location: form.location.trim(),
        hiringNeed: isEmployer ? form.hiringNeed : "",
        resumeLink: isTalent ? form.resumeLink.trim() : "",
        message: form.message.trim(),
      });

      setSubmittedName(form.name.trim());
      setForm(initialState);
      setSuccess(true);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Submission failed. Please email us instead."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        {jobTitle && (
          <div className="rounded-lg border border-brand-200 bg-brand-50 px-4 py-3 text-sm">
            <span className="text-slate-600">Applying for </span>
            <span className="font-semibold text-navy-900">{jobTitle}</span>
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor={`${variant}-name`} required>
              Full Name
            </Label>
            <Input
              id={`${variant}-name`}
              autoComplete="name"
              placeholder="Jordan Michelle"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor={`${variant}-email`} required>
              Work Email
            </Label>
            <Input
              id={`${variant}-email`}
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor={`${variant}-phone`} required>
              Phone Number
            </Label>
            <div className="flex gap-2">
              <Select
                aria-label="Country code"
                className="w-[112px] shrink-0"
                value={form.countryId}
                onChange={(e) => setForm((p) => ({ ...p, countryId: e.target.value, phone: "" }))}
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.flag} {c.code}
                  </option>
                ))}
              </Select>
              <Input
                id={`${variant}-phone`}
                type="tel"
                inputMode="numeric"
                maxLength={country.digits}
                placeholder={`${country.digits}-digit number`}
                value={form.phone}
                onChange={(e) =>
                  set("phone", e.target.value.replace(/\D/g, "").slice(0, country.digits))
                }
                required
              />
            </div>
          </div>

          {isEmployer ? (
            <div>
              <Label htmlFor={`${variant}-company`} required>
                Company
              </Label>
              <Input
                id={`${variant}-company`}
                placeholder="Acme Corporation"
                value={form.company}
                onChange={(e) => set("company", e.target.value)}
                required
              />
            </div>
          ) : (
            <div>
              <Label htmlFor={`${variant}-location`}>Current Location</Label>
              <Input
                id={`${variant}-location`}
                placeholder="Hyderabad, India"
                value={form.location}
                onChange={(e) => set("location", e.target.value)}
              />
            </div>
          )}
        </div>

        {isTalent && (
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor={`${variant}-role`}>Target Role</Label>
                <Input
                  id={`${variant}-role`}
                  placeholder="Senior Data Engineer"
                  value={form.role}
                  onChange={(e) => set("role", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor={`${variant}-auth`}>Work Authorization</Label>
                <Select
                  id={`${variant}-auth`}
                  value={form.workAuth}
                  onChange={(e) => set("workAuth", e.target.value)}
                >
                  {workAuthOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor={`${variant}-skills`}>Primary Skills</Label>
              <Input
                id={`${variant}-skills`}
                placeholder="AWS, Terraform, Kubernetes, Python"
                value={form.skills}
                onChange={(e) => set("skills", e.target.value)}
              />
            </div>

            <div>
              <Label>Years of Experience</Label>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {experienceOptions.map((opt) => (
                  <RadioCard
                    key={opt}
                    name={`${variant}-experience`}
                    value={opt}
                    label={`${opt} yrs`}
                    checked={form.experience === opt}
                    onChange={() => set("experience", opt)}
                  />
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor={`${variant}-resume`}>Resume Link</Label>
              <Input
                id={`${variant}-resume`}
                type="url"
                placeholder="Google Drive, Dropbox, or LinkedIn profile URL"
                value={form.resumeLink}
                onChange={(e) => set("resumeLink", e.target.value)}
              />
              <p className="mt-1.5 text-xs text-slate-500">
                Prefer to attach a file? Email it to {SITE.email} after submitting.
              </p>
            </div>
          </>
        )}

        {isEmployer && (
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor={`${variant}-role`}>Roles You're Hiring For</Label>
                <Input
                  id={`${variant}-role`}
                  placeholder="Salesforce Developer, DevOps Engineer"
                  value={form.role}
                  onChange={(e) => set("role", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor={`${variant}-need`}>Hiring Volume</Label>
                <Select
                  id={`${variant}-need`}
                  value={form.hiringNeed}
                  onChange={(e) => set("hiringNeed", e.target.value)}
                >
                  {hiringNeedOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor={`${variant}-loc`}>Work Location</Label>
              <Input
                id={`${variant}-loc`}
                placeholder="Bengaluru / Hyderabad / Remote (India)"
                value={form.location}
                onChange={(e) => set("location", e.target.value)}
              />
            </div>
          </>
        )}

        {variant === "contact" && (
          <div>
            <Label htmlFor={`${variant}-company`}>Company</Label>
            <Input
              id={`${variant}-company`}
              placeholder="Your company"
              value={form.company}
              onChange={(e) => set("company", e.target.value)}
            />
          </div>
        )}

        {!compact && (
          <div>
            <Label htmlFor={`${variant}-message`}>
              {isEmployer ? "Tell us about your hiring needs" : "Anything else we should know?"}
            </Label>
            <Textarea
              id={`${variant}-message`}
              placeholder={
                isEmployer
                  ? "Team size, tech stack, start date, budget range..."
                  : "Notice period, rate expectations, preferred locations..."
              }
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
            />
          </div>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              {isEmployer
                ? "Request Talent"
                : variant === "contact"
                  ? "Send Message"
                  : "Submit My Profile"}
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>

        <p className="text-center text-xs leading-relaxed text-slate-500">
          By submitting, you agree that SkillForce Staffing may contact you about
          opportunities and services. We never share your details with third parties.
        </p>
      </form>

      <SuccessModal
        open={success}
        name={submittedName}
        variant={variant}
        onClose={() => setSuccess(false)}
      />
    </>
  );
}
