export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl text-gray-900 mb-10">A path that became clearer over time</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <div className="text-gray-700 space-y-4" style={{ lineHeight: '1.7' }}>
            <p>
              My path into physics did not begin in a perfectly straight line. I spent a lot of
              time around control systems, electronics, programming, and technical student projects
              before I understood more clearly what kind of work I wanted to grow into.
            </p>
            <p>
              During my internship at BRIN, I worked with magnetic and electronic measurement workflows,
              and that experience changed something for me.
            </p>
          </div>

          <div className="text-gray-700 space-y-4" style={{ lineHeight: '1.7' }}>
            <p>
              It was the first time I felt that building systems and doing physics could meet in
              the same place. Since then, I have been trying to move more seriously toward quantum
              devices, low-dimensional systems, and experimental research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
