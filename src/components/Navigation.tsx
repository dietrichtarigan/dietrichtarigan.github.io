import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "work", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Work", id: "work" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-dark shadow-xl shadow-black/5"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className={`group transition-all duration-300 ${
                isScrolled ? "text-slate-800" : "text-white"
              }`}
            >
              <span className="relative text-2xl tracking-tight" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                DT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? isScrolled 
                        ? "text-slate-800 bg-slate-900/10" 
                        : "text-white bg-white/15"
                      : isScrolled 
                        ? "text-slate-700 hover:text-slate-900 hover:bg-slate-900/10" 
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 400, letterSpacing: '0.01em' }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                      layoutId="activeSection"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </button>
              ))}
              <a
                href="#"
                className={`ml-2 px-6 py-2.5 glass-strong rounded-full transition-all duration-300 border shadow-lg ${
                  isScrolled 
                    ? "text-slate-800 hover:bg-slate-900/20 border-slate-300" 
                    : "text-white hover:bg-white/30 border-white/20"
                }`}
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? "text-slate-800 bg-slate-900/10" : "text-white bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Bottom border gradient on scroll */}
        {isScrolled && (
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-slate-900/98 via-cyan-900/95 to-slate-900/98 backdrop-blur-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative h-full flex flex-col items-center justify-center gap-8 text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-3xl text-white hover:text-cyan-300 transition-all duration-300"
                  style={{ fontFamily: 'var(--font-display)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                href="#"
                className="mt-4 px-8 py-3 glass-strong text-white rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 z-50 origin-left shadow-lg shadow-cyan-400/50"
        style={{
          scaleX: typeof window !== 'undefined' 
            ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
            : 0
        }}
        initial={{ scaleX: 0 }}
      />
    </>
  );
}