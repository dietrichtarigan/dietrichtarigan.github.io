import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl text-gray-900 mb-8">Get in touch</h2>

        <p className="text-lg text-gray-700 mb-10 max-w-2xl" style={{ lineHeight: '1.7' }}>
          If you'd like to talk about research, projects, or possible collaboration, feel free to reach out.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <a
            href="mailto:tarigandietrich@gmail.com"
            className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-[#1e3a8a] hover:shadow-md transition-all flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center group-hover:bg-[#1e3a8a] transition-colors flex-shrink-0">
              <Mail className="w-6 h-6 text-[#1e3a8a] group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Email</div>
              <div className="text-gray-900 break-words">tarigandietrich@gmail.com</div>
            </div>
          </a>

          <a
            href="https://github.com/dietrichtarigan"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-[#1e3a8a] hover:shadow-md transition-all flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center group-hover:bg-[#1e3a8a] transition-colors flex-shrink-0">
              <Github className="w-6 h-6 text-[#1e3a8a] group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">GitHub</div>
              <div className="text-gray-900">dietrichtarigan</div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/dietrich-tarigan-766a641b7"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-[#1e3a8a] hover:shadow-md transition-all flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center group-hover:bg-[#1e3a8a] transition-colors flex-shrink-0">
              <Linkedin className="w-6 h-6 text-[#1e3a8a] group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">LinkedIn</div>
              <div className="text-gray-900">dietrich-tarigan</div>
            </div>
          </a>

          <div className="p-6 bg-white rounded-lg border border-gray-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Location</div>
              <div className="text-gray-900">Bandung, Indonesia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
