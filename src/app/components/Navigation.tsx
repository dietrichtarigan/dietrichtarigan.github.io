import profileImage from "../../imports/WhatsApp_Image_2026-04-20_at_7.52.32_PM.jpeg";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="Go to top">
          <span className="block w-11 h-11 rounded-full overflow-hidden border border-gray-200 bg-gray-100 shadow-sm">
            <img
              src={profileImage}
              alt="Dietrich Pepalem Tarigan"
              className="w-full h-full object-cover object-center"
            />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] text-gray-900 font-semibold">Dietrich Pepalem Tarigan</span>
            <span className="block text-[11px] uppercase tracking-[0.14em] text-gray-500">Personal Website</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
          <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">Projects</a>
          <a href="#certifications" className="text-gray-700 hover:text-gray-900 transition-colors">Certifications</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
        </div>

        <a
          href="mailto:tarigandietrich@gmail.com"
          className="px-5 py-2 bg-[#1e3a8a] text-white rounded-md hover:bg-[#1e40af] transition-colors"
        >
          Email Me
        </a>
      </div>
    </nav>
  );
}
