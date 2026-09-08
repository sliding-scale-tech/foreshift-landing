import { CONTACT } from "../data.js";

export default function Security() {
  return (
    <main className="wrap legal">
      <a className="backlink" href="#/">← Back to ForeShift</a>
      <h1>Payments &amp; security</h1>
      <p className="legal__meta">How ForeShift handles your payment information</p>

      <div className="legal__body">
        <h2>Payments are processed by Stripe</h2>
        <p>
          ForeShift uses <strong>Stripe</strong> to process all payments. Stripe is certified as a PCI Service Provider
          Level 1 — the most stringent level of certification in the payments industry. When you pay, your card details
          are transmitted directly to Stripe over an encrypted connection.{" "}
          <strong>ForeShift never sees, handles, or stores your full card number, and never stores your CVC.</strong> We
          retain only the card brand, the last four digits, and the expiry date so you can recognise the card on file.
        </p>

        <h2>PCI compliance</h2>
        <p>
          PCI compliance is a shared responsibility. ForeShift maintains PCI DSS compliance by using Stripe's hosted and
          tokenized payment elements, so cardholder data never enters ForeShift's systems. We do not transmit or store
          cardholder data on our own servers.
        </p>

        <h2>Encryption in transit</h2>
        <p>
          Every page of foreshift.ai and app.foreshift.ai — including every payment page — is served over HTTPS with
          TLS. We use HSTS so browsers refuse to connect over an unencrypted channel. If you ever see a payment form on a
          page that is not HTTPS, do not enter your card details, and tell us at{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </p>

        <h2>Fraud and card testing prevention</h2>
        <p>
          Payment attempts are protected by Stripe Radar's fraud controls, with rate limiting and monitoring on payment
          endpoints to prevent card testing. Suspicious activity is blocked and reviewed.
        </p>

        <h2>Cards we accept</h2>
        <div className="cards" style={{ marginBottom: 12 }}>
          <span className="cardLogo">Visa</span>
          <span className="cardLogo">Mastercard</span>
          <span className="cardLogo">Amex</span>
          <span className="cardLogo">Discover</span>
        </div>
        <p>
          The exact set of available payment methods is confirmed at checkout. All charges are made in{" "}
          <strong>US Dollars (USD)</strong>. Charges appear on your statement as <strong>[Statement descriptor TBD]</strong>.
        </p>

        <h2>Your account data</h2>
        <p>
          Operator data — your venue address, concept type, and the actuals you log — is treated as confidential business
          information. It is encrypted in transit and at rest, access to production systems is restricted to staff who
          need it, and what you log about your own nights is never shown to other operators. See our{" "}
          <a href="#/privacy">privacy policy</a>.
        </p>

        <h2>Reporting a security issue</h2>
        <p>
          If you believe you have found a vulnerability, email{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> with the details. We will acknowledge within 2 business
          days. Please do not publicly disclose an issue before we have had a chance to fix it.
        </p>

        <h2>Questions about a charge</h2>
        <p>
          Contact us before filing a dispute — most billing questions are resolved the same day. See{" "}
          <a href="#/policies">refunds &amp; cancellation</a> or <a href="#/contact">contact us</a>.
        </p>
      </div>
    </main>
  );
}
