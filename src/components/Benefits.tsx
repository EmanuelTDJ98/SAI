import React from "react";
import { motion } from "framer-motion";
import Beneficio1 from "../assets/beneficios1.jpg";
import Beneficio2 from "../assets/beneficios2.jpg";
import Beneficio3 from "../assets/beneficios3.jpg";

// --- DATOS DE LAS TARJETAS (PARTE INFERIOR) ---
interface BenefitCard {
  number: string;
  title: string;
  description: string;
}

const benefits: BenefitCard[] = [
  {
    number: "01",
    title: "Mayor vida de los equipos",
    description: "Nuestros planes de mantenimiento preventivo evitan fallas críticas, prolongan el funcionamiento y reducen reemplazos innecesarios.",
  },
  {
    number: "02",
    title: "Confort Óptimo",
    description: "Control preciso de temperatura y humedad para ambientes de trabajo productivos y saludables.",
  },
  {
    number: "03",
    title: "Confiabilidad",
    description: "Equipos de alto rendimiento con respaldo técnico garantizado y repuestos certificados siempre disponibles.",
  },
  {
    number: "04",
    title: "Soporte Técnico",
    description: "Atención al cliente 24/7 y respuesta rápida ante cualquier emergencia o necesidad.",
  },
];

export const Benefits: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-white py-20 flex flex-col">
      
      {/* --- PARTE SUPERIOR (1/3): TRÍPTICO DE IMÁGENES --- */}
      <div className="h-[35vh] w-full px-6 md:px-12 grid grid-cols-3 gap-4 mb-10">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="h-full w-full rounded-2xl overflow-hidden border border-white/5 shadow-2xl"
          >
            <img 
              src={i === 1 ? Beneficio1 : i === 2 ? Beneficio2 : Beneficio3} // Asegúrate de tener estas imágenes
              alt={`Beneficio SAI ${i}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </div>

      {/* --- PARTE CENTRAL (CENTRO-DERECHA): TÍTULO --- */}
      <div className="flex-grow flex items-center justify-end px-12 lg:px-24 py-12">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-right"
        >
          <h2 className="text-5xl md:text-7xl font-black text-black leading-tight">
            Beneficios de <br />
            <span className="text-sai-turquesa italic">Nuestros Sistemas</span>
          </h2>
          <div className="h-1.5 w-48 bg-sai-turquesa ml-auto mt-4 rounded-full shadow-[0_0_20px_#00ced1]" />
        </motion.div>
      </div>

      {/* --- PARTE INFERIOR (1/3): 4 TARJETAS --- */}
      <div className="w-full px-6 lg:px-12 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-slate-900 border-l-4 border-sai-turquesa p-8 rounded-tr-3xl rounded-br-3xl hover:bg-slate-800 transition-all group"
            >
              <span className="text-white font-black text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
                {item.number}
              </span>
              <h4 className="text-xl font-bold text-white mt-4 mb-3 uppercase tracking-tight">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decoración de fondo sutil */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-sai-turquesa/5 blur-[120px] -z-10" />
    </section>
  );
};