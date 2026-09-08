import { useState } from "react";
import WeekGrid from "../components/WeekGrid.jsx";
import { CONCEPTS, CONTACT, FAQS, ZONES } from "../data.js";

function WaitlistForm({ onDark = false }) {
  const [sent, setSent] = useState(false);

  // No backend is wired up yet — the form confirms locally so the page can ship.
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <p className={onDark ? "mb0" : "mb0"} style={{ color: onDark ? "#b8c9dd" : undefined }}>
        Thanks — you're on the list. We'll email you from {CONTACT.email} when your market opens.
      </p>
    );
  }

  return (
    <>
      <form className="form" onSubmit={submit}>
        <label htmlFor={`email-${onDark}`} className="sr-only" style={{ position: "absolute", left: -9999 }}>Work email</label>
        <input
          id={`email-${onDark}`}
          className={`input${onDark ? " input--onDark" : ""}`}
          type="email"
          required
          placeholder="Work email"
        />
        <label htmlFor={`city-${onDark}`} className="sr-only" style={{ position: "absolute", left: -9999 }}>Your city</label>
        <input
          id={`city-${onDark}`}
          className={`input${onDark ? " input--onDark" : ""}`}
          type="text"
          placeholder="Your city"
        />
        <button className={`btn ${onDark ? "btn--onDark" : "btn--primary"}`} type="submit">
          Get early access
        </button>
      </form>
      <p className="formNote" style={{ color: onDark ? "#8ba3bd" : undefined }}>
        We use your email to contact you about ForeShift access. See our <a href="#/privacy">privacy policy</a>.
      </p>
    </>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {FAQS.map((item, i) => (
        <div className="faq__item" key={item.q}>
          <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            {item.q}
            <span className="faq__sign" aria-hidden="true">{open === i ? "–" : "+"}</span>
          </button>
          {open === i && <p className="faq__a">{item.a}</p>}
        </div>
      ))}
    </div>
  );
}

export default function Landing() {
  return (
    <main>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="wrap hero__inner">
          <div className="hero__copy">
            <span className="hero__tag"><span className="dot" /> Detroit · 13 zones · 9 concept types</span>
            <h1>Know how busy demand will be — <em>before it happens.</em></h1>
            <p>
              ForeShift forecasts zone demand for independent restaurant, bar, and cafe operators: how much
              appetite there is for your kind of place, in your part of the city, on a given day and daypart.
              You staff, prep, and open to the wave instead of guessing at it.
            </p>
            <div className="hero__cta">
              <a className="btn btn--onDark" href="#/#access">Get early access</a>
              <a className="btn btn--onDarkGhost" href="#/#how">See how it works</a>
            </div>
            <p className="hero__note">No POS integration. Detroit now, more cities coming.</p>
          </div>
          <WeekGrid onHero title="Corktown · Casual Dining" subtitle="Zone demand · sample week" />
        </div>
      </section>

      {/* ---------- Problem ---------- */}
      <section className="section" id="problem">
        <div className="wrap">
          <div className="section__head">
            <div className="eyebrow">The problem</div>
            <h2>Every week you bet the labor budget on a hunch</h2>
            <p className="lede">
              The signals that move demand — events, weather, day-of-week rhythm, neighborhood character —
              are knowable in advance. Most operators are working from last year's numbers and the manager's memory.
            </p>
          </div>
          <div className="grid grid--3">
            <div className="card">
              <h3>Overstaffed</h3>
              <p className="mb0">You schedule five for a night that never comes. The labor is burned before the first ticket prints.</p>
            </div>
            <div className="card">
              <h3>Understaffed</h3>
              <p className="mb0">A stadium game, a festival, a sudden warm Friday — nobody saw it, and now it's walkouts, bad reviews, and a blown service.</p>
            </div>
            <div className="card">
              <h3>Over-prepped</h3>
              <p className="mb0">You buy and prep for the night you hoped for. What doesn't sell goes in the bin, and the order sheet repeats it next week.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="section section--soft" id="how">
        <div className="wrap">
          <div className="section__head">
            <div className="eyebrow">How it works</div>
            <h2>Four steps, then you're ahead of it</h2>
          </div>
          <div className="grid grid--4">
            <div className="card">
              <div className="step__num">1</div>
              <h3>Tell us where you are and what you serve</h3>
              <p className="mb0">Enter your venue address and pick your concept type. ForeShift geocodes the address and places you in the right city zone — no map-reading, no guessing which neighborhood you count as.</p>
            </div>
            <div className="card">
              <div className="step__num">2</div>
              <h3>Get your demand baseline</h3>
              <p className="mb0">A demand score and band for every day × daypart for that concept in that zone — the full week at a glance. Built from ForeShift's Detroit demand model, not a generic national average.</p>
            </div>
            <div className="card">
              <div className="step__num">3</div>
              <h3>Live signals adjust it</h3>
              <p className="mb0">Nearby events and weather move the forecast. Events are matched by real distance from your venue to the zone — a game two blocks away and a game across town are not the same event.</p>
            </div>
            <div className="card">
              <div className="step__num">4</div>
              <h3>Log what actually happened</h3>
              <p className="mb0">Tap in how busy you really were. ForeShift compares predicted against actual and tunes the model — it gets sharper the longer a market runs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- What you see ---------- */}
      <section className="section" id="week">
        <div className="wrap">
          <div className="section__head">
            <div className="eyebrow">What you see</div>
            <h2>The whole week, in plain language</h2>
            <p className="lede">
              Six demand bands — Minimal through Exceptional — for four dayparts across seven days. No raw number
              to decode, and always the reason behind a spike or a dip.
            </p>
          </div>
          <WeekGrid title="Foxtown / Stadium District · Sports Bar" subtitle="Zone demand · sample week" />
          <div className="grid grid--3" style={{ marginTop: 18 }}>
            <div className="card">
              <h3>Four dayparts</h3>
              <p className="mb0">Morning (6–11a) · Midday (11a–4p) · Dinner (4–9p) · Late night (9p–2a). Shift-shaped, not hour-by-hour noise.</p>
            </div>
            <div className="card">
              <h3>A week view</h3>
              <p className="mb0">Patterns are obvious at a glance — which nights carry the week, which dayparts are dead weight.</p>
            </div>
            <div className="card">
              <h3>What's driving it</h3>
              <p className="mb0">Saturday reads Peak because of the game at 7pm, not because the number says so. You see the event and the weather behind the band.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Live signals ---------- */}
      <section className="section section--soft" id="signals">
        <div className="wrap">
          <div className="section__head">
            <div className="eyebrow">Live signals</div>
            <h2>Events and weather, not averages</h2>
          </div>
          <div className="grid grid--2">
            <div className="card">
              <h3>Events</h3>
              <p>Stadium games, concerts, and festivals near you move the forecast. Distance matters: an event two blocks from your door and one across town are weighted differently, so a downtown concert doesn't inflate a Southwest Detroit Tuesday.</p>
              <p className="mb0 small muted">Detroit runs on its event calendar — you should see it coming from the schedule, not from the line at the door.</p>
            </div>
            <div className="card">
              <h3>Weather</h3>
              <p>Weather scales the whole picture up or down. A warm, clear Friday and a Detroit ice storm are not the same night, and the forecast shouldn't pretend they are.</p>
              <p className="mb0 small muted">Patio-weather lift and winter drag both show up in the band, ahead of the shift.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Coverage ---------- */}
      <section className="section" id="coverage">
        <div className="wrap">
          <div className="section__head">
            <div className="eyebrow">Coverage</div>
            <h2>Built for your concept, in your zone</h2>
            <p className="lede">
              Detroit is the launch market: 13 trade-area zones and 9 concept types. Demand for a cocktail lounge in
              Greektown is a different animal than a coffee shop in Midtown, and the forecast treats it that way.
            </p>
          </div>
          <h3 style={{ marginBottom: 12 }}>13 Detroit zones</h3>
          <div className="chips" style={{ marginBottom: 30 }}>
            {ZONES.map((z) => (
              <span className="chip" key={z}>{z}</span>
            ))}
          </div>
          <h3 style={{ marginBottom: 12 }}>9 concept types</h3>
          <div className="chips">
            {CONCEPTS.map((c) => (
              <span className="chip chip--accent" key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- AI Intelligence Pass ---------- */}
      <section className="section section--soft" id="ai">
        <div className="wrap">
          <div className="section__head">
            <div className="eyebrow">Add-on</div>
            <h2>AI Intelligence Pass</h2>
            <p className="lede">
              Ask in plain English and get a written answer grounded in your actual forecast numbers.
              The AI explains the forecast. It never makes the forecast up.
            </p>
          </div>
          <div className="grid grid--2" style={{ alignItems: "start" }}>
            <div className="card chat" style={{ alignSelf: "start" }}>
              <div className="bubble bubble--q">
                <div className="bubble__label">You ask</div>
                How busy is Saturday dinner?
              </div>
              <div className="bubble bubble--a">
                <div className="bubble__label">ForeShift</div>
                Saturday dinner reads <strong>Peak</strong> for upscale casual in Corktown — the strongest daypart in your week.
                A stadium event lets out nearby in the early evening and the weather is mild, so both signals push the same
                direction. Midday Saturday sits at <strong>Moderate</strong>, so if you're moving people around, take them
                from the middle of the day, not from the evening.
              </div>
            </div>
            <div className="grid" style={{ gap: 14 }}>
              <div className="card">
                <h3>Ask about a zone, not just your own</h3>
                <p className="mb0">"What's happening in Corktown this weekend?" — useful before you commit to a slow Sunday or a new daypart.</p>
              </div>
              <div className="card">
                <h3>Grounded in the numbers</h3>
                <p className="mb0">Every answer is written from the forecast for your zone, concept, day, and daypart. If the forecast doesn't say it, the answer doesn't either.</p>
              </div>
              <div className="card">
                <h3>Sold as a monthly subscription</h3>
                <p className="mb0">Tiers for a single zone or full city coverage. Cancel any time — see <a href="#/policies">refunds &amp; cancellation</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Feedback loop ---------- */}
      <section className="section" id="learns">
        <div className="wrap">
          <div className="grid grid--2" style={{ alignItems: "center", gap: 40 }}>
            <div>
              <div className="eyebrow">The loop</div>
              <h2>It learns from your floor</h2>
              <p>
                After a shift, tap in how busy you actually were. ForeShift compares that against what it predicted and
                tunes the model for your zone and concept. The longer a market runs, the sharper it gets.
              </p>
              <p className="mb0">
                It takes seconds, it happens once a shift, and it's the only data entry ForeShift ever asks of you.
              </p>
            </div>
            <div className="grid grid--3" style={{ gap: 12 }}>
              <div className="card"><h3>Predicted</h3><p className="mb0 small">The band ForeShift called for that day and daypart.</p></div>
              <div className="card"><h3>Actual</h3><p className="mb0 small">What your floor really looked like, in one tap.</p></div>
              <div className="card"><h3>Tuned</h3><p className="mb0 small">The gap feeds back into the zone model.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- What it's used for ---------- */}
      <section className="section section--soft" id="outcomes">
        <div className="wrap">
          <div className="section__head">
            <div className="eyebrow">What operators do with it</div>
            <h2>Decisions you make anyway — made a week earlier</h2>
          </div>
          <div className="grid grid--3">
            <div className="card"><h3>Staffing</h3><p className="mb0">Schedule to the wave instead of to last week.</p></div>
            <div className="card"><h3>Prep &amp; ordering</h3><p className="mb0">Buy for the night you're actually going to have.</p></div>
            <div className="card"><h3>Hours</h3><p className="mb0">Know which shifts are worth opening for.</p></div>
            <div className="card"><h3>Promotions</h3><p className="mb0">Push on the slow dayparts, not the ones already full.</p></div>
            <div className="card"><h3>Event readiness</h3><p className="mb0">See the stadium game before it walks through the door.</p></div>
            <div className="card"><h3>Planning ahead</h3><p className="mb0">Look at next week as a whole, not one shift at a time.</p></div>
          </div>
        </div>
      </section>

      {/* ---------- Pricing ---------- */}
      <section className="section" id="pricing">
        <div className="wrap">
          <div className="section__head">
            <div className="eyebrow">Pricing</div>
            <h2>Two ways to buy</h2>
            <p className="lede">
              Pricing for the launch market is being finalized. All prices and charges will be shown and billed in
              <strong> US Dollars (USD)</strong>, inclusive of any applicable taxes shown at checkout.
            </p>
          </div>
          <div className="grid grid--3">
            <div className="card card--price">
              <h3>Demand report</h3>
              <div className="price__tag"><span className="tbd">Pricing TBD</span></div>
              <div className="price__cur">One-time purchase · billed in USD</div>
              <ul className="price__list">
                <li>One zone, one concept type</li>
                <li>Demand band for every day × daypart</li>
                <li>Full week view</li>
                <li>Event and weather drivers included</li>
                <li>Delivered in your account immediately after payment</li>
              </ul>
              <a className="btn btn--primary" href="#/#access">Request access</a>
            </div>
            <div className="card card--price">
              <h3>AI Intelligence Pass — single zone</h3>
              <div className="price__tag"><span className="tbd">Pricing TBD</span></div>
              <div className="price__cur">Monthly subscription · billed in USD · cancel any time</div>
              <ul className="price__list">
                <li>Everything in the demand report</li>
                <li>Plain-English questions and answers</li>
                <li>Answers grounded in your forecast</li>
                <li>One zone of coverage</li>
                <li>Renews monthly until cancelled</li>
              </ul>
              <a className="btn btn--primary" href="#/#access">Request access</a>
            </div>
            <div className="card card--price">
              <h3>AI Intelligence Pass — full city</h3>
              <div className="price__tag"><span className="tbd">Pricing TBD</span></div>
              <div className="price__cur">Monthly subscription · billed in USD · cancel any time</div>
              <ul className="price__list">
                <li>All 13 Detroit zones</li>
                <li>All 9 concept types</li>
                <li>Compare zones before you commit</li>
                <li>For multi-venue and small-group operators</li>
                <li>Renews monthly until cancelled</li>
              </ul>
              <a className="btn btn--primary" href="#/#access">Request access</a>
            </div>
          </div>
          <p className="small muted" style={{ marginTop: 18 }}>
            Promotions, discounts, and trials: ForeShift is not running any promotional offer at this time. If we offer one,
            its full terms — duration, eligibility, what happens when it ends, and how to cancel — will be shown on this page
            and at checkout before you agree to it. See our <a href="#/policies">refunds &amp; cancellation policy</a> and{" "}
            <a href="#/terms">terms of service</a>.
          </p>
        </div>
      </section>

      {/* ---------- Trust: payments & security ---------- */}
      <section className="section section--soft" id="security">
        <div className="wrap">
          <div className="grid grid--2" style={{ alignItems: "start", gap: 32 }}>
            <div>
              <div className="eyebrow">Payments &amp; security</div>
              <h2>Your card details never touch our servers</h2>
              <p>
                ForeShift is served entirely over HTTPS. Payments are processed by <strong>Stripe</strong>, a PCI Service
                Provider Level 1 certified processor. Card details are sent directly to Stripe over an encrypted
                connection — ForeShift never sees, handles, or stores your full card number.
              </p>
              <p>
                We maintain PCI DSS compliance through our Stripe integration and follow security best practices across
                the product. Read the full detail on our <a href="#/security">payments &amp; security page</a>.
              </p>
              <div style={{ marginTop: 22 }}>
                <h3 style={{ fontSize: ".78rem", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--text-faint)" }}>
                  Cards accepted
                </h3>
                <div className="cards">
                  <span className="cardLogo">Visa</span>
                  <span className="cardLogo">Mastercard</span>
                  <span className="cardLogo">Amex</span>
                  <span className="cardLogo">Discover</span>
                </div>
                <p className="small muted" style={{ marginTop: 10 }}>
                  Card brand availability is confirmed at checkout. All charges are in US Dollars (USD).
                </p>
              </div>
            </div>
            <div className="grid" style={{ gap: 14 }}>
              <div className="card">
                <h3>Clear policies before you buy</h3>
                <p className="mb0 small">
                  <a href="#/policies">Refunds, delivery &amp; cancellation</a> · <a href="#/terms">Terms of service</a> ·{" "}
                  <a href="#/privacy">Privacy policy</a> · <a href="#/policies#restrictions">Eligibility &amp; restrictions</a>
                </p>
              </div>
              <div className="card">
                <h3>Reach a human</h3>
                <p className="small mb0">
                  Email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> · Phone {CONTACT.phone} · {CONTACT.hours}
                  <br />
                  <a href="#/contact">All contact options</a>
                </p>
              </div>
              <div className="card">
                <h3>Where we are</h3>
                <address className="small muted mb0" style={{ fontStyle: "normal" }}>
                  {CONTACT.address.map((line) => <div key={line}>{line}</div>)}
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section" id="faq">
        <div className="wrap">
          <div className="section__head">
            <div className="eyebrow">FAQ</div>
            <h2>Straight answers</h2>
          </div>
          <Faq />
        </div>
      </section>

      {/* ---------- Final CTA / waitlist ---------- */}
      <section className="section ctaBand" id="access" style={{ borderTop: "none" }}>
        <div className="wrap" style={{ maxWidth: 760, textAlign: "center" }}>
          <h2>Get ahead of next week</h2>
          <p style={{ margin: "0 auto 26px", maxWidth: "44rem" }}>
            ForeShift is live in Detroit and opening more markets next. Tell us where you operate and we'll get you in —
            or put your city on the list.
          </p>
          <div style={{ textAlign: "left", maxWidth: 560, margin: "0 auto" }}>
            <WaitlistForm onDark />
          </div>
        </div>
      </section>
    </main>
  );
}
