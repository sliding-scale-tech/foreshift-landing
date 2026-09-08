import { CONTACT } from "../data.js";

export default function Privacy() {
  return (
    <main className="wrap legal">
      <a className="backlink" href="#/">← Back to ForeShift</a>
      <h1>Privacy policy</h1>
      <p className="legal__meta">Last updated: [Effective date TBD]</p>

      <div className="legal__body">
        <div className="callout">
          <p className="mb0 small">
            <strong>Pre-launch note:</strong> items marked <strong>[TBD]</strong> are being finalized. This policy should
            be reviewed by counsel before launch.
          </p>
        </div>

        <p>
          This policy explains what ForeShift collects, why, and what we do with it. ForeShift is operated by{" "}
          <strong>[Legal entity name TBD]</strong>, based in Detroit, Michigan, United States.
        </p>

        <h2>1. Information we collect</h2>
        <ul>
          <li>
            <strong>Account information</strong> — your name, email address, and password credential when you create an
            account or join the waitlist.
          </li>
          <li>
            <strong>Venue information</strong> — the venue address you enter and the concept type you select. We geocode
            the address in order to place your venue in the correct zone.
          </li>
          <li>
            <strong>Operational feedback</strong> — the "how busy were you actually" entries you choose to log after a
            shift.
          </li>
          <li>
            <strong>Payment information</strong> — handled by Stripe. We receive a token, the last four digits, the card
            brand, and the expiry date for your records. <strong>We never receive or store your full card number.</strong>
          </li>
          <li>
            <strong>Usage and device data</strong> — pages viewed, approximate location derived from IP address, browser
            and device type, collected to keep the service working and secure.
          </li>
        </ul>

        <h2>2. How we use it</h2>
        <ul>
          <li>To place your venue in the right zone and produce your demand forecast.</li>
          <li>To improve the accuracy of the zone demand model, including from logged actuals.</li>
          <li>To process payments, issue receipts, and manage subscriptions.</li>
          <li>To provide support and to contact you about your account, purchases, and service changes.</li>
          <li>To detect, prevent, and investigate fraud, abuse, and security incidents.</li>
          <li>To send product and marketing email — only where you have opted in, and you can unsubscribe at any time.</li>
        </ul>

        <h2>3. How we share it</h2>
        <p>ForeShift does not sell your personal information. We share it only with:</p>
        <ul>
          <li><strong>Stripe</strong> — to process payments and manage subscriptions.</li>
          <li>
            <strong>Service providers</strong> — hosting, geocoding, email delivery, event and weather data, and
            analytics, each bound to use the data only to provide their service to us. Current subprocessor list:{" "}
            <span className="tbd">TBD</span>.
          </li>
          <li>
            <strong>Legal and safety</strong> — where required by law, or to protect the rights, safety, and property of
            ForeShift, our customers, or the public.
          </li>
          <li>
            <strong>Business transfer</strong> — if ForeShift is involved in a merger, acquisition, or sale of assets,
            with notice to you.
          </li>
        </ul>
        <p>
          Aggregated model outputs never identify an individual venue. What you log about your own nights is not shown to
          other operators.
        </p>

        <h2>4. Cookies</h2>
        <p>
          We use cookies and similar technologies that are strictly necessary to run the site and keep you signed in, and
          — where you consent — analytics cookies to understand how the site is used. You can control cookies in your
          browser settings; blocking necessary cookies may break parts of the service. Detailed cookie inventory:{" "}
          <span className="tbd">TBD</span>.
        </p>

        <h2>5. Data retention</h2>
        <p>
          We keep account and venue information for as long as your account is active, and afterwards only as long as
          needed for legal, tax, accounting, and dispute-resolution purposes. Transaction records are retained as
          required by law. You may ask us to delete your account at any time.
        </p>

        <h2>6. Security</h2>
        <p>
          The site and product are served over HTTPS. Data is encrypted in transit and at rest, access to production
          systems is restricted, and card data is handled entirely by Stripe under PCI DSS. See our{" "}
          <a href="#/security">payments &amp; security page</a>. No system is perfectly secure, but we treat operator data
          as confidential business information.
        </p>

        <h2>7. Your rights</h2>
        <p>
          Depending on where you live, you may have the right to access, correct, export, or delete your personal
          information, to object to or restrict certain processing, and to opt out of marketing email. To exercise any of
          these, email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. We respond within 30 days. We will not
          discriminate against you for exercising these rights.
        </p>

        <h2>8. Children</h2>
        <p>
          ForeShift is a business product and is not directed to children. We do not knowingly collect personal
          information from anyone under 18.
        </p>

        <h2>9. International users</h2>
        <p>
          ForeShift is operated from the United States and your information is processed there. If you access the service
          from outside the United States, you are transferring information to the United States, where data protection
          law may differ from your own.
        </p>

        <h2>10. Changes</h2>
        <p>
          If we make a material change to this policy, we will post the updated version here and update the date above,
          and where required we will notify you by email before the change takes effect.
        </p>

        <h2>11. Contact</h2>
        <p className="stack-sm">
          Privacy questions: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><br />
          Phone: {CONTACT.phone}
        </p>
        <address style={{ fontStyle: "normal" }} className="muted">
          {CONTACT.address.map((line) => <div key={line}>{line}</div>)}
        </address>
      </div>
    </main>
  );
}
