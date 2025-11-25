import { motion } from "motion/react";
import { ArrowUpRight, Zap, Activity, Waves, Plane, Atom, Sparkles, Database, Code2, Cpu } from "lucide-react";
import { Badge } from "./ui/badge";
import { BackgroundArt } from "./BackgroundArt";

export function Projects() {
  const projects = [
    {
      title: "Health Monitoring System",
      subtitle: "IoT solution for pressure ulcer prevention",
      description: "Led cross-disciplinary team in designing smart health monitoring system with ESP32, multiple sensors, and AI-optimized web dashboard. Secured 4th place in national competition.",
      icon: <Activity className="w-12 h-12" />,
      tags: ["IoT", "Healthcare", "Team Lead"],
      color: "from-sky-600 via-cyan-600 to-teal-700",
      bgPattern: "radial-gradient(circle at 30% 30%, rgba(14, 165, 233, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)",
      size: "large",
      metrics: "IEEE ITB • 4th Place"
    },
    {
      title: "Underwater Robotics (URO ITB)",
      subtitle: "Autonomous underwater robot development",
      description: "Programming division member developing autonomous control systems using ROS, OOP, and OpenCV for real-time vision processing and navigation in underwater environments.",
      icon: <Waves className="w-12 h-12" />,
      tags: ["ROS", "OpenCV", "Robotics"],
      color: "from-blue-500 via-blue-600 to-cyan-600",
      bgPattern: "radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(8, 145, 178, 0.2) 0%, transparent 50%)",
      size: "medium",
      metrics: "KRBAI Competition"
    },
    {
      title: "Electronic Speed Controller (ESC)",
      subtitle: "UAV firmware development",
      description: "Developing in-house ESC firmware for precise motor control on UAV platforms using STM32 microcontrollers and embedded C with emphasis on real-time feedback and control loop efficiency.",
      icon: <Plane className="w-10 h-10" />,
      tags: ["Embedded C", "STM32", "UAV"],
      color: "from-slate-600 to-slate-800",
      bgPattern: "radial-gradient(circle at 50% 50%, rgba(71, 85, 105, 0.2) 0%, transparent 50%)",
      size: "small",
      metrics: "AKSANTARA ITB"
    },
    {
      title: "Petroleum Engineering Research",
      subtitle: "Reservoir modeling with ML",
      description: "Research on Top-Down Reservoir Modeling and Machine Learning applications to dynamic and seismic reservoir datasets for improved reservoir understanding and predictive analytics.",
      icon: <Database className="w-10 h-10" />,
      tags: ["Machine Learning", "Research", "Data Science"],
      color: "from-emerald-600 via-teal-600 to-cyan-600",
      bgPattern: "radial-gradient(circle at 30% 50%, rgba(5, 150, 105, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)",
      size: "medium",
      metrics: "ITB Research Assistant"
    },
    {
      title: "Labor Market Intelligence",
      subtitle: "Data-driven policy analysis",
      description: "Developing data-driven labor market analysis and policy intelligence system for Ministry of Manpower of Indonesia, combining data analytics with policy insights.",
      icon: <Code2 className="w-10 h-10" />,
      tags: ["Data Analytics", "Policy", "Python"],
      color: "from-violet-600 via-purple-600 to-indigo-600",
      bgPattern: "radial-gradient(circle at 40% 40%, rgba(124, 58, 237, 0.2) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)",
      size: "small",
      metrics: "GSIC - Kemnaker"
    }
  ];

  return (
    <section id="work" className="py-32 relative overflow-hidden">
      <BackgroundArt section="projects" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-cyan-600 mb-2 tracking-wider uppercase text-sm" style={{ fontFamily: 'var(--font-spectral)', fontWeight: 500 }}>Selected works</p>
            <h2 className="mb-4 text-slate-800 text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-spectral)', fontWeight: 600 }}>Projects I'm proud of</h2>
            <p className="text-slate-700 max-w-2xl text-lg" style={{ fontFamily: 'var(--font-spectral)', fontWeight: 400 }}>
              A collection of projects where I've collaborated with amazing teams to create 
              innovative solutions at the intersection of physics, technology, and engineering.
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const gridClass = 
                project.size === "large" ? "md:col-span-2 md:row-span-2" :
                project.size === "medium" ? "md:col-span-1 md:row-span-1" :
                "md:col-span-1 md:row-span-1";

              return (
                <motion.div
                  key={index}
                  className={`group relative ${gridClass} rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-200`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  style={{
                    background: `linear-gradient(135deg, white 0%, rgba(241, 245, 249, 0.8) 100%)`,
                  }}
                >
                  {/* Geometric Background Pattern */}
                  <div 
                    className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    style={{
                      background: project.bgPattern
                    }}
                  />
                  
                  {/* Decorative circles */}
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${project.color})`
                    }}
                  />
                  <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(225deg, ${project.color})`
                    }}
                  />

                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col min-h-[320px]">
                    {/* Icon */}
                    <div 
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.color} text-white flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      {project.icon}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className={`bg-gradient-to-r ${project.color} text-white border-0 shadow-md`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Title & Subtitle */}
                    <h3 className="text-slate-900 mb-2" style={{ fontFamily: 'var(--font-spectral)', fontWeight: 600 }}>{project.title}</h3>
                    <p className="text-slate-600 mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>{project.subtitle}</p>
                    
                    {/* Description - shows on hover */}
                    <p className="text-slate-700 mb-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden" style={{ fontFamily: 'var(--font-spectral)' }}>
                      {project.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200">
                      <span className="text-slate-500 text-sm" style={{ fontFamily: 'var(--font-spectral)' }}>{project.metrics}</span>
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center text-white group-hover:scale-110 transition-all shadow-lg`}>
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-600 mb-4">Interested in collaborating?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-cyan-600 hover:text-sky-600 hover:gap-3 transition-all"
            >
              Let's work together
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}