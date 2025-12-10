import { ArrowRight, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const technologies = [
    "PHP",
    "Nest.js",
    "Node.js",
    "React.js",
    "Next.js",
    "Vue.js",
    "Vite",
    "Tailwind",
    "Docker",
    "Git",
    "Figma",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-muted)]">
            <span className="text-sm">Juan Esteban Cubillos Acuña</span>
          </div>

          <h1 className="mb-6">Desarrollador Full-Stack</h1>

          <p className="text-xl mb-8 text-[var(--color-muted-foreground)] max-w-3xl mx-auto">
            Especializado en crear experiencias web modernas y escalables con
            las últimas tecnologías
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] hover:shadow-md transition-all"
              >
                {tech}
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition-opacity"
            >
              Ver proyectos
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-muted)] transition-colors"
            >
              <Mail size={18} />
              Contactar
            </a>
          </div>
        </motion.div>

        {/* Geometric Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-muted)] rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-muted)] rounded-full blur-3xl opacity-20 -z-10"></div>
      </div>
    </section>
  );
}
