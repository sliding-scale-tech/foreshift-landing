import { CONTACT } from "../data.js";

export default function Contact() {
  return (
    <main className="wrap legal">
      <a className="backlink" href="#/">← Back to ForeShift</a>
      <h1>Contact ForeShift</h1>
      <p className="legal__meta">Real people, in Detroit. Pick whichever is easiest.</p>

      <div className="grid grid--3" style={{ marginBottom: 32 }}>
        <div className="card">
          <h3>Support</h3>
          <p className="mb0 small">
            Billing, refunds, access, anything broken.<br />
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><br />
            Response within 2 business days.
          </p>
        </div>
        <div className="card">
          <h3>Sales &amp; access</h3>
          <p className="mb0 small">
            Getting set up, multi-venue coverage, new markets.<br />
            <a href={`mailto:${CONTACT.sales}`}>{CONTACT.sales}</a>
          </p>
        </div>
        <div className="card">
          <h3>Phone</h3>
          <p className="mb0 small">
            {CONTACT.phone}<br />
            {CONTACT.hours}
          </p>
        </div>
      </div>

      <div className="legal__body">
        <h2>Business address</h2>
        <address style={{ fontStyle: "normal" }} className="muted">
          {CONTACT.address.map((line) => <div key={line}>{line}</div>)}
        </address>

        <h2>Live chat</h2>
        <p>
          Live chat is available inside your account at <a href="https://app.foreshift.ai">app.foreshift.ai</a> during
          support hours. <span className="tbd">Availability TBD before launch</span>.
        </p>

        <h2>Before you write in</h2>
        <p>
          Many questions are already answered on the <a href="#/#faq">FAQ</a>, the{" "}
          <a href="#/policies">refunds &amp; cancellation policy</a>, and the{" "}
          <a href="#/security">payments &amp; security page</a>.
        </p>

        <div className="callout">
          <p className="mb0 small">
            <strong>About a charge?</strong> Email {" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> with the email address on the order and the
            approximate date. Duplicate and accidental charges are refunded in full.
          </p>
        </div>
      </div>
    </main>
  );
}
