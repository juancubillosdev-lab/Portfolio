import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  const socials = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:developer@example.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-muted)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--color-foreground)] rounded-lg"></div>
              <span className="font-light">Portafolio Developer</span>
            </div>
            <p className="text-sm text-[var(--color-muted-foreground)]">
              Desarrollador Full-Stack creando experiencias web excepcionales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4">Sígueme</h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-card)] transition-colors"
                >
                  <social.icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[var(--color-border)] text-center">
          <p className="text-sm text-[var(--color-muted-foreground)] flex items-center justify-center gap-2">
            © {currentYear} Portafolio Developer. Hecho con
            <Heart size={16} className="fill-current" />
            y código limpio.
          </p>
        </div>
      </div>
    </footer>
  );
}
