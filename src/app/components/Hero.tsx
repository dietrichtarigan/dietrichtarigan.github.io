import profileImage from "../../imports/WhatsApp_Image_2026-04-13_at_4.19.05_PM.jpeg";

export default function Hero() {
  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1Q41BNiGLUxicsiqvFuU14vr-ATra1WuH/view?usp=sharing', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-6" style={{ lineHeight: '1.15', letterSpacing: '-0.025em' }}>
              Physics undergraduate working on skyrmion physics in van der Waals magnets.
            </h1>

            <p className="text-lg text-gray-700 mb-10" style={{ lineHeight: '1.7' }}>
              I'm Dietrich Pepalem Tarigan, a final-year Physics undergraduate at Institut Teknologi
              Bandung working on micromagnetic simulation of skyrmion nucleation in Fe₃GaTe₂, a
              van der Waals ferromagnet, for my undergraduate thesis under Prof. Agung Nugroho (ITB)
              and Dr. Joko Suwardy (BRIN). My work combines GPU-accelerated LLG simulation (MuMax3)
              with magneto-optical characterization (polar MOKE). I will be conducting research at
              AMEX Lab (Advanced Materials and Extreme Conditions), POSTECH, on transport
              measurements in topological and van der Waals magnetic materials.
            </p>

            <div className="flex gap-4">
              <a
                href="#research"
                className="px-6 py-3 bg-[#1e3a8a] text-white rounded-md hover:bg-[#1e40af] transition-colors"
              >
                View Research
              </a>
              <button
                onClick={handleDownloadCV}
                className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-md hover:bg-gray-50 transition-colors"
              >
                Download CV
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-80 h-80 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <img
                src={profileImage}
                alt="Dietrich Pepalem Tarigan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
