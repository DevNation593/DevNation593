"use client";

import { Icon } from "@iconify/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Dirección */}
          <div>
            <a href="#" className="text-xl font-bold tracking-tight">
              Dev<span className="text-accent">Nation</span>593
            </a>
            <p className="mt-3 text-muted text-sm leading-relaxed">
              Ingeniando el Futuro. Soluciones digitales innovadoras para empresas que buscan crecer.
            </p>
            <div className="mt-5 space-y-3">
              <div className="flex items-start gap-3">
                <Icon icon="tabler:map-pin" className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <p className="text-muted text-sm">Quito, Ecuador</p>
              </div>
              <div className="flex items-center gap-3">
                <Icon icon="tabler:mail" className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:contactos@devnation593.com" className="text-muted text-sm hover:text-white transition-colors">
                  contactos@devnation593.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon icon="tabler:phone" className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+593000000000" className="text-muted text-sm hover:text-white transition-colors">
                  +593 00 000 0000
                </a>
              </div>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Navegación</h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "Nosotros" },
                { href: "/mision-vision", label: "Misión y Visión" },
                { href: "#services", label: "Servicios" },
                { href: "/portafolio", label: "Portafolio" },
                { href: "#why-us", label: "¿Por qué elegirnos?" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Servicios</h4>
            <ul className="space-y-3">
              {[
                "Desarrollo Web",
                "Desarrollo Móvil",
                "Soluciones en la Nube",
                "Diseño UI/UX",
                "Software a Medida",
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-muted text-sm hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Redes */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="/politica-privacidad" className="text-muted text-sm hover:text-white transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="/terminos-condiciones" className="text-muted text-sm hover:text-white transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="/politica-cookies" className="text-muted text-sm hover:text-white transition-colors">
                  Política de Cookies
                </a>
              </li>
              <li>
                <a href="/proteccion-datos" className="text-muted text-sm hover:text-white transition-colors">
                  Protección de Datos
                </a>
              </li>
            </ul>

            <h4 className="text-sm font-semibold uppercase tracking-wider mt-8 mb-4">Síguenos</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/devnation593"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-card border border-border rounded-lg flex items-center justify-center hover:border-accent/40 transition-colors"
                aria-label="GitHub"
              >
                <Icon icon="simple-icons:github" className="w-4 h-4 text-muted hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com/company/devnation593"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-card border border-border rounded-lg flex items-center justify-center hover:border-accent/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Icon icon="simple-icons:linkedin" className="w-4 h-4 text-muted hover:text-white transition-colors" />
              </a>
              <a
                href="https://wa.me/593000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-card border border-border rounded-lg flex items-center justify-center hover:border-accent/40 transition-colors"
                aria-label="WhatsApp"
              >
                <Icon icon="simple-icons:whatsapp" className="w-4 h-4 text-muted hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Technologies Strip */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted uppercase tracking-wider font-semibold mb-4 text-center">Tecnologías que usamos</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { name: "Node.js", color: "#339933", iconName: "simple-icons:nodedotjs" },
              { name: "Next.js", color: "#FFFFFF", iconName: "simple-icons:nextdotjs" },
              { name: "Docker", color: "#2496ED", iconName: "simple-icons:docker" },
              { name: "AWS", color: "#FF9900", iconName: "simple-icons:amazonwebservices" },
              { name: "PostgreSQL", color: "#4169E1", iconName: "simple-icons:postgresql" },
              { name: "MongoDB", color: "#47A248", iconName: "simple-icons:mongodb" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 text-muted hover:text-white transition-colors"
                title={tech.name}
              >
                <Icon icon={tech.iconName} className="w-5 h-5" style={{ color: tech.color }} />
                <span className="text-xs font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            &copy; {currentYear} DevNation593. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
