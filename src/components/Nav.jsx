import { useTheme } from "../router.jsx";

function Logo() {
  return (
    <a className="logo" href="#/" aria-label="ForeShift home">
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 17 9 11 13 15 21 7" />
          <polyline points="15 7 21 7 21 13" />
        </svg>
      </span>
      <span>Fore<em>Shift</em></span>
    </a>
  );
}

export default function Nav() {
  const [theme, toggle] = useTheme();

  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <Logo />
        <nav className="nav__links">
          <a href="#/#how">How it works</a>
          <a href="#/#coverage">Coverage</a>
          <a href="#/#pricing">Pricing</a>
          <a href="#/#faq">FAQ</a>
          <a href="#/contact">Contact</a>
        </nav>
        <div className="nav__actions">
          <button className="themeBtn" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>
          <a className="btn btn--primary btn--sm" href="#/#access">Get early access</a>
        </div>
      </div>
    </header>
  );
}
