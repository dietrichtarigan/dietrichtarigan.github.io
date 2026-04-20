import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Deep Learning Specialization",
      issuer: "Taught by DeepLearning.AI offered through Coursera",
      link: "https://coursera.org/share/5d70096a7685223ef1225218a390e086"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Taught by Stanford University and DeepLearning.AI offered through Coursera",
      link: "https://coursera.org/share/a8d3fd08b8a433594109694332191a5b"
    },
    {
      title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
      issuer: "Taught by DeepLearning.AI offered through Coursera",
      link: "https://coursera.org/share/ada3141d15a3768553c4b3bafefe5937"
    },
    {
      title: "Modern Topics in Condensed Matter Physics",
      issuer: "Taught by University of Colorado Boulder offered through Coursera",
      link: "https://coursera.org/share/2d823502665ba69e4ee7b201d0035a30"
    },
    {
      title: "Introduction to Quantum Information",
      issuer: "Taught by Korea Advanced Institute of Science and Technology (KAIST) offered through Coursera",
      link: "https://coursera.org/share/d08361620156673e60535ddf44f5ec37"
    },
    {
      title: "Introduction to Microfabrication",
      issuer: "Taught by University of Minnesota offered through Coursera",
      link: "https://coursera.org/share/e1621242ee6dc7ebcf25c21431b24110"
    },
    {
      title: "Microwave Engineering and Antennas",
      issuer: "Taught by Eindhoven University of Technology offered through Coursera",
      link: "https://coursera.org/share/b0338461a7b2ebbcb79649704dfe3a30"
    },
    {
      title: "Nanotechnology: A Maker's Course",
      issuer: "Taught by Duke University, NC State University, and UNC Chapel Hill offered through Coursera",
      link: "https://coursera.org/share/113e576b807bde35875065ee609e4bd4"
    },
    {
      title: "C Programming: Getting Started - 1",
      issuer: "Taught by Dartmouth College and Institut Mines-Télécom offered through Coursera",
      link: "https://coursera.org/share/e1813f7d78fad70e541b30f8be67438a"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl text-gray-900 mb-10">Certifications</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
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
