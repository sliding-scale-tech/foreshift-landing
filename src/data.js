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

// Pricing tiers. Amounts are in US Dollars (USD), billed monthly.
export const TIERS = [
  {
    name: "Event Intelligence",
    tagline: "Know your city.",
    price: "$99",
    period: "USD per month",
    featured: true,
    cta: { label: "Upgrade", href: "#/#access" },
    features: [
      "Weather forecast for the week",
      "Sports — all Detroit teams",
      "Concerts, tradeshows, festivals, 5Ks",
      "Demand signal per event for your zone",
      "Thirty seconds to start — zone and type only",
    ],
  },
  {
    name: "Dynamic Scheduling",
    tagline: "Know your schedule.",
    price: "$199",
    period: "USD per month",
    featured: false,
    cta: { label: "Contact Sales", href: "mailto:hello@foreshift.ai" },
    features: [
      "Everything in Tier 1",
      "Shift-level staffing recommendations",
      "Estimated covers per daypart",
      "Server and kitchen crew counts",
      "Revenue estimate per shift",
    ],
  },
  {
    name: "Sales Forecasting",
    tagline: "Know your numbers.",
    price: "$299",
    period: "USD per month",
    featured: false,
    cta: { label: "Contact Sales", href: "mailto:hello@foreshift.ai" },
    features: [
      "Everything in Tier 2",
      "Thirty-day forward revenue projection",
      "POS or CSV historical data upload",
      "Variance tracking: predicted vs actual",
      "Market intelligence for expansion",
    ],
  },
];

export const FAQS = [
  {
    q: "Is this a prediction of my restaurant's sales?",
    a: "Event Intelligence and Dynamic Scheduling forecast demand in your zone for your concept type — the size of the wave, not your covers. What you capture of it depends on you: your menu, your service, your reputation, your team. Sales Forecasting is the tier that projects your own numbers, and it does that from the historical data you upload.",
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
    a: "No. Event Intelligence and Dynamic Scheduling need nothing but your address and concept type — thirty seconds to start. Sales Forecasting works from a historical data upload, either a POS export or a CSV, but there is still no live integration to install.",
  },
  {
    q: "What exactly am I buying?",
    a: "A monthly subscription in one of three tiers: Event Intelligence at $99 per month, Dynamic Scheduling at $199 per month, or Sales Forecasting at $299 per month. All amounts are in US Dollars (USD). Each tier includes everything in the one below it, and you can cancel at any time.",
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
