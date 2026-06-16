export default function Experience() {
  const experiences = [
    {
      title: "Incoming Research Intern",
      organization: "AMEX Lab (Advanced Materials and Extreme Conditions), POSTECH",
      description: "Will be conducting research on transport measurements in topological and van der Waals magnetic materials, under Prof. Jun Sung Kim."
    },
    {
      title: "Research Intern",
      organization: "BRIN",
      description: "Developed a Python instrumentation suite for the Keithley 2450 SMU (GPIB/PyVISA) for automated I–V and FET characterization; built an OpenCV-based ROI analyzer for polar MOKE video measurements of van der Waals magnetic thin films; assisted with Helmholtz coil calibration for out-of-plane field control."
    },
    {
      title: "Teaching Assistant",
      organization: "Electromagnetic Fields",
      description: "Supported undergraduate tutorial sessions and problem-solving discussions in introductory electromagnetics."
    },
    {
      title: "Laboratory Assistant",
      organization: "Introductory Physics 1",
      description: "Helped with experiment preparation, student guidance, basic calibration checks, and lab session support."
    },
    {
      title: "Leadership and Outreach",
      organization: "CareerHIMAFI & GRAVITON",
      description: "Contributed to student initiatives through CareerHIMAFI and helped lead a quantum-technology-themed student magazine, GRAVITON."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl text-gray-900 mb-10">Experience</h2>

        <div className="space-y-8 max-w-4xl">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-[#1e3a8a] pl-6">
              <div className="mb-2">
                <h3 className="text-xl text-gray-900">{exp.title}</h3>
                <div className="text-gray-600">{exp.organization}</div>
              </div>
              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
