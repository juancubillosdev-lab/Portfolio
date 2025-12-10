import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";

export function Timeline() {
  const events = [
    {
      type: "work",
      title: "Senior Full-Stack Developer",
      company: "IKBO",
      date: "2023 - Presente",
      description:
        "Liderando el desarrollo de aplicaciones web escalables con React, Node.js y bases de datos SQL.",
    },
    {
      type: "work",
      title: "Full-Stack Developer",
      company: "IKBO",
      date: "2021 - 2023",
      description:
        "Desarrollo de soluciones web personalizadas utilizando Vue.js, PHP y SQLite.",
    },
    {
      type: "education",
      title:
        "Certificación Avanzada en JavaScript, HTML,CSS, REACT, NODEJS, TYPESCRIPT, VUEJS, DOCKER, SQL, MONGODB, ",
      company: "Online Academy",
      date: "2022",
      description:
        "Especialización en JavaScript moderno, frameworks y arquitecturas avanzadas.",
    },
    {
      type: "work",
      title: "Junior Developer",
      company: "StartUp Web",
      date: "2019 - 2021",
      description:
        "Desarrollo frontend y backend de aplicaciones web, colaboración en equipos ágiles.",
    },
    {
      type: "education",
      title: "Especialización en Desarrollo Web",
      company: "Universidad Cooperativa de Colombia",
      date: "2020 - 2021",
      description:
        "Fundamentos en programación, bases de datos, redes y desarrollo de software.",
    },
    {
      type: "education",
      title: "Ingeniería Ambiental",
      company: "Universidad Cooperativa de Colombia",
      date: "2015 - 2019",
    },
  ];

  return (
    <section id="timeline" className="py-24 px-6 bg-[var(--color-muted)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center">Línea de tiempo</h2>
          <p className="text-center text-[var(--color-muted-foreground)] mb-16 max-w-2xl mx-auto">
            Mi trayectoria profesional y académica
          </p>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[var(--color-border)]"></div>

            {/* Events */}
            <div className="space-y-12">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Icon */}
                  <div className="absolute left-0 w-16 h-16 bg-[var(--color-card)] border-2 border-[var(--color-border)] rounded-full flex items-center justify-center">
                    {event.type === "work" ? (
                      <Briefcase size={24} strokeWidth={1.5} />
                    ) : (
                      <GraduationCap size={24} strokeWidth={1.5} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:shadow-lg transition-all">
                    <div className="text-sm text-[var(--color-muted-foreground)] mb-2">
                      {event.date}
                    </div>
                    <h4 className="mb-1">{event.title}</h4>
                    <div className="text-sm mb-3 text-[var(--color-muted-foreground)]">
                      {event.company}
                    </div>
                    <p className="text-sm">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
