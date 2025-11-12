import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import bgImage1 from "figma:asset/f34530c70fe3c836c7af09a47af6594900cb2021.png";
import bgImage2 from "figma:asset/7e9638e48d1ad571bdd741ec9cf9957d9a22bd42.png";
import bgImage3 from "figma:asset/f3bce1b0e5833d0d972787a02159b8855b11a169.png";

interface BackgroundArtProps {
  section: "hero" | "about" | "skills" | "projects" | "contact" | "footer";
}

export function BackgroundArt({ section }: BackgroundArtProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Hero: Atmospheric Clouds (Image 1) - Dark dramatic
  if (section === "hero") {
    return (
      <div ref={ref} className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 -top-20"
          style={{ y }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-top"
            style={{ backgroundImage: `url(${bgImage1})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-cyan-900/50" />
        </motion.div>
      </div>
    );
  }

  // About & Skills: Impressionist Beach (Image 2) - Soft blues and warm tones
  if (section === "about" || section === "skills") {
    return (
      <div ref={ref} className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage2})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-slate-50/90 to-white/88 bg-[rgba(94,64,64,0)]" />
        </motion.div>
      </div>
    );
  }

  // Projects: Classical Landscape (Image 3) - Warm architecture
  if (section === "projects") {
    return (
      <div ref={ref} className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage3})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/93 via-white/90 to-slate-50/92" />
        </motion.div>
      </div>
    );
  }

  // Contact: Impressionist Beach (Image 2) - Sky focus
  if (section === "contact") {
    return (
      <div ref={ref} className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-top"
            style={{ backgroundImage: `url(${bgImage2})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-white/88 to-slate-100/90" />
        </motion.div>
      </div>
    );
  }

  // Footer: Atmospheric Clouds (Image 1) - Dark
  if (section === "footer") {
    return (
      <div ref={ref} className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage1})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/93 via-slate-800/95 to-slate-900/93" />
        </motion.div>
      </div>
    );
  }

  return null;
}
