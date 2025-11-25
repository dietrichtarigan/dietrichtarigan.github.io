import { Heart, ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { BackgroundArt } from "./BackgroundArt";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative text-white pt-20 pb-8 overflow-hidden">
      <BackgroundArt section="footer" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Brand */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="mb-4 text-white">Dietrich Tarigan</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  -
                </p>
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
                  <span>Available for new projects</span>
                </div>
              </motion.div>
            </div>

            {/* CTA Card */}
            <motion.div
              className="bg-white/5 backdrop-blur rounded-3xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="mb-3 text-white">Let’s build something impactful</h4>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Open to research collaborations, product experiments, or speaking engagements about applied physics, AI, and robotics.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-slate-900 bg-teal-300 px-5 py-2 rounded-full font-medium hover:bg-teal-200 transition-colors"
              >
                Start a conversation
              </a>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-700/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-300 flex items-center gap-2">
                © 2024 Dietrich Tarigan. Made with
                <Heart className="w-4 h-4 text-amber-400 fill-current inline" />
                in Bandung
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
