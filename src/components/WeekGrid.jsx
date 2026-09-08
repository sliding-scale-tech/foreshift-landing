import { useEffect, useState } from "react";
import { BANDS, DAYS, DAYPARTS, SAMPLE_WEEK } from "../data.js";

// On a phone the seven-day grid is transposed: days run down, dayparts across.
// Operators read this on the floor, so the whole week still fits without scrolling.
function useNarrow(query = "(max-width: 720px)") {
  const [narrow, setNarrow] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setNarrow(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return narrow;
}

const srOnly = { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" };

export default function WeekGrid({ onHero = false, title, subtitle }) {
  const narrow = useNarrow();

  // columns / rows swap on narrow screens
  const cols = narrow ? DAYPARTS.map((p) => p.label) : DAYS;
  const rows = narrow ? DAYS : DAYPARTS.map((p) => p.label);
  const bandAt = (r, c) => BANDS[narrow ? SAMPLE_WEEK[c][r] : SAMPLE_WEEK[r][c]];
  const describe = (r, c) =>
    narrow
      ? `${rows[r]} ${DAYPARTS[c].label} (${DAYPARTS[c].hours})`
      : `${cols[c]} ${DAYPARTS[r].label} (${DAYPARTS[r].hours})`;

  return (
    <div className={`weekcard${onHero ? " weekcard--onHero" : ""}`}>
      <div className="weekcard__head">
        <div className="weekcard__title">{title}</div>
        <div className="weekcard__sub">{subtitle}</div>
      </div>

      <div className="wg__scroll">
        <table className="wg">
          <caption style={srOnly}>Zone demand band by day and daypart</caption>
          <thead>
            <tr>
              <th className="wg__rowhead" scope="col">{narrow ? "Day" : "Daypart"}</th>
              {cols.map((c) => (
                <th key={c} scope="col">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((rowLabel, r) => (
              <tr key={rowLabel}>
                <th className="wg__rowhead" scope="row">{rowLabel}</th>
                {cols.map((colLabel, c) => {
                  const band = bandAt(r, c);
                  return (
                    <td key={colLabel} className={`wg__cell ${band.cls}`} title={`${describe(r, c)} — ${band.name} demand`}>
                      {band.name}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="legend">
        {BANDS.map((b) => (
          <span className="legend__item" key={b.name}>
            <span className={`legend__swatch ${b.cls}`} /> {b.name}
          </span>
        ))}
      </div>
    </div>
  );
}
