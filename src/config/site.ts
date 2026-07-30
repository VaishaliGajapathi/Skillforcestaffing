export const SITE = {
  name: "SkillForce Staffing",
  domain: "skillforcestaffing.com",
  tagline: "Right People. Right Skills. Right Time.",
  email: "skillforcestaffing@gmail.com",
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

/** India first — it is our primary hiring market. `id` keeps entries unique (US/CA share +1). */
export const COUNTRY_CODES = [
  { id: "IN", code: "+91", country: "India", flag: "\u{1F1EE}\u{1F1F3}", digits: 10 },
  { id: "US", code: "+1", country: "USA", flag: "\u{1F1FA}\u{1F1F8}", digits: 10 },
  { id: "CA", code: "+1", country: "Canada", flag: "\u{1F1E8}\u{1F1E6}", digits: 10 },
  { id: "GB", code: "+44", country: "UK", flag: "\u{1F1EC}\u{1F1E7}", digits: 10 },
  { id: "AE", code: "+971", country: "UAE", flag: "\u{1F1E6}\u{1F1EA}", digits: 9 },
  { id: "AU", code: "+61", country: "Australia", flag: "\u{1F1E6}\u{1F1FA}", digits: 9 },
] as const;

export const DEFAULT_COUNTRY_ID = "IN";
