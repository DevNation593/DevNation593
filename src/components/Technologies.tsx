"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const technologies = [
  { name: "React", color: "#61DAFB", iconName: "simple-icons:react" },
  { name: "Node.js", color: "#339933", iconName: "simple-icons:nodedotjs" },
  { name: "Next.js", color: "#FFFFFF", iconName: "simple-icons:nextdotjs" },
  { name: "Docker", color: "#2496ED", iconName: "simple-icons:docker" },
  { name: "AWS", color: "#FF9900", iconName: "simple-icons:amazonwebservices" },
  { name: "PostgreSQL", color: "#4169E1", iconName: "simple-icons:postgresql" },
  { name: "MongoDB", color: "#47A248", iconName: "simple-icons:mongodb" },
  { name: "TailwindCSS", color: "#06B6D4", iconName: "simple-icons:tailwindcss" },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 md:py-32 bg-darker">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Stack Tecnológico
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Tecnologías que Usamos
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Aprovechamos las tecnologías más recientes y confiables para entregar
            soluciones de alta calidad y rendimiento.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="group flex flex-col items-center justify-center p-8 bg-card rounded-2xl border border-border hover:border-accent/30 transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${tech.color}15`, color: tech.color }}
              >
                <Icon icon={tech.iconName} className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-muted group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
