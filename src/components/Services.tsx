"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const services = [
  {
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas y escalables construidas con frameworks de vanguardia y mejores prácticas.",
    iconName: "tabler:world-www",
  },
  {
    title: "Desarrollo Móvil",
    description: "Aplicaciones móviles multiplataforma que ofrecen rendimiento nativo y experiencias fluidas.",
    iconName: "tabler:device-mobile",
  },
  {
    title: "Soluciones en la Nube",
    description: "Arquitectura cloud robusta y estrategias de despliegue para un rendimiento y costo óptimos.",
    iconName: "tabler:cloud-computing",
  },
  {
    title: "Diseño UI/UX",
    description: "Diseño centrado en el usuario y experiencias intuitivas que deleitan y convierten visitantes.",
    iconName: "tabler:palette",
  },
  {
    title: "Software a Medida",
    description: "Soluciones empresariales personalizadas diseñadas para optimizar operaciones e impulsar la eficiencia.",
    iconName: "tabler:code",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-primary">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Lo Que Hacemos
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Nuestros Servicios</h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Ofrecemos servicios de desarrollo de software de principio a fin para ayudarte
            a construir, escalar y triunfar en el panorama digital.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-accent/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <Icon icon={service.iconName} className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
