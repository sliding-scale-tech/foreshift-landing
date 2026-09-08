import { CONTACT } from "../data.js";

export default function Policies() {
  return (
    <main className="wrap legal">
      <a className="backlink" href="#/">← Back to ForeShift</a>
      <h1>Fulfillment, refunds &amp; cancellation</h1>
      <p className="legal__meta">Last updated: [Effective date TBD]</p>

      <div className="legal__body">
        <div className="callout">
          <p className="mb0 small">
            <strong>Pre-launch note:</strong> ForeShift is preparing its launch market. Items marked
            <strong> [TBD]</strong> are being finalized and will be published in full before any customer is charged.
            This document should be reviewed by counsel before launch.
          </p>
        </div>

        <h2 id="what">1. What you are buying</h2>
        <p>
          ForeShift sells digital demand forecasting for restaurant, bar, and cafe operators, as a monthly subscription
          in one of three tiers. Each tier includes everything in the tier below it:
        </p>
        <ul>
          <li>
            <strong>Event Intelligence — 99 US Dollars (USD) per month.</strong> The week's weather forecast, Detroit
            sports, concerts, tradeshows, festivals and 5Ks, and a demand signal per event for your zone. Setup needs
            only your zone and concept type.
          </li>
          <li>
            <strong>Dynamic Scheduling — 199 US Dollars (USD) per month.</strong> Everything in Event Intelligence,
            plus shift-level staffing recommendations, estimated covers per daypart, server and kitchen crew counts,
            and a revenue estimate per shift.
          </li>
          <li>
            <strong>Sales Forecasting — 299 US Dollars (USD) per month.</strong> Everything in Dynamic Scheduling, plus
            a thirty-day forward revenue projection, POS or CSV historical data upload, variance tracking of predicted
            against actual, and market intelligence for expansion.
          </li>
        </ul>
        <p>
          ForeShift forecasts <strong>zone demand</strong> — demand for a concept type inside a defined city trade
          area at a given day and daypart. It does not forecast your individual venue's sales or covers.
        </p>

        <h2 id="pricing">2. Prices and currency</h2>
        <p>
          All prices are quoted, and all charges are made, in <strong>US Dollars (USD)</strong>. The exact amount,
          currency, and billing frequency are shown on the checkout page before you confirm payment. Current pricing is
          99, 199, or 299 USD per month depending on tier, renewing monthly until cancelled. Applicable taxes, if any,
          are shown at checkout. Your bank or card
          issuer may apply its own foreign transaction or conversion fees, which ForeShift does not control.
        </p>

        <h2 id="delivery">3. Delivery</h2>
        <p>
          ForeShift is a digital service. There is nothing to ship and no physical goods are sold, so no shipping policy
          applies.
        </p>
        <ul>
          <li>
            <strong>All tiers:</strong> access is granted in your account at{" "}
            <a href="https://app.foreshift.ai">app.foreshift.ai</a> immediately after your first payment is confirmed,
            normally within a few minutes, and continues for as long as the subscription is active. A receipt is emailed
            to the address on the order.
          </li>
          <li>
            <strong>Sales Forecasting:</strong> the forward revenue projection depends on the historical data you
            upload. Forecast access is available immediately; projections appear once your POS export or CSV is
            uploaded and processed.
          </li>
          <li>
            If you have paid and access has not appeared within 24 hours, email{" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> and we will resolve it or refund you in full.
          </li>
        </ul>

        <h2 id="cancellation">4. Cancellation</h2>
        <ul>
          <li>
            You may cancel your subscription at any time from your account settings, or by emailing{" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
          </li>
          <li>
            Cancellation stops the next renewal. Your access continues until the end of the billing period you have
            already paid for; it is not cut off on the day you cancel.
          </li>
          <li>
            There is no cancellation fee and no minimum term. Subscriptions renew monthly until you cancel.
          </li>
          <li>
            Moving to a lower tier takes effect at the next renewal. Moving to a higher tier takes effect immediately,
            and the difference is prorated for the remainder of the billing period.
          </li>
        </ul>

        <h2 id="refunds">5. Refunds</h2>
        <p>Because ForeShift sells a digital service delivered immediately, the following applies:</p>
        <ul>
          <li>
            <strong>Any tier:</strong> you may request a full refund of your most recent monthly charge within{" "}
            <strong>14 days</strong> of that charge. Earlier billing periods are not refundable.
          </li>
          <li>
            <strong>Service faults:</strong> if your forecast was unavailable, was set to the wrong zone or concept
            type, or is unusable because of a fault on our side, contact us and we will correct it or refund the
            affected billing period in full.
          </li>
          <li>
            <strong>Duplicate or accidental charges</strong> are refunded in full, without a time limit, as soon as we
            confirm them.
          </li>
          <li>
            A forecast turning out differently from the night you had is not on its own grounds for a refund. ForeShift
            forecasts zone demand; it does not guarantee your venue's results.
          </li>
        </ul>
        <p>
          <strong>How to request a refund:</strong> email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> with the
          email address used on the order and the approximate purchase date. We respond within{" "}
          <strong>2 business days</strong>. Approved refunds are returned to the original payment method, normally within
          5–10 business days depending on your bank.
        </p>

        <h2 id="restrictions">6. Eligibility, legal and export restrictions</h2>
        <ul>
          <li>
            ForeShift is sold to businesses and business operators, not to consumers, and you must be at least 18 years
            old to purchase.
          </li>
          <li>
            Forecast coverage is limited to the markets and zones published on our site. Detroit, Michigan is the only
            market available today. Buying a report does not give you coverage for a market we do not serve.
          </li>
          <li>
            ForeShift is offered from the United States and is intended for customers in the United States. We do not
            sell to, or provide the service to, any person or entity in a country or region subject to comprehensive
            U.S. sanctions, or to any party on a U.S. government restricted-party list. You agree not to access or use
            the service in violation of applicable U.S. export control and sanctions laws.
          </li>
          <li>
            The forecasts, bands, and underlying model are ForeShift's proprietary and patent-pending property. They are
            licensed for use in operating your own venue and may not be resold, redistributed, or used to build a
            competing product.
          </li>
          <li>
            Additional jurisdiction-specific restrictions: <span className="tbd">TBD pending legal review</span>.
          </li>
        </ul>

        <h2 id="disputes">7. Before you dispute a charge</h2>
        <p>
          If a charge looks wrong, please contact us first at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. Most
          issues — a duplicate charge, an unexpected renewal, a report for the wrong zone — are resolved the same day and
          far faster than a chargeback. Charges appear on your statement as{" "}
          <strong>[Statement descriptor TBD]</strong>.
        </p>

        <h2 id="contact">8. Contact</h2>
        <p className="stack-sm">
          Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><br />
          Phone: {CONTACT.phone}<br />
          Support hours: {CONTACT.hours}
        </p>
        <address style={{ fontStyle: "normal" }} className="muted">
          {CONTACT.address.map((line) => <div key={line}>{line}</div>)}
        </address>
      </div>
    </main>
  );
}
