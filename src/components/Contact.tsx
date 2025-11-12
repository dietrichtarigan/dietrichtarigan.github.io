import { motion } from "motion/react";
import { Mail, MapPin, Send, ArrowRight, Coffee } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { BackgroundArt } from "./BackgroundArt";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert("Thanks for reaching out! I'll get back to you soon. ☕");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email me",
      value: "tarigandietrich@gmail.com",
      href: "mailto:tarigandietrich@gmail.com",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Bandung, West Java",
      href: "#",
      color: "from-slate-600 to-slate-700"
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      label: "Coffee chat",
      value: "+62-895-3928-47376",
      href: "tel:+6289539284376",
      color: "from-amber-400 to-amber-600"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", handle: "/dietrich-tarigan", url: "https://linkedin.com/in/dietrich-tarigan" },
    { name: "GitHub", handle: "@dietrich-tarigan", url: "#" },
    { name: "Email", handle: "tarigandietrich@gmail.com", url: "mailto:tarigandietrich@gmail.com" },
    { name: "WhatsApp", handle: "+62-895-3928-47376", url: "https://wa.me/6289539284376" }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <BackgroundArt section="contact" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-amber-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-teal-600 mb-2 tracking-widest uppercase text-sm" style={{ fontFamily: 'var(--font-urbanist)', fontWeight: 500, letterSpacing: '0.1em' }}>Get in touch</p>
            <h2 className="mb-4 text-slate-800 text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-urbanist)', fontWeight: 600 }}>Let's create something amazing together</h2>
            <p className="text-slate-700 max-w-2xl mx-auto text-lg" style={{ fontFamily: 'var(--font-urbanist)', fontWeight: 300, letterSpacing: '0.01em' }}>
              Whether you have a project in mind, want to collaborate, or just want to say hi—
              I'd love to hear from you. I usually respond within 24 hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="mb-6 text-slate-800 text-xl" style={{ fontFamily: 'var(--font-urbanist)', fontWeight: 500 }}>Reach out via</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={index}
                      href={method.href}
                      className="group flex items-start gap-4 p-4 rounded-xl glass-strong hover:bg-white/40 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} text-white flex items-center justify-center flex-shrink-0`}>
                        {method.icon}
                      </div>
                      <div>
                        <div className="text-slate-500 mb-1">{method.label}</div>
                        <div className="text-slate-800 group-hover:text-teal-600 transition-colors">
                          {method.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-slate-800 text-xl" style={{ fontFamily: 'var(--font-urbanist)', fontWeight: 500 }}>Follow along</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="group flex items-center justify-between p-3 rounded-lg glass hover:bg-white/30 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div>
                        <span className="text-slate-800">{social.name}</span>
                        <span className="text-slate-500 ml-2">{social.handle}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-slate-700 via-slate-800 to-teal-900 rounded-2xl text-white">
                <p className="mb-2">Currently available for</p>
                <p className="mb-4">Freelance projects & consulting</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
                  <span className="text-white/60">Available now</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-strong p-8 md:p-10 rounded-3xl border border-cyan-200/40 shadow-xl">
                <h3 className="mb-6 text-slate-800 text-2xl" style={{ fontFamily: 'var(--font-urbanist)', fontWeight: 500 }}>Send a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-slate-700" style={{ fontFamily: 'var(--font-urbanist)', letterSpacing: '0.02em' }}>
                      Your name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-slate-700">
                      Email address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-slate-700">
                      Your message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="bg-white resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white group"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-slate-300/50">
                  <p className="text-slate-500 text-center">
                    Prefer email? Drop me a line at{" "}
                    <a href="mailto:tarigandietrich@gmail.com" className="text-teal-600 hover:text-teal-700 hover:underline">
                      tarigandietrich@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}