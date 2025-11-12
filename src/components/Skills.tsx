import { motion } from "motion/react";
import { Code2, Cpu, Zap, Users, Rocket, FlaskConical } from "lucide-react";
import { BackgroundArt } from "./BackgroundArt";

export function Skills() {
  const skillSets = [
    {
      category: "Programming",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-cyan-500 via-sky-500 to-blue-500",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++ / Embedded C", level: 85 },
        { name: "R", level: 75 },
        { name: "MATLAB", level: 80 }
      ]
    },
    {
      category: "Robotics & Embedded",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-slate-600 via-slate-700 to-slate-800",
      skills: [
        { name: "ROS (Robot Operating System)", level: 80 },
        { name: "STM32 / ESP32", level: 85 },
        { name: "Raspberry Pi", level: 88 },
        { name: "OpenCV", level: 82 }
      ]
    },
    {
      category: "Data Science & ML",
      icon: <FlaskConical className="w-6 h-6" />,
      color: "from-amber-400 via-amber-500 to-orange-500",
      skills: [
        { name: "Scikit-learn", level: 85 },
        { name: "Pandas", level: 88 },
        { name: "Data Visualization", level: 82 },
        { name: "Machine Learning", level: 80 }
      ]
    },
    {
      category: "Leadership & Soft Skills",
      icon: <Users className="w-6 h-6" />,
      color: "from-sky-500 via-cyan-500 to-teal-600",
      skills: [
        { name: "Team Leadership", level: 92 },
        { name: "Project Management", level: 90 },
        { name: "Cross-Functional Collaboration", level: 88 },
        { name: "Mentoring", level: 85 }
      ]
    }
  ];

  const tools = [
    { name: "Python", icon: <div className="w-8 h-8 flex items-center justify-center text-blue-500">🐍</div> },
    { name: "ROS", icon: <Rocket className="w-8 h-8 text-slate-700" /> },
    { name: "MATLAB", icon: <div className="w-8 h-8 flex items-center justify-center text-orange-600">M</div> },
    { name: "AutoCAD", icon: <div className="w-8 h-8 flex items-center justify-center text-red-500">CAD</div> },
    { name: "STM32", icon: <Cpu className="w-8 h-8 text-blue-600" /> },
    { name: "SketchUp", icon: <div className="w-8 h-8 flex items-center justify-center text-cyan-600">SU</div> }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <BackgroundArt section="skills" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-cyan-600 mb-2 tracking-wider uppercase text-sm" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 500 }}>What I do best</p>
            <h2 className="mb-4 text-slate-800 text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 500 }}>Skills & Expertise</h2>
            <p className="text-slate-700 max-w-2xl mx-auto text-lg" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}>
              A blend of physics, programming, and engineering to bring innovative solutions to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skillSets.map((set, index) => (
              <motion.div
                key={index}
                className="glass-strong p-8 rounded-3xl border border-cyan-200/40 hover:shadow-xl hover:border-cyan-300/60 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${set.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {set.icon}
                  </div>
                  <h3 className="text-slate-900 text-xl" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 500 }}>{set.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {set.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className={`px-4 py-2.5 rounded-xl bg-gradient-to-br ${set.color} bg-opacity-10 border border-slate-200/50 hover:border-cyan-300/50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-default`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-slate-700" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 500 }}>
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-slate-200 p-8"
          >
            <p className="text-center text-slate-600 mb-6">Tools I work with daily</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-2 group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                    {tool.icon}
                  </div>
                  <span className="text-slate-600">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}