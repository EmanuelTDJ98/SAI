import React from "react";
import { motion } from "framer-motion";

// --- INTERFAZ DE TIPADO ---
interface SectorData {
  title: string;
  text: string;
  width: string; // Controla la longitud visual de la barra
}

// --- DATOS PROPORCIONADOS ---
const sectorsList: SectorData[] = [
  {
    title: "Corporativos y Oficina",
    text: "Torres empresariales, centros de negocios y espacios corporativos que requieren climatización de alto rendimiento.",
    width: "100%",
  },
  {
    title: "Industria y Manufactura",
    text: "Plantas de producción, almacenes y naves industriales con necesidades específicas de control ambiental.",
    width: "95%",
  },
  {
    title: "Salud y Hospitales",
    text: "Instalaciones médicas que demandan precisión en temperatura y calidad de aire para áreas críticas.",
    width: "90%",
  },
  {
    title: "Hotelería y Turismo",
    text: "Hoteles, resorts y complejos turísticos donde el confort del huésped es fundamental.",
    width: "85%",
  },
  {
    title: "Educación",
    text: "Universidades, escuelas y centros educativos que buscan ambientes óptimos para el aprendizaje.",
    width: "80%",
  },
];

export const Sectors: React.FC = () => {
  return (
    <section className="py-28 bg-slate-600 relative overflow-hidden">
      
      {/* --- FONDO TÉCNICO (Cuadrícula sutil) --- */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#00ced1 1px, transparent 1px), linear-gradient(90deg, #00ced1 1px, transparent 1px)', 
             backgroundSize: '45px 45px' 
           }} 
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- TÍTULO SUPERIOR IZQUIERDO --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none">
            Sectores que <br />
            <span className="text-sai-turquesa italic">Atendemos</span>
          </h2>
          <div className="h-2 w-32 bg-sai-turquesa mt-6 rounded-full shadow-[0_0_20px_rgba(0,206,209,0.4)]" />
        </motion.div>

        {/* --- LISTADO DE BARRAS DE INFORMACIÓN --- */}
        <div className="space-y-20 max-w-6xl">
          {sectorsList.map((sector, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="group"
            >
              {/* Bloque de Texto: Título y Descripción */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6 items-start">
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-sai-turquesa transition-colors duration-300">
                    {sector.title}
                  </h3>
                </div>
                <div className="md:col-span-8 border-l-2 border-white/5 pl-6">
                  <p className="text-gray-400 text-lg font-light leading-relaxed group-hover:text-gray-200 transition-colors">
                    {sector.text}
                  </p>
                </div>
              </div>

              {/* Barra de Progreso Industrial */}
              <div className="relative h-2.5 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5 shadow-inner">
                
                {/* Relleno Turquesa con Gradiente y Animación de entrada */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: sector.width }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 2, 
                    delay: index * 0.2, 
                    ease: [0.16, 1, 0.3, 1] // Ease-out suave y profesional
                  }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-950 via-sai-turquesa to-white rounded-full shadow-[0_0_15px_rgba(0,206,209,0.3)]"
                />

                {/* Efecto de "Reflejo de Escaneo" infinito */}
                <motion.div 
                  animate={{ x: ["-100%", "400%"] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 5, 
                    ease: "linear", 
                    delay: index * 0.5 
                  }}
                  className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};