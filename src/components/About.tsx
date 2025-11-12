import { motion } from "motion/react";
import { Calendar, Award, Coffee, Heart, Music, Cpu, Lightbulb, Users } from "lucide-react";
import profilePhoto from "figma:asset/bad2026f394b32cfbc86ec324d7fb595a8a65cb7.png";
import { BackgroundArt } from "./BackgroundArt";

export function About() {
  const journey = [
    {
      year: "Jul 2025-Present",
      role: "Research Intern",
      company: "BRIN - Pusat Riset Fisika Kuantum",
      description: "Designing Helmholtz coil systems, developing GUI for I-V measurements, and creating image processing algorithms for MOKE microscopy"
    },
    {
      year: "Feb 2025-Present",
      role: "RSC Division Member",
      company: "AKSANTARA ITB",
      description: "Developing Electronic Speed Controller (ESC) firmware for UAVs using STM32 microcontrollers and embedded C"
    },
    {
      year: "Jan 2025-Present",
      role: "Programming Division Member",
      company: "URO ITB",
      description: "Learning ROS, OOP, and OpenCV for autonomous underwater robotics, preparing for KRBAI competition"
    },
    {
      year: "Sep-Dec 2024",
      role: "Laboratory Assistant",
      company: "Institut Teknologi Bandung",
      description: "Assisted in Introductory Physics 1 experiments, guided students, and managed lab equipment"
    }
  ];

  const interests = [
    { icon: <Music className="w-5 h-5" />, text: "Jazz pianist" },
    { icon: <Cpu className="w-5 h-5" />, text: "Robotics enthusiast" },
    { icon: <Lightbulb className="w-5 h-5" />, text: "Renewable energy" },
    { icon: <Users className="w-5 h-5" />, text: "Team leadership" }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <BackgroundArt section="about" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-cyan-600 mb-2 tracking-wider uppercase text-sm" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 500 }}>About me</p>
            <h2 className="mb-16 text-slate-800 max-w-3xl text-4xl md:text-5xl leading-snug" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 500 }}>
              Bridging physics, technology, and innovation
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 mb-24">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-8">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <img
                    src={profilePhoto}
                    alt="Alex Rivera"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 via-transparent to-transparent"></div>
                  
                  {/* Artistic border effect */}
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-cyan-200/30"></div>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-3 glass-strong rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="text-cyan-600">{interest.icon}</div>
                      <span className="text-slate-700 text-sm" style={{ fontFamily: 'var(--font-outfit)' }}>{interest.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-3 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}>
                My journey started with a fascination for how the universe works. As a physics 
                student at ITB, I discovered that the principles governing quantum mechanics could 
                also drive innovation in robotics, renewable energy, and embedded systems.
              </p>
              
              <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}>
                From designing Helmholtz coils for quantum research at BRIN to developing autonomous 
                underwater robots and ESC firmware for UAVs, I thrive at the intersection of theoretical 
                physics and practical engineering. My interdisciplinary approach allows me to tackle 
                complex problems from multiple perspectives.
              </p>

              <p className="text-slate-700 leading-relaxed text-lg italic opacity-90" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}>
                When I'm not in the lab or coding firmware, you'll find me performing jazz piano at 
                campus events, leading renewable energy projects, or mentoring teams in robotics 
                competitions. Music and engineering both teach me about harmony—whether in sound or systems.
              </p>

              <div className="pt-8">
                <h3 className="mb-6 text-slate-800 text-2xl" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 500 }}>My Journey</h3>
                <div className="space-y-6">
                  {journey.map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative pl-8 pb-6 border-l-2 border-cyan-200/60 last:border-transparent last:pb-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 border-4 border-white shadow-md shadow-cyan-400/30"></div>
                      <div className="text-cyan-600 mb-1 text-sm tracking-wide" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 500 }}>{item.year}</div>
                      <div className="text-slate-800 mb-1" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 500 }}>{item.role}</div>
                      <div className="text-slate-500 mb-2 text-sm">{item.company}</div>
                      <p className="text-slate-600" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}>{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            className="relative py-16 px-8 md:px-12 bg-gradient-to-br from-slate-700 via-slate-800 to-cyan-900 rounded-3xl text-white overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 text-[200px] leading-none text-cyan-400/5 select-none" style={{ fontFamily: 'var(--font-display)' }}>"</div>
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/8 via-transparent to-cyan-400/8"></div>
            <div className="relative z-10 max-w-3xl">
              <p className="text-white/95 mb-4 italic text-xl md:text-2xl leading-relaxed" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}>
                "The best solutions emerge when we approach problems from multiple angles—combining 
                theoretical knowledge with hands-on experimentation, and always staying curious about 
                how things work at their fundamental level."
              </p>
              <p className="text-cyan-200/70 text-sm tracking-wider">— My approach to innovation</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}