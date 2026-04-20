import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import ResearchInterests from "./components/ResearchInterests";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import PersonalNote from "./components/PersonalNote";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <ResearchInterests />
      <Projects />
      <Experience />
      <Certifications />
      <PersonalNote />
      <Contact />
      <Footer />
    </div>
  );
}