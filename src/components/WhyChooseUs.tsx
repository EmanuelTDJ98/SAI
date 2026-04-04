import React from "react";
import { motion } from "framer-motion";

// --- DATOS DEL PROCESO (Eje de flechas) ---
// Definimos el color degradado de cada paso para replicar la imagen
const processSteps = [
  { title: "Diagnóstico", color: "bg-[#2f4f63]" },
  { title: "Diseño", color: "bg-[#3f6b86]" },
  { title: "Instalación", color: "bg-[#4f87a8]" },
  { title: "Soporte", color: "bg-[#5fa3c9]" },
];

// --- DATOS DE VENTAJAS COMPETITIVAS ---
const advantages = [
  "Ingenieros certificados con más de 10 años de experiencia",
  "Garantía extendida en equipos e instalaciones",
  "Tecnología de última generación para máxima eficiencia",
  "Cumplimiento estricto de normativas NOM y códigos locales",
  "Respuesta rápida y servicio técnico 24/7",
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-28 bg-white overflow-hidden relative">
      {/* --- FONDO DINÁMICO --- */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sai-turquesa/10 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Título de la Sección */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        ></motion.div>
        {/* --- TÍTULO MONUMENTAL (Mismo estilo que secciones anteriores) --- */}
        <h2 className="text-4xl md:text-5xl font-light text-[#22d3ee] mb-12">
          Por Qué Elegir SAI
        </h2>

        {/* --- GRID ASIMÉTRICO (Línea de Proceso | Tarjeta) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LADO IZQUIERDO: PROCESO (8 Columnas) */}
          <div className="lg:col-span-8 space-y-12 pr-6">
            <h3 className="text-3xl font-bold text-black">
              Nuestro Proceso de Ingeniería
            </h3>

            {/* Generador de Flechas Dinámicas */}
            {/* --- LÍNEAS DE PROCESO CORREGIDAS --- */}
            {/* Añadimos 'space-y-[-2px]' para que las barras se superpongan ligeramente y no haya huecos */}
            <div className="flex flex-col gap-6 max-w-4xl">
              <h3 className="text-2xl font-bold text-black mb-8 border-b border-white/10 pb-4">
                Nuestro Proceso de Ingeniería
              </h3>

              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  /* Usamos 'z-index' progresivo para controlar la superposición */
                  className={`${step.color} text-white px-6 py-4`}
                  style={{ width: `${60 + index * 10}%` }}
                >
                  <p
                    className={`text-xl font-bold ${index === 3 ? "text-slate-950" : "text-white"} z-20`}
                  >
                    <span className="opacity-50 mr-3 text-sm">
                      0{index + 1}
                    </span>
                    {step.title}
                  </p>

                  {/* Flecha */}
                  <div
                    className="absolute right-[-39px] top-0 w-0 h-0 
             border-t-[32px] border-b-[32px] border-l-[40px] 
             border-t-transparent border-b-transparent"
                    style={{
                      borderLeftColor: "inherit", // Esto hace que tome el color de la barra automáticamente
                      zIndex: 10,

                    }}
                  />

                  {/* Efecto de brillo en el último paso */}
                  {index === 3 && (
                    <div className="absolute inset-0 bg-sai-turquesa blur-md opacity-30 -z-10 animate-pulse" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Texto Descriptivo Inferior (de la imagen) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-gray-400 text-lg leading-relaxed italic max-w-3xl pt-8 border-t border-white/5"
            >
              Nuestro proceso garantiza resultados óptimos en cada proyecto,
              desde la evaluación inicial hasta el soporte postventa.
            </motion.p>
          </div>

          {/* LADO DERECHO: TARJETA DE VENTAJAS (4 Columnas) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-4 bg-slate-900 border border-white/10 p-10 rounded-3xl relative overflow-hidden"
          >
            {/* Efecto de borde turquesa "eléctrico" */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-sai-turquesa/10 blur-[50px] rounded-full" />

            <div className="space-y-8 relative z-10">
              {/* Título de la Tarjeta */}
              <h4 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">
                Ventajas
                <br />
                <span className="text-sai-turquesa">Competitivas</span>
              </h4>

              {/* Lista de Ventajas (con punto turquesa) */}
              <ul className="space-y-6 text-gray-300 text-lg">
                {advantages.map((adv, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    {/* Punto Turquesa de identidad SAI */}
                    <div className="w-2.5 h-2.5 bg-sai-turquesa rounded-full mt-2 flex-shrink-0" />
                    <p className="flex-1">{adv}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
