import { Heart, ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { BackgroundArt } from "./BackgroundArt";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    Explore: [
      { name: "About", href: "#about" },
      { name: "Work", href: "#work" },
      { name: "Skills", href: "#skills" },
      { name: "Contact", href: "#contact" }
    ],
    Connect: [
      { name: "Twitter", href: "#" },
      { name: "LinkedIn", href: "#" },
      { name: "Dribbble", href: "#" },
      { name: "GitHub", href: "#" }
    ],
    Resources: [
      { name: "Blog", href: "#" },
      { name: "Newsletter", href: "#" },
      { name: "Uses", href: "#" },
      { name: "Resume", href: "#" }
    ]
  };

  return (
    <footer className="relative text-white pt-20 pb-8 overflow-hidden">
      <BackgroundArt section="footer" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="mb-4 text-white">Alex Rivera</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Crafting digital experiences that blend beautiful design with thoughtful 
                  functionality. Based in Barcelona, working worldwide.
                </p>
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
                  <span>Available for new projects</span>
                </div>
              </motion.div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="mb-4 text-white">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-700/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-300 flex items-center gap-2">
                © 2024 Alex Rivera. Made with
                <Heart className="w-4 h-4 text-amber-400 fill-current inline" />
                in Barcelona
              </p>
              
              <div className="flex items-center gap-6">
                <a href="#" className="text-slate-300 hover:text-teal-300 transition-colors">
                  Privacy
                </a>
                <a href="#" className="text-slate-300 hover:text-teal-300 transition-colors">
                  Terms
                </a>
                <button
                  onClick={scrollToTop}
                  className="group flex items-center gap-2 text-slate-300 hover:text-teal-300 transition-colors"
                >
                  Back to top
                  <div className="w-8 h-8 rounded-full bg-teal-900/40 group-hover:bg-teal-800/60 flex items-center justify-center transition-colors">
                    <ArrowUp className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
