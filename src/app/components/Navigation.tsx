export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl text-gray-900">Dietrich Tarigan</div>

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
