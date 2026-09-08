import { CONTACT } from "../data.js";

export default function Terms() {
  return (
    <main className="wrap legal">
      <a className="backlink" href="#/">← Back to ForeShift</a>
      <h1>Terms of service</h1>
      <p className="legal__meta">Last updated: [Effective date TBD]</p>

      <div className="legal__body">
        <div className="callout">
          <p className="mb0 small">
            <strong>Pre-launch note:</strong> items marked <strong>[TBD]</strong> are being finalized. These terms should
            be reviewed by counsel before launch.
          </p>
        </div>

        <p>
          These terms govern your use of the ForeShift website at foreshift.ai and the ForeShift product at
          app.foreshift.ai, operated by <strong>[Legal entity name TBD]</strong> ("ForeShift", "we", "us"). By creating an
          account or buying a product, you agree to them.
        </p>

        <h2>1. What ForeShift provides</h2>
        <p>
          ForeShift provides forecasts of <strong>zone demand</strong> — the demand for a concept type inside a defined
          city trade area, at a given day and daypart — together with the event and weather signals affecting that
          forecast, and an optional AI Intelligence Pass that answers questions about those forecasts in plain English.
        </p>

        <h2>2. What ForeShift is not</h2>
        <p>
          ForeShift is a forecasting and decision-support service. It is <strong>not</strong> a prediction of your
          venue's sales, covers, or revenue, and it is not financial, legal, or employment advice. Forecasts are
          estimates about a zone, and they can be wrong. Staffing, ordering, hours, and promotional decisions remain
          yours, and you are responsible for them and for complying with the employment and licensing laws that apply to
          your business.
        </p>

        <h2>3. Accounts</h2>
        <p>
          You must give accurate information, including a real venue address, and keep your credentials secure. You are
          responsible for activity under your account. Tell us promptly at{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> if you believe your account has been compromised.
        </p>

        <h2>4. Purchases, billing and renewal</h2>
        <ul>
          <li>All prices are in <strong>US Dollars (USD)</strong>. Launch pricing is <span className="tbd">Pricing TBD</span>.</li>
          <li>Demand reports are one-time purchases. The AI Intelligence Pass is a monthly subscription.</li>
          <li>
            Subscriptions renew automatically each month at the then-current price until you cancel. You authorize us to
            charge your payment method for each renewal.
          </li>
          <li>You can cancel at any time; cancellation takes effect at the end of the paid period.</li>
          <li>We will give notice before any price change takes effect for an existing subscription.</li>
          <li>Delivery, cancellation, and refunds are governed by our <a href="#/policies">fulfillment, refunds &amp; cancellation policy</a>, which forms part of these terms.</li>
          <li>Failed payments may result in suspension of access until the balance is settled.</li>
        </ul>

        <h2>5. Promotions</h2>
        <p>
          ForeShift is not running a promotional offer at this time. If we offer a discount, trial, or promotional price,
          its terms — who is eligible, how long it lasts, what you are charged when it ends, and how to cancel — will be
          displayed on the pricing page and at checkout before you agree to it.
        </p>

        <h2>6. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Resell, redistribute, sublicense, or publish ForeShift forecasts or bands outside your own operation.</li>
          <li>Scrape, bulk-extract, or reverse engineer the service, the model, or its outputs.</li>
          <li>Use the service to build or train a competing forecasting product.</li>
          <li>Share account access with people outside your business, or interfere with the service's security.</li>
        </ul>

        <h2>7. Intellectual property</h2>
        <p>
          The ForeShift model, forecasts, band system, software, and brand are owned by ForeShift and are proprietary and
          patent-pending. Your purchase grants a limited, non-exclusive, non-transferable licence to use the forecasts to
          operate your own venue. You keep ownership of the data you enter, and you grant us a licence to use it to
          operate and improve the service, including in aggregated, de-identified form.
        </p>

        <h2>8. Disclaimer of warranties</h2>
        <p>
          The service is provided "as is" and "as available". To the fullest extent permitted by law, ForeShift disclaims
          all warranties, express or implied, including merchantability, fitness for a particular purpose, and
          non-infringement. We do not warrant that forecasts will be accurate for any particular day, daypart, or venue,
          or that the service will be uninterrupted or error-free.
        </p>

        <h2>9. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, ForeShift is not liable for indirect, incidental, special,
          consequential, or punitive damages, or for lost profits, lost revenue, wasted labor, or wasted inventory
          arising from your use of or reliance on the service. Our total liability for any claim is limited to the
          amounts you paid ForeShift in the <strong>12 months</strong> before the claim arose.
        </p>

        <h2>10. Suspension and termination</h2>
        <p>
          You may stop using ForeShift and close your account at any time. We may suspend or terminate access for breach
          of these terms, non-payment, or suspected fraud or abuse. Where we terminate without cause, we will refund any
          unused portion of a prepaid subscription period.
        </p>

        <h2>11. Export and sanctions compliance</h2>
        <p>
          You may not use ForeShift in violation of U.S. export control or sanctions laws, and you confirm you are not
          located in a comprehensively sanctioned country or region and are not on a U.S. government restricted-party
          list. See <a href="#/policies#restrictions">eligibility &amp; restrictions</a>.
        </p>

        <h2>12. Changes to these terms</h2>
        <p>
          We may update these terms. Material changes will be posted here with a new date and, where required, notified
          by email before taking effect. Continuing to use the service after that means you accept the updated terms.
        </p>

        <h2>13. Governing law</h2>
        <p>
          These terms are governed by the laws of the State of Michigan, United States, without regard to conflict of law
          rules. Venue and dispute resolution: <span className="tbd">TBD pending legal review</span>.
        </p>

        <h2>14. Contact</h2>
        <p className="stack-sm">
          Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><br />
          Phone: {CONTACT.phone}
        </p>
        <address style={{ fontStyle: "normal" }} className="muted">
          {CONTACT.address.map((line) => <div key={line}>{line}</div>)}
        </address>
      </div>
    </main>
  );
}
