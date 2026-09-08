# ForeShift — marketing landing page

React + Vite landing page for **ForeShift**, a zone demand forecasting service for
independent restaurant, bar, and cafe operators. Detroit is the launch market.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # serve the production build
```

## Structure

```
src/
  data.js               zones, concept types, demand bands, FAQ, contact details
  router.jsx            tiny hash router + light/dark theme hook
  styles.css            design tokens and all styling
  components/
    Nav.jsx  Footer.jsx  WeekGrid.jsx
  pages/
    Landing.jsx   the marketing page
    Policies.jsx  fulfillment, refunds & cancellation
    Privacy.jsx   privacy policy
    Terms.jsx     terms of service
    Security.jsx  payments & security (PCI, HTTPS, cards accepted)
    Contact.jsx   customer service contact options
```

Routing is hash-based (`#/privacy`, `#/#pricing`) so the build deploys as static
files anywhere without server rewrite rules.

## Design

- Navy/blue theme; light and dark both supported (toggle in the nav, remembered in
  `localStorage`, defaults to the OS setting).
- The demand-band scale is the color system, ramping calm → intense:
  Minimal · Light · Moderate · High · Peak · Exceptional. Band tokens are defined
  once per theme in `styles.css` and used everywhere.
- The week grid is the hero visual. On screens under 720px it transposes — days down,
  dayparts across — so the whole week still fits on a phone without scrolling.

## Stripe website checklist coverage

Built against <https://docs.stripe.com/get-started/checklist/website>.

| Checklist item | Where |
| --- | --- |
| Description of what you're selling | Landing hero, "How it works", "What you see", Pricing; itemized in Policies §1 |
| The purchase currency | USD stated on Pricing, in every pricing card, the footer, Policies §2, Security, and FAQ |
| Customer service contact information | Contact page (support email, sales email, phone, hours, live chat), plus footer, security section, and every legal page — direct channels, not a form |
| Fulfillment policies — refund | Policies §5 |
| Fulfillment policies — delivery | Policies §3 (digital delivery; explicitly states no shipping applies) |
| Fulfillment policies — cancellation | Policies §4, restated in Terms §4 |
| Legal or export restrictions | Policies §6 (`#/policies#restrictions`), Terms §11 |
| Privacy policy | `#/privacy`, linked from the footer, the waitlist form, and the nav-level pages |
| Business address | Footer, Contact page, Policies, Privacy, Terms |
| Terms of any promotions | Pricing section disclaimer + Terms §5 — no promotion is currently offered, and the disclosure rule is stated |
| Website and payment security | Security page (`#/security`) + the "Payments & security" section: Stripe, PCI DSS, HTTPS/HSTS, card-testing prevention, "card details never touch our servers" |
| Credit card logos accepted | "Cards accepted" row in the security section and on the Security page |

## Before going live — required fill-ins

Nothing on this site invents facts. Every unknown is marked `[TBD]` in the UI:

- `src/data.js` → `CONTACT`: real **phone number** and **street address**
  (Stripe expects a reachable phone number and a physical address).
- Legal entity name (Privacy, Terms), effective dates, statement descriptor,
  governing-law venue, subprocessor list, cookie inventory.
- **Pricing**: replace the `[Pricing TBD]` badges with real USD amounts, and wire the
  "Request access" CTAs to Stripe Checkout.
- The waitlist form currently confirms in the browser only — connect it to a real
  endpoint (`WaitlistForm` in `src/pages/Landing.jsx`).
- Have counsel review Privacy, Terms, and Policies; then remove the "Pre-launch note"
  callouts at the top of those pages.
- Serve over HTTPS with HSTS — the Security page states both.

No accuracy figures, ROI claims, customer counts, testimonials, or logos appear
anywhere, and no model internals (formulas, coefficients, thresholds, proximity
distances) are published. Band *names* only.
# foreshift-landing
