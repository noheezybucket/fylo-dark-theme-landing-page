import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="bg-intromail font-body">
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      <Hero />
      <Features />
      <Team />
      <Testimonials />
      <Footer />
      <Sidebar />
    </div>
  );
}

export default App;
