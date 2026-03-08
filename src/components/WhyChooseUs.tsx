"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const advantages = [
  {
    title: "Desarrolladores Experimentados",
    description:
      "Nuestros ingenieros senior aportan años de experiencia en la industria a través de diversos stacks tecnológicos y dominios.",
    iconName: "tabler:users-group",
  },
  {
    title: "Arquitectura Escalable",
    description:
      "Diseñamos sistemas que crecen con tu negocio, garantizando rendimiento y confiabilidad a cualquier escala.",
    iconName: "tabler:server-2",
  },
  {
    title: "Desarrollo Ágil",
    description:
      "Sprints iterativos, comunicación transparente y entrega rápida mantienen tu proyecto en marcha.",
    iconName: "tabler:bolt",
  },
  {
    title: "Enfoque en el Cliente",
    description:
      "Tus objetivos son nuestra prioridad. Escuchamos, nos adaptamos y entregamos soluciones alineadas con tu visión.",
    iconName: "tabler:heart-handshake",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-darker">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            ¿Por Qué Nosotros?
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            ¿Por Qué Elegir DevNation593?
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Combinamos excelencia técnica con una mentalidad centrada en el cliente
            para entregar resultados que superan las expectativas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex gap-5 p-8 bg-card rounded-2xl border border-border hover:border-accent/30 transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                <Icon icon={item.iconName} className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
