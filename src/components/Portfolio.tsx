"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const projects = [
  {
    title: "FinTrack Pro",
    description:
      "Una plataforma integral de gestión financiera con analíticas en tiempo real, reportes automatizados y soporte multi-moneda para empresas en crecimiento.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    gradient: "from-blue-600/20 to-cyan-600/20",
  },
  {
    title: "NuVet",
    description:
      "Un SaaS para clínicas veterinarias con gestión de pacientes, historiales clínicos, agenda de citas, facturación y seguimiento de tratamientos en una sola plataforma.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS"],
    gradient: "from-emerald-600/20 to-teal-600/20",
    demoUrl: "https://nuvet.devnation593.com",
  },
  {
    title: "Psychology Clinic SaaS",
    description:
      "Un SaaS para clínicas psicológicas con gestión de pacientes, expedientes clínicos, programación de sesiones, seguimiento de terapias y reportes de progreso.",
    technologies: ["React", "TailwindCSS", "PostgreSQL", "AWS"],
    gradient: "from-purple-600/20 to-pink-600/20",
    demoUrl: "https://psic.devnation593.com/",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-primary">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Nuestro Trabajo
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Proyectos Destacados
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Una selección de proyectos que demuestran nuestra experiencia y compromiso
            con la entrega de productos digitales excepcionales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-card rounded-2xl border border-border hover:border-accent/40 overflow-hidden transition-all duration-300"
            >
              {/* Preview area */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
                  backgroundSize: "24px 24px"
                }} />
                <div className="relative text-3xl font-bold text-white/30 group-hover:text-white/50 transition-colors">
                  {project.title.charAt(0)}{project.title.split(" ")[1]?.charAt(0) || ""}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 bg-accent/10 text-accent rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {"demoUrl" in project && project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-white bg-accent/10 hover:bg-accent px-4 py-2 rounded-lg transition-all duration-200"
                  >
                    <Icon icon="tabler:external-link" className="w-4 h-4" />
                    Ver Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
