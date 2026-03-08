"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const values = [
  {
    title: "Integridad",
    description:
      "Actuamos con honestidad y transparencia en cada interacción, cumpliendo nuestros compromisos y construyendo relaciones basadas en la confianza.",
    iconName: "tabler:shield-heart",
  },
  {
    title: "Innovación Constante",
    description:
      "Exploramos continuamente nuevas tecnologías y metodologías para ofrecer soluciones creativas que marquen la diferencia.",
    iconName: "tabler:rocket",
  },
  {
    title: "Excelencia Técnica",
    description:
      "Nos comprometemos con los más altos estándares de calidad en cada línea de código, cada diseño y cada entrega.",
    iconName: "tabler:award",
  },
  {
    title: "Colaboración",
    description:
      "Trabajamos como un equipo unido con nuestros clientes, fomentando la comunicación abierta y la co-creación de soluciones.",
    iconName: "tabler:users-group",
  },
  {
    title: "Responsabilidad",
    description:
      "Asumimos la responsabilidad de nuestro trabajo y su impacto, protegiendo los datos y la confianza de quienes trabajan con nosotros.",
    iconName: "tabler:certificate",
  },
  {
    title: "Pasión por el Aprendizaje",
    description:
      "Cultivamos una cultura de aprendizaje continuo, manteniéndonos a la vanguardia en un mundo tecnológico en constante evolución.",
    iconName: "tabler:book",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function MissionVision() {
  return (
    <section id="mission-vision" className="py-24 md:py-32 bg-primary">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Nuestra Identidad
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Misión, Visión y Valores
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Los pilares que guían cada decisión, cada línea de código y cada
            relación que construimos.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative p-8 md:p-10 bg-card rounded-2xl border border-border overflow-hidden group hover:border-accent/40 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-blue-400" />
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0">
                <Icon icon="tabler:target-arrow" className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold">Nuestra Misión</h3>
            </div>
            <p className="text-muted leading-relaxed">
              Diseñar y desarrollar soluciones digitales innovadoras, escalables y de
              alta calidad que impulsen el crecimiento de empresas y emprendimientos en
              Ecuador y Latinoamérica. Combinamos excelencia técnica con un profundo
              entendimiento de las necesidades de nuestros clientes para transformar
              ideas en productos tecnológicos que generen impacto real.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative p-8 md:p-10 bg-card rounded-2xl border border-border overflow-hidden group hover:border-accent/40 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-accent" />
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0">
                <Icon icon="tabler:eye" className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold">Nuestra Visión</h3>
            </div>
            <p className="text-muted leading-relaxed">
              Ser la empresa de desarrollo de software de referencia en Ecuador,
              reconocida por nuestra capacidad de innovación, la calidad de nuestras
              soluciones y el compromiso con el éxito de nuestros clientes.
              Aspiramos a liderar la transformación digital en la región,
              construyendo tecnología que conecte, empodere y eleve el potencial
              de las organizaciones.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Nuestros <span className="text-accent">Valores</span>
          </h3>
          <p className="mt-3 text-muted max-w-xl mx-auto">
            Los principios fundamentales que definen nuestra cultura y guían
            nuestro trabajo diario.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-7 bg-card rounded-2xl border border-border hover:border-accent/40 transition-all duration-300"
            >
              <div className="w-11 h-11 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Icon icon={value.iconName} className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
              <p className="text-muted text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
