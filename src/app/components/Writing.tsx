export default function Writing() {
  const writings = [
    "Quantum Technology Magazine (GRAVITON)",
    "Notes on Learning Physics",
    "Future Essays and Reflections"
  ];

  return (
    <section id="writing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl text-gray-900 mb-8">Writing and reflection</h2>

        <p className="text-gray-700 leading-relaxed mb-12 max-w-3xl">
          I also care about writing as a way to understand where I stand. Through editorial work
          and student writing, I've tried to think more seriously about why quantum technology
          matters and what kind of work I want to dedicate myself to.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
          {writings.map((writing, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-gray-900">{writing}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
