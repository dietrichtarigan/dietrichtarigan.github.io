export default function ResearchInterests() {
  const interests = [
    {
      title: "Van der Waals Magnetics & Skyrmion Physics",
      description: "Actively pursued in my undergraduate thesis: micromagnetic simulation of skyrmion and bubble-domain nucleation in Fe₃GaTe₂."
    },
    {
      title: "Transport Measurements in Topological Materials",
      description: "Target of my upcoming research internship at AMEX Lab, POSTECH, on van der Waals and topological magnetic materials."
    },
    {
      title: "Magneto-Optical & Electrical Characterization",
      description: "Developed through my BRIN internship: polar MOKE analysis and Keithley-based I–V/FET measurement instrumentation."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl text-gray-900 mb-10">Current interests</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl text-gray-900">{interest.title}</h3>
              <p className="text-gray-600 leading-relaxed">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
