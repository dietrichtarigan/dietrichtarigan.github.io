import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { BackgroundArt } from "./BackgroundArt";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText =
    "am a Physics student passionate about AI and Machine Learning.";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <BackgroundArt section="hero" />

      {/* Animated foreground elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-300/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="mb-8 text-white leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Hey, I'm{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-cyan-200 via-sky-200 to-blue-200 bg-clip-text text-transparent">
                  Dietrich Tarigan
                </span>
                <motion.span
                  className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-amber-400/40 to-orange-400/30 -z-0 blur-sm"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
              <br />
              <span className="text-slate-100/95" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                and I {typedText}
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-slate-100/85 mb-12 max-w-2xl text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontWeight: 300, letterSpacing: '0.01em' }}
          >
            I'm a Physics undergraduate at Institut Teknologi Bandung, working on research in petroleum engineering with a focus on Top-Down Reservoir Modeling and Machine Learning applications for reservoir analysis. I'm also developing data-driven solutions for labor market analysis at GSIC.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection("work")}
              className="group relative px-8 py-4 overflow-hidden rounded-full transition-all duration-500 flex items-center gap-2"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
              
              {/* Glassmorphism layer on hover */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/30"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              {/* Button content */}
              <span className="relative text-white font-medium tracking-wide">View my work</span>
              <ArrowRight className="relative w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full blur-xl bg-cyan-400/30 group-hover:bg-cyan-400/50 transition-all duration-500 -z-10"></div>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 glass-dark text-white rounded-full hover:bg-white/25 transition-all duration-300 border border-white/20"
            >
              Let's talk
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}