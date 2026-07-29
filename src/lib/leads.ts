import { GOOGLE_SHEETS_URL } from "@/config/site";

export type LeadType = "candidate" | "employer" | "contact" | "job-application";

export interface LeadPayload {
  leadType: LeadType;
  name: string;
  email: string;
  phone: string;
  company?: string;
  jobTitle?: string;
  role?: string;
  skills?: string;
  experience?: string;
  workAuth?: string;
  location?: string;
  hiringNeed?: string;
  resumeLink?: string;
  message?: string;
}

/**
 * Sends a lead to the Google Apps Script web app, which appends a row to the
 * Google Sheet. Uses `no-cors` + urlencoded body so no CORS setup is required
 * on the Apps Script side (response is opaque, so we treat non-throw as success).
 */
export async function submitLead(payload: LeadPayload): Promise<void> {
  if (!GOOGLE_SHEETS_URL) {
    throw new Error(
      "Lead endpoint is not configured. Set VITE_GOOGLE_SHEETS_URL in your .env file."
    );
  }

  const params = new URLSearchParams({
    source: "skillforcestaffing.com",
    submittedAt: new Date().toISOString(),
    pageUrl: typeof window !== "undefined" ? window.location.href : "",
  });

  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.append(key, String(value));
    }
  });

  await fetch(GOOGLE_SHEETS_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });
}

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
