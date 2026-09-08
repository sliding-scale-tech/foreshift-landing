import { useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Landing from "./pages/Landing.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Policies from "./pages/Policies.jsx";
import Security from "./pages/Security.jsx";
import Contact from "./pages/Contact.jsx";
import { useRoute } from "./router.jsx";

const PAGES = {
  "": { title: "ForeShift — Zone demand forecasting for restaurant operators", view: Landing },
  privacy: { title: "Privacy policy — ForeShift", view: Privacy },
  terms: { title: "Terms of service — ForeShift", view: Terms },
  policies: { title: "Fulfillment, refunds & cancellation — ForeShift", view: Policies },
  security: { title: "Payments & security — ForeShift", view: Security },
  contact: { title: "Contact — ForeShift", view: Contact },
};

export default function App() {
  const route = useRoute();
  const page = PAGES[route] || PAGES[""];
  const View = page.view;

  useEffect(() => {
    document.title = page.title;
  }, [page.title]);

  return (
    <>
      <Nav />
      <View />
      <Footer />
    </>
  );
}
