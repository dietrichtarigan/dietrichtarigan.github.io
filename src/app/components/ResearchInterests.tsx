export default function ResearchInterests() {
  const interests = [
    {
      title: "Quantum Devices",
      description: "I am interested in how quantum systems are built, measured, and understood through real devices."
    },
    {
      title: "Nanoelectronics",
      description: "I want to understand how materials and device structures shape electronic behavior at small scales."
    },
    {
      title: "Experimental Condensed Matter Physics",
      description: "I am drawn to careful experiments that connect physical intuition with measurement."
    },
    {
      title: "Scientific Instrumentation",
      description: "I enjoy building tools that make laboratory work more reliable and useful."
    },
    {
      title: "Measurement Automation",
      description: "I like designing workflows for data acquisition, logging, and experiment support."
    },
    {
      title: "Low-Dimensional Electronic Systems",
      description: "I am curious about how reduced dimensionality opens new physical behavior and device possibilities."
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
