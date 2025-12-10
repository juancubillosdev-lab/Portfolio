import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("¡Mensaje enviado! (Modo demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socials = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/juancubillosdev-lab",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/juan-esteban-cubillos-acu%C3%B1a-6812a5356/",
    },
    { icon: Mail, label: "Email", url: "mailto:juancubillosdev@gmail.com" },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center">Contacto</h2>
          <p className="text-center text-[var(--color-muted-foreground)] mb-12 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-foreground)] transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-foreground)] transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-foreground)] transition-all resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-[var(--color-foreground)] text-[var(--color-background)] rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Send size={18} />
                  Enviar mensaje
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="p-8 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <h3 className="mb-6">Conecta conmigo</h3>
                <p className="mb-8 text-[var(--color-muted-foreground)]">
                  Siempre estoy abierto a discutir nuevos proyectos, ideas
                  creativas o oportunidades para formar parte de tu visión.
                </p>

                {/* Social Links */}
                <div className="space-y-4">
                  {socials.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-muted)] transition-colors"
                    >
                      <social.icon size={24} strokeWidth={1.5} />
                      <div>
                        <div className="mb-1">{social.label}</div>
                        <div className="text-sm text-[var(--color-muted-foreground)]">
                          {social.label === "Email"
                            ? "Juancubillosdev@gmail.com"
                            : `juancubillosdev`}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
                  <div className="mb-2">Ubicación</div>
                  <div className="text-sm text-[var(--color-muted-foreground)]">
                    Disponible para trabajo remoto
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
