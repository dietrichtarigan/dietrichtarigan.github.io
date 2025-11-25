import { useState } from "react";
import { motion } from "motion/react";
import { Music, Cpu, Lightbulb, Users, ChevronDown, ChevronUp } from "lucide-react";
import profilePhoto from "figma:asset/bad2026f394b32cfbc86ec324d7fb595a8a65cb7.png";
import { BackgroundArt } from "./BackgroundArt";

export function About() {
    const [showAllJourney, setShowAllJourney] = useState(false);
    const journey = [
        {
            year: "Nov 2025 - Present",
            role: "Petroleum Engineering Research Assistant",
            company: "Institut Teknologi Bandung",
            description: "Bandung, West Java, Indonesia • Research focus on Top-Down Reservoir Modeling and applying Machine Learning to dynamic and seismic datasets for better reservoir understanding and predictive analytics."
        },
        {
            year: "Nov 2025 - Present",
            role: "Consulting Associate",
            company: "Ganesha Student Innovation Center (GSIC)",
            description: "Bandung, West Java, Indonesia • Building a data-driven labor market analysis and policy intelligence system for the Ministry of Manpower (Kemnaker)."
        },
        {
            year: "Jul 2025 - Present",
            role: "Head of Academy Department",
            company: "ITBJazz",
            description: "Bandung, West Java, Indonesia • Leading academy operations and member development within the campus jazz community."
        },
        {
            year: "Jun 2025 - Present",
            role: "Head of Alumni Relations & Career Development",
            company: "Himpunan Mahasiswa Fisika ITB (HIMAFI ITB)",
            description: "Bandung, West Java, Indonesia • Managing alumni engagement and career development initiatives for physics students."
        },
        {
            year: "Apr 2025 - Present",
            role: "Programming Team Member",
            company: "Unit Robotika ITB",
            description: "Bandung, West Java, Indonesia • Developing autonomous underwater robotics systems for KRBAI using ROS, OpenCV, and Raspberry Pi-based control integration."
        },
        {
            year: "Mar 2025 - Present",
            role: "Programming Team Member",
            company: "Aksantara ITB",
            description: "Bandung, West Java, Indonesia • On-site • ESC firmware developer in the TDESC team, creating STM32-based motor control systems for UAVs with Embedded C (Embedded Software Programming)."
        },
        {
            year: "Jul 2025 - Sep 2025",
            role: "Research Intern",
            company: "BRIN – Quantum Physics Research Center",
            description: "Serpong, Banten, Indonesia • Hybrid • Designed a Helmholtz coil, developed real-time GUI for Keithley SMU I–V measurements, and built image processing algorithms for ROI detection in Magneto-Optic Kerr Microscopy datasets under Dr. Joko Suwardy."
        },
        {
            year: "Sep 2024 - May 2025",
            role: "Research Member",
            company: "Society of Renewable Energy ITB",
            description: "Bandung, West Java, Indonesia • Implemented reinforcement learning for a single-axis solar tracker."
        },
        {
            year: "Sep 2024 - Dec 2024",
            role: "Laboratory Assistant — Introductory Physics 1",
            company: "Institut Teknologi Bandung",
            description: "Bandung, West Java, Indonesia • On-site • Guided students through experiments, explained theoretical concepts, troubleshooted setups, and evaluated lab reports."
        }
    ];

  const interests = [
    { icon: <Cpu className="w-5 h-5" />, text: "AI & ML Enthusiast" },
    { icon: <Lightbulb className="w-5 h-5" />, text: "Deep Learning" },
    { icon: <Users className="w-5 h-5" />, text: "Team Leadership" },
    { icon: <Music className="w-5 h-5" />, text: "Jazz Pianist" }, // Tetap di sini, digabungkan dengan hidden skills
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
              Physics student bridging science and technology
            </h2>
          </motion.div>

                    <motion.div
                        className="space-y-6 text-slate-700 leading-relaxed text-lg mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}
                    >
                        <p>
                            I'm currently pursuing my Bachelor's degree in Physics at Institut Teknologi Bandung, where I work as a Research Assistant focusing on Petroleum Engineering. My research applies Machine Learning techniques to reservoir modeling, analyzing dynamic and seismic datasets to enhance predictive analytics and reservoir understanding.
                        </p>
                        <p>
                            Alongside research, I serve as a Consulting Associate at Ganesha Student Innovation Center (GSIC), developing a data-driven labor market analysis system for Indonesia's Ministry of Manpower. My technical journey spans autonomous robotics at Unit Robotika ITB, where I program with ROS and OpenCV, and embedded systems development at Aksantara ITB, building STM32-based ESC firmware for UAVs.
                        </p>
                        <p className="italic opacity-90">
                            Beyond technical work, I lead as Head of Academy at ITBJazz and Head of Alumni Relations at HIMAFI ITB. My background includes quantum physics research at BRIN, implementing reinforcement learning for solar tracking, and mentoring students as a physics lab assistant—each experience shaping my interdisciplinary approach to problem-solving.
                        </p>
                    </motion.div>

                    {/* LAYOUT: Foto dan Timeline Bersebelahan dengan Jarak */}
                    <div className="grid grid-cols-1 md:grid-cols-[260px_minmax(0,1fr)] lg:grid-cols-[300px_minmax(0,1fr)] gap-10 lg:gap-16 items-start justify-items-center md:justify-items-start mb-24">
                        {/* FOTO SECTION */}
                        <motion.div
                            className="space-y-6 w-full"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group w-full max-w-[240px] md:max-w-[260px] lg:max-w-[300px] mx-auto md:mx-0">
                                <img
                                    src={profilePhoto}
                                    alt="Dietrich Tarigan"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 via-transparent to-transparent"></div>
                                <div className="absolute inset-0 rounded-3xl ring-1 ring-cyan-200/30"></div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 w-full max-w-[260px] lg:max-w-[300px] mx-auto md:mx-0">
                                {interests.map((interest, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 px-3 py-2.5 glass-strong rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="text-cyan-600 flex-shrink-0">{interest.icon}</div>
                                        <span className="text-slate-700 text-xs leading-tight" style={{ fontFamily: 'var(--font-outfit)' }}>{interest.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* TIMELINE SECTION */}
                        <motion.div
                            className="w-full"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="mb-8 text-slate-800 text-2xl" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 500 }}>My Journey</h3>
                            <div className="space-y-8">
                                {(showAllJourney ? journey : journey.slice(0, 4)).map((item, index) => (
                                    <motion.div
                                        key={`${item.role}-${item.year}`}
                                        className="relative pl-10 pb-8 border-l-2 border-cyan-200/60 last:border-transparent last:pb-0"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        {/* Titik timeline - posisi di samping garis */}
                                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 border-4 border-white shadow-md shadow-cyan-400/30"></div>
                                        
                                        {/* Konten timeline */}
                                        <div className="ml-2">
                                            <div className="text-cyan-600 mb-2 text-sm font-medium tracking-wide" style={{ fontFamily: 'var(--font-outfit)' }}>{item.year}</div>
                                            <h4 className="text-slate-800 mb-1 text-lg font-medium" style={{ fontFamily: 'var(--font-outfit)' }}>{item.role}</h4>
                                            <div className="text-cyan-600 mb-3 text-sm" style={{ fontFamily: 'var(--font-outfit)' }}>{item.company}</div>
                                            <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}>{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            {journey.length > 4 && (
                                <button
                                    type="button"
                                    onClick={() => setShowAllJourney((prev) => !prev)}
                                    className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-cyan-300 text-cyan-700 hover:bg-cyan-50 transition-colors"
                                    style={{ fontFamily: 'var(--font-outfit)', fontWeight: 500 }}
                                >
                                    {showAllJourney ? (
                                        <>
                                            Show less
                                            <ChevronUp className="w-4 h-4" />
                                        </>
                                    ) : (
                                        <>
                                            Show full journey
                                            <ChevronDown className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            )}
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
                "I believe in combining theoretical knowledge with practical applications. Whether it's 
                applying machine learning to reservoir modeling or developing autonomous systems, I'm 
                driven by curiosity and the desire to create meaningful solutions."
              </p>
              <p className="text-cyan-200/70 text-sm tracking-wider">— Dietrich Tarigan</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}