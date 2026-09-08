// Content constants for the ForeShift marketing site.
// No accuracy figures, customer counts, or ROI claims are asserted anywhere —
// where proof is needed the copy uses an explicit [TBD] placeholder.

export const BANDS = [
  { name: "Minimal", cls: "band-1" },
  { name: "Light", cls: "band-2" },
  { name: "Moderate", cls: "band-3" },
  { name: "High", cls: "band-4" },
  { name: "Peak", cls: "band-5" },
  { name: "Exceptional", cls: "band-6" },
];

export const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const DAYPARTS = [
  { label: "Morning", hours: "6–11a" },
  { label: "Midday", hours: "11a–4p" },
  { label: "Dinner", hours: "4–9p" },
  { label: "Late night", hours: "9p–2a" },
];

// Illustrative week view for the sample zone shown on the page.
// Values are indexes into BANDS and are for layout demonstration only.
export const SAMPLE_WEEK = [
  [1, 1, 1, 2, 2, 3, 3],
  [2, 2, 2, 2, 3, 4, 3],
  [2, 3, 3, 3, 4, 5, 3],
  [0, 1, 1, 2, 4, 5, 1],
];

export const ZONES = [
  "Woodward Core",
  "Downtown Detroit (Core)",
  "Foxtown / Stadium District",
  "Greektown / Casino District",
  "Financial District",
  "Midtown",
  "Corktown",
  "Eastern Market",
  "New Center / North End",
  "Riverfront / RiverWalk",
  "Mexicantown",
  "Core City / Woodbridge",
  "Southwest Detroit",
];

export const CONCEPTS = [
  "Fine Dining",
  "Upscale Casual",
  "Casual Dining",
  "Fast Casual",
  "Coffee Shop",
  "Breakfast / Brunch Cafe",
  "Sports Bar",
  "Cocktail Lounge",
  "Neighborhood / Casual Bar",
];

export const FAQS = [
  {
    q: "Is this a prediction of my restaurant's sales?",
    a: "No. ForeShift forecasts demand in your zone for your concept type — the size of the wave. What you capture of it depends on you: your menu, your service, your reputation, your team.",
  },
  {
    q: "Where does the data come from?",
    a: "ForeShift's Detroit demand model, plus live event and weather signals, plus what operators report about their actual nights. The model itself is proprietary and patent-pending.",
  },
  {
    q: "What if my address is on a zone border?",
    a: "ForeShift assigns you automatically from your geocoded address, and you can confirm or adjust the zone during onboarding.",
  },
  {
    q: "Which cities do you cover?",
    a: "Detroit today, across 13 zones. More markets are coming — join the waitlist for yours and we'll tell you when it opens.",
  },
  {
    q: "Do I need to integrate my POS?",
    a: "No. There is nothing to install and no integration to run. You enter your address and concept type, and you're set up.",
  },
  {
    q: "What exactly am I buying?",
    a: "Two things, separately. A demand report is a one-time purchase covering one zone. The AI Intelligence Pass is a monthly subscription — single zone or full city coverage — that you can cancel at any time. Pricing is [Pricing TBD]; all amounts will be charged in US Dollars (USD).",
  },
  {
    q: "How is my payment handled?",
    a: "Payments are processed by Stripe over an encrypted HTTPS connection. Card details go directly to Stripe and are never stored on ForeShift's servers. See our Payments & Security page for details.",
  },
];

export const CONTACT = {
  email: "support@foreshift.ai",
  sales: "hello@foreshift.ai",
  phone: "[TBD]",
  hours: "Monday–Friday, 9:00a–6:00p ET",
  address: ["ForeShift", "[Street address TBD]", "Detroit, MI [ZIP TBD]", "United States"],
};
