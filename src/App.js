import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-intromail font-body">
      <Nav />
      <Hero />
      <Features />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
