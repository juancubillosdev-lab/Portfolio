import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Portafolio",
      description: "Portafolio personal creado con React.js y Tailwind CSS.",
      image: "./images/portfolio.png",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Figma",
        "Git",
        "HTML",
        "CSS",
      ],
      category: "Full-Stack",
      url: "https://tu-portfolio.com",
      github: "https://github.com/tu-usuario/portfolio",
    },
    {
      title: "Grower App",
      description:
        "Aplicación de gestión de cultivos con visualizaciones interactivas.",
      image: "./images/grower-app-dashboard.png",
      technologies: ["Vue.js", "PHP", "SQL", "Docker", "Git", "HTML", "CSS"],
      category: "Full-Stack",
      url: "https://www.growerapp.co/",
      github: "https://github.com/JuanCubillosA/GrowerAppCE",
    },
    {
      title: "GrowerApp Mobile",
      description:
        "Aplicación móvil para gestión de cultivos con visualizaciones interactivas.",
      image: "./images/grower-monitoreo.png",
      technologies: ["React Native", "SQLite", "Docker", "Git", "HTML", "CSS"],
      category: "Full-Stack",
      url: "https://www.growerapp.co/",
      github: "https://github.com/JuanCubillosA/GrowerAppMonitoreo",
    },
    {
      title: "Grower App Produccion",
      description:
        "Aplicacion movil para la gestion de cultivos registro de corte y produccion.",
      image:
        "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NjQ3MjQ4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "Node.js", "SQL"],
      category: "Full-Stack",
      url: "https://www.growerapp.co/",
      github: "https://github.com/JuanCubillosA/GrowerAppCorteRA",
    },
    {
      title: "BlumSales",
      description:
        "ERP gestion de inventarios ventas y compras conectado a un sistema de corte de cultivos e interfaces ICA.",
      image: "./images/blum-dashboard.png",
      technologies: [
        "Vue.js",
        "PHP",
        "SQL",
        "Docker",
        "Git",
        "HTML",
        "CSS",
        "Jquery",
        "Bootstrap",
      ],
      category: "Full-Stack",
      url: "https://blumsales.com",
      github: "hhttps://github.com/JuanCubillosA/BlumSales",
    },
    {
      title: "Login - Register - Auth - Dashboard",
      description:
        "Aplicación del clima con pronósticos detallados y localización.",
      image:
        "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0NzQxMjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: [
        "React",
        "Nest Js",
        "Node.js",
        "Tailwind",
        "Figma",
        "Git",
        "HTML",
        "CSS",
      ],
      category: "Frontend",
      url: "https://auth-dashboard.com",
      github: "https://github.com/tu-usuario/auth-dashboard",
    },
  ];

  const categories = ["All", "Full-Stack", "Frontend", "Backend"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center">Proyectos</h2>
          <p className="text-center text-[var(--color-muted-foreground)] mb-12 max-w-2xl mx-auto">
            Una selección de trabajos recientes que demuestran mis capacidades
          </p>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg transition-all ${
                  filter === category
                    ? "bg-[var(--color-foreground)] text-[var(--color-background)]"
                    : "border border-[var(--color-border)] hover:bg-[var(--color-muted)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                {/* Image */}
                <div className="aspect-video bg-[var(--color-muted)] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="mb-2">{project.title}</h4>
                  <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-[var(--color-muted)] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-muted)] transition-colors"
                    >
                      <ExternalLink size={16} />
                      Ver más
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-muted)] transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
