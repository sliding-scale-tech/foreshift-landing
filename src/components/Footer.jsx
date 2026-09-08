import { CONTACT } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <div className="logo" style={{ marginBottom: 12 }}>
              <span className="logo__mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 17 9 11 13 15 21 7" />
                  <polyline points="15 7 21 7 21 13" />
                </svg>
              </span>
              <span>Fore<em>Shift</em></span>
            </div>
            <p className="small" style={{ maxWidth: "30ch" }}>
              Zone demand forecasting for independent restaurant, bar, and cafe operators. Detroit now, more cities coming.
            </p>
            <address className="small muted" style={{ fontStyle: "normal", lineHeight: 1.7 }}>
              {CONTACT.address.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </address>
          </div>

          <div>
            <h4>Product</h4>
            <ul>
              <li><a href="#/#how">How it works</a></li>
              <li><a href="#/#week">What you see</a></li>
              <li><a href="#/#coverage">Zones &amp; concepts</a></li>
              <li><a href="#/#ai">AI Intelligence Pass</a></li>
              <li><a href="#/#pricing">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#/contact">Contact us</a></li>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li><a href="#/#faq">FAQ</a></li>
              <li><a href="#/security">Payments &amp; security</a></li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="#/terms">Terms of service</a></li>
              <li><a href="#/privacy">Privacy policy</a></li>
              <li><a href="#/policies">Refunds &amp; cancellation</a></li>
              <li><a href="#/policies#restrictions">Eligibility &amp; restrictions</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} ForeShift. All rights reserved. Prices and charges are in US Dollars (USD).</span>
          <span>Payments processed securely by Stripe.</span>
        </div>
      </div>
    </footer>
  );
}
