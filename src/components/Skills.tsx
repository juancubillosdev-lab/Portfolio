import { motion } from 'motion/react';
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Smartphone,
  GitBranch,
  Terminal,
  Layers
} from 'lucide-react';

export function Skills() {
  const skills = [
    { name: 'Vue.js', icon: Code2, category: 'Frontend' },
    { name: 'React', icon: Code2, category: 'Frontend' },
    { name: 'JavaScript', icon: Terminal, category: 'Frontend' },
    { name: 'Node.js', icon: Server, category: 'Backend' },
    { name: 'PHP', icon: Server, category: 'Backend' },
    { name: 'SQL', icon: Database, category: 'Database' },
    { name: 'SQLite', icon: Database, category: 'Database' },
    { name: 'REST APIs', icon: Globe, category: 'Backend' },
    { name: 'Responsive Design', icon: Smartphone, category: 'Frontend' },
    { name: 'Git & GitHub', icon: GitBranch, category: 'Tools' },
    { name: 'Docker', icon: Layers, category: 'DevOps' },
    { name: 'TypeScript', icon: Terminal, category: 'Frontend' },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center">Habilidades</h2>
          <p className="text-center text-[var(--color-muted-foreground)] mb-16 max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo para crear soluciones completas
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:shadow-lg transition-all cursor-pointer text-center"
              >
                <skill.icon className="mx-auto mb-3" size={32} strokeWidth={1.5} />
                <div className="mb-1">{skill.name}</div>
                <div className="text-xs text-[var(--color-muted-foreground)]">{skill.category}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
