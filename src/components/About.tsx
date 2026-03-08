"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-darker">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Sobre Nosotros
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
              Excelencia en Ingeniería,{" "}
              <span className="text-accent">Garantizada</span>
            </h2>
            <p className="mt-6 text-muted leading-relaxed">
              DevNation593 es un estudio de desarrollo de software especializado en
              construir aplicaciones escalables y de alto rendimiento. Nuestro equipo de
              ingenieros experimentados combina profunda experiencia técnica con la
              pasión por crear soluciones que marcan la diferencia.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Desde el concepto hasta el despliegue, nos asociamos con empresas para
              transformar ideas en productos digitales robustos utilizando tecnologías
              modernas y mejores prácticas en ingeniería de software.
            </p>
          </motion.div>

          {/* Right — values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                title: "Confiabilidad",
                desc: "Sistemas confiables diseñados para funcionar bajo cualquier carga.",
                iconName: "tabler:shield-check",
              },
              {
                title: "Innovación",
                desc: "Soluciones tecnológicas de vanguardia para desafíos modernos.",
                iconName: "tabler:bulb",
              },
              {
                title: "Calidad",
                desc: "Código limpio, software probado y mantenible.",
                iconName: "tabler:star",
              },
              {
                title: "Escalabilidad",
                desc: "Arquitecturas que crecen con tu negocio.",
                iconName: "tabler:chart-arrows-vertical",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                className="p-5 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors"
              >
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center mb-3">
                  <Icon icon={item.iconName} className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-muted text-xs mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
