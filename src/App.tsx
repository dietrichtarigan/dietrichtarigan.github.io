import { Suspense, lazy } from "react";

const Navigation = lazy(() => import("./components/Navigation"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <div id="home" className="min-h-screen">
      <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading...</div>}>
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}
