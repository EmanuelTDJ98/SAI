import React from "react";
import { motion } from "framer-motion";
import LOGO from "../assets/SAILogo.png"; // Asegúrate de la ruta de tu logo
import imagenF from "../assets/footer.jpg"; // Asegúrate de la ruta de tu imagen de contacto

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 pt-28 pb-10 overflow-hidden border-t border-white/5">
      
      {/* --- TÍTULO CENTRAL --- */}
      <div className="container mx-auto px-6 mb-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter"
        >
          Contáctanos
        </motion.h2>
        <div className="h-1.5 w-32 bg-sai-turquesa mx-auto mt-4 rounded-full shadow-[0_0_15px_#00ced1]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* --- LADO IZQUIERDO: IMAGEN VERTICAL --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 h-[400px] lg:h-[600px] rounded-3xl overflow-hidden relative shadow-2xl border border-white/5"
          >
            <img 
              src={imagenF}
              alt="Instalaciones SAI" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* --- LADO DERECHO: CONTENIDO --- */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            
            {/* Texto de Evaluación */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Solicite una <br />
                <span className="text-sai-turquesa underline decoration-white/10 italic">Evaluación sin Costo</span>
              </h3>
              <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                <p>
                  Nuestros especialistas están listos para analizar sus necesidades de climatización y ofrecerle la mejor solución técnica y económica para su proyecto.
                </p>
                <p>
                  Ya sea un nuevo proyecto o la modernización de sistemas existentes, en <span className="text-white font-medium italic">SAI</span> tenemos la experiencia y capacidad para garantizar resultados excepcionales.
                </p>
              </div>
            </motion.div>

            {/* Recuadro de Información de Contacto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-sm border border-sai-turquesa/20 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
            >
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h4 className="text-xl font-black text-white uppercase tracking-widest border-l-4 border-sai-turquesa pl-4">
                    SAI – Soluciones en <br /> Acondicionamiento Integral
                  </h4>
                  <div className="space-y-3 pt-4">
                    <p className="text-gray-400 hover:text-sai-turquesa transition-colors">
                      <span className="text-white font-bold block text-xs uppercase opacity-50 mb-1 tracking-widest">Email</span>
                      <a href="mailto:eskenazinissim@gmail.com" className="text-lg">eskenazinissim@gmail.com</a>
                    </p>
                    <p className="text-gray-400">
                      <span className="text-white font-bold block text-xs uppercase opacity-50 mb-1 tracking-widest">Teléfonos</span>
                      <span className="flex flex-wrap gap-x-4 text-lg">
                        <a href="tel:5611161985" className="hover:text-sai-turquesa transition-colors">56 1116 1985</a>
                        <span className="text-white/10">|</span>
                        <a href="tel:5576573821" className="hover:text-sai-turquesa transition-colors">55 7657 3821</a>
                      </span>
                    </p>
                  </div>
                </div>

                <div className="space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-gray-400">
                      <span className="text-white font-bold block text-xs uppercase opacity-50 mb-1 tracking-widest">Horario</span>
                      <span className="text-lg">Lunes a Viernes 8:00 - 18:00 hrs</span>
                    </p>
                    <div className="bg-white border border-sai-turquesa/30 p-4 rounded-2xl">
                      <p className="text-sai-turquesa text-sm font-black uppercase tracking-wider animate-pulse text-center">
                        Servicio 24/7: Emergencias y mantenimiento
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- CRÉDITOS FINALES --- */}
        <div className="mt-28 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <img src={LOGO} alt="SAI Logo" className="h-10 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
          <p className="text-gray-600 text-sm font-light">
            © {currentYear} SAI Ingeniería. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-gray-500 text-xs uppercase tracking-widest">
            <span className="hover:text-white cursor-pointer transition-colors">Aviso de Privacidad</span>
            <span className="hover:text-white cursor-pointer transition-colors">Términos</span>
          </div>
        </div>
      </div>

      {/* Brillo de fondo */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sai-turquesa/10 blur-[150px] rounded-full pointer-events-none" />
    </footer>
  );
};