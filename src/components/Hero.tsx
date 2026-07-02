import { motion, useScroll, useTransform } from "framer-motion";
import LOGO from "../assets/SAILogo.png";

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  
  // Rotación del logo
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 720]);
  // Efecto de desvanecimiento
  const opacityText = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-20">
      
      {/* --- FONDO DINÁMICO --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sai-turquesa/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      {/* --- CONTENEDOR PRINCIPAL (GRID / FLEX) --- */}
      <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[80vh]">
        
        {/* --- LADO IZQUIERDO: LOGO SAI --- */}
        <motion.div 
          style={{ rotateY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center min-h-[400px] lg:min-h-full"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] bg-black border-4 border-sai-turquesa rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,1)]">
            <img src={LOGO} alt="SAI Logo" className="w-[80%] h-[80%] object-contain" />
            <div className="absolute inset-0 border-t-4 border-transparent border-l-sai-turquesa rounded-full animate-spin-slow opacity-30" />
          </div>
        </motion.div>

        {/* --- LADO DERECHO: TEXTO PRINCIPAL --- */}
        <motion.div 
          style={{ opacity: opacityText }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left max-w-2xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-[#22d3ee] mb-6 tracking-tight leading-tight"
          >
            SAI<br />
            Soluciones en <br />
            <span className="text-sai-turquesa">Acondicionamiento Integral</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl mb-10 font-light leading-relaxed"
          >
            Expertos en climatización para espacios comerciales e industriales. 
            Desde la ingeniería del proyecto hasta el mantenimiento preventivo. 
            <span className="block mt-2 text-white/70">Creamos ambientes perfectos con tecnología de vanguardia.</span>
          </motion.p>

          {/* Botones (si deseas agregarlos después) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
          </motion.div>
        </motion.div>
      </div>

      {/* --- INDICADOR DE SCROLL --- */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-sai-turquesa rounded-full" />
      </motion.div>
    </section>
  );
};