export const SITE = {
  name: "SkillForce Staffing",
  domain: "skillforcestaffing.com",
  tagline: "Right People. Right Skills. Right Time.",
  email: "info@skillforcestaffing.com",
  careersEmail: "careers@skillforcestaffing.com",
  salesEmail: "sales@skillforcestaffing.com",
  phone: "+1 (404) 579-2441",
  phoneHref: "tel:+14045792441",
  address: "Atlanta, Georgia, USA",
  offshore: "Hyderabad, India (Offshore Delivery Center)",
  hours: "Mon – Fri, 8:00 AM – 8:00 PM EST",
  linkedin: "https://www.linkedin.com/company/skillforcestaffing",
};

/**
 * Google Apps Script Web App endpoint that appends every lead to your Google Sheet.
 * Deploy `google-apps-script.gs` (repo root) as a Web App with:
 *   Execute as: Me  |  Who has access: Anyone
 * Then put the /exec URL in `.env` as VITE_GOOGLE_SHEETS_URL.
 */
export const GOOGLE_SHEETS_URL: string =
  import.meta.env.VITE_GOOGLE_SHEETS_URL ?? "";

export const COUNTRY_CODES = [
  { code: "+1", country: "US", flag: "\u{1F1FA}\u{1F1F8}", digits: 10 },
  { code: "+91", country: "IN", flag: "\u{1F1EE}\u{1F1F3}", digits: 10 },
  { code: "+44", country: "UK", flag: "\u{1F1EC}\u{1F1E7}", digits: 10 },
  { code: "+61", country: "AU", flag: "\u{1F1E6}\u{1F1FA}", digits: 9 },
  { code: "+1c", country: "CA", flag: "\u{1F1E8}\u{1F1E6}", digits: 10 },
  { code: "+971", country: "AE", flag: "\u{1F1E6}\u{1F1EA}", digits: 9 },
] as const;
