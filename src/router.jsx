import { useEffect, useState } from "react";

// Minimal hash router — keeps the site deployable as static files on any host
// without server-side rewrite rules.
// Hash shape: "#/route" for pages, "#/#section" for in-page anchors on the landing page.
function parse() {
  const raw = window.location.hash.replace(/^#\/?/, "");
  const [path, anchor] = raw.split("#");
  return { route: path.split("?")[0] || "", anchor: anchor || "" };
}

export function useRoute() {
  const [{ route, anchor }, setState] = useState(parse);

  useEffect(() => {
    const onChange = () => setState(parse());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  // Scroll to the requested section, or to the top of a newly opened page.
  useEffect(() => {
    if (anchor) {
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [route, anchor]);

  return route;
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("foreshift-theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("foreshift-theme", theme);
  }, [theme]);

  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}
