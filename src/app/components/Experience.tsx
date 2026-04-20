export default function Experience() {
  const experiences = [
    {
      title: "Research Intern",
      organization: "BRIN",
      description: "Worked with magnetic and electronic measurement workflows, supported MOKE-related setup, helped with Helmholtz coil parameter checks, and built Python tools for Keithley-based I–V measurements and laboratory support."
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
