import { Cpu, Code2, FlaskConical, Wrench, Award, ExternalLink } from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      title: "Simulation",
      icon: Cpu,
      items: ["MuMax3 (GPU micromagnetics)", "LLG equation solvers", "GPU cluster job management"]
    },
    {
      title: "Programming",
      icon: Code2,
      items: ["Python (NumPy, pandas, matplotlib, OpenCV, PyVISA)", "C++ (ImGui, SFML)", "Embedded C (Arduino, ESP32)"]
    },
    {
      title: "Experimental",
      icon: FlaskConical,
      items: ["Polar MOKE microscopy", "I–V & FET characterization", "Helmholtz coil calibration"]
    },
    {
      title: "Tools",
      icon: Wrench,
      items: ["Git", "LaTeX", "GPIB / PyVISA", "Linux / HPC"]
    }
  ];

  const relevantCertifications = [
    {
      title: "Modern Topics in Condensed Matter Physics",
      issuer: "University of Colorado Boulder · Coursera",
      link: "https://coursera.org/share/2d823502665ba69e4ee7b201d0035a30"
    },
    {
      title: "Introduction to Quantum Information",
      issuer: "KAIST · Coursera",
      link: "https://coursera.org/share/d08361620156673e60535ddf44f5ec37"
    }
  ];

  return (
    <section id="certifications" className="py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl text-gray-900 mb-10">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div key={index} className="p-6 bg-white rounded-lg border border-gray-200">
                <div className="w-10 h-10 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#1e3a8a]" />
                </div>
                <h3 className="text-lg text-gray-900 mb-3">{group.title}</h3>
                <ul className="text-sm text-gray-600 space-y-1.5">
                  {group.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <h3 className="text-lg text-gray-900 mb-6">Relevant coursework</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {relevantCertifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-[#1e3a8a] hover:shadow-md transition-all flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center group-hover:bg-[#1e3a8a] transition-colors flex-shrink-0">
                  <Award className="w-5 h-5 text-[#1e3a8a] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg text-gray-900 mb-1 group-hover:text-[#1e3a8a] transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-sm text-gray-600">{cert.issuer}</div>
                </div>
              </div>

              <div className="mt-auto pt-3 flex items-center gap-1 text-[#1e3a8a] text-sm">
                <span>View Certificate</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
