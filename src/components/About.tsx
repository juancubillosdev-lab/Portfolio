import { motion } from "motion/react";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Code2,
      title: "Código limpio",
      description: "Arquitecturas escalables",
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Soluciones creativas",
    },
    {
      icon: Rocket,
      title: "Rendimiento",
      description: "Optimización continua",
    },
    { icon: Users, title: "Colaboración", description: "Trabajo en equipo" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[var(--color-muted)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-16 text-center">Sobre mí</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-card)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1615285307672-09b361d7c61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGV2ZWxvcGVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NDc4MDM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Developer workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-lg mb-6">
                Desarrollador Full-Stack apasionado por crear aplicaciones web
                modernas, escalables y centradas en el usuario. Con experiencia
                en tecnologías frontend y backend, me especializo en transformar
                ideas en productos digitales de alto impacto.
              </p>
              <p className="text-lg mb-6 text-[var(--color-muted-foreground)]">
                Mi enfoque se basa en la combinación de código limpio, diseño
                intuitivo y las mejores prácticas de desarrollo para entregar
                soluciones que superan las expectativas.
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 border border-[var(--color-border)] rounded-lg">
                  <div className="text-2xl mb-1">3+</div>
                  <div className="text-sm text-[var(--color-muted-foreground)]">
                    Años de experiencia
                  </div>
                </div>
                <div className="px-4 py-2 border border-[var(--color-border)] rounded-lg">
                  <div className="text-2xl mb-1">10+</div>
                  <div className="text-sm text-[var(--color-muted-foreground)]">
                    Proyectos completados
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:shadow-lg transition-all"
              >
                <value.icon className="mb-4" size={32} strokeWidth={1.5} />
                <h4 className="mb-2">{value.title}</h4>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
