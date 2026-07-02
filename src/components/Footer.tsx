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
                <span className="text-sai-turquesa underline decoration-white/10 italic">
                  Evaluación sin Costo
                </span>
              </h3>
              <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                <p>
                  Nuestros especialistas están listos para analizar sus
                  necesidades de climatización y ofrecerle la mejor solución
                  técnica y económica para su proyecto.
                </p>
                <p>
                  Ya sea un nuevo proyecto o la modernización de sistemas
                  existentes, en{" "}
                  <span className="text-white font-medium italic">SAI</span>{" "}
                  tenemos la experiencia y capacidad para garantizar resultados
                  excepcionales.
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
                      <span className="text-white font-bold block text-xs uppercase opacity-50 mb-1 tracking-widest">
                        Email
                      </span>
                      <a
                        href="mailto:eskenazinissim@gmail.com"
                        className="text-lg"
                      >
                        ventas1@saisoluciones.com
                      </a>
                    </p>
                    <p className="text-gray-400">
                      <span className="text-white font-bold block text-xs uppercase opacity-50 mb-1 tracking-widest">
                         CONTACTANOS DANDO CLICK!
                      </span>
                      <span className="flex flex-wrap gap-x-4 text-lg">
                        <a
                          href="tel:5611161985"
                          className="hover:text-sai-turquesa transition-colors"
                        >
                          56 1116 1985
                        </a>
                        <span className="text-white/10">|</span>
                        <a
                          href="tel:5576573821"
                          className="hover:text-sai-turquesa transition-colors"
                        >
                          55 7657 3821
                        </a>
                      </span>
                    </p>
                  </div>
                </div>

                <div className="space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-gray-400">
                      <span className="text-white font-bold block text-xs uppercase opacity-50 mb-1 tracking-widest">
                        Horario
                      </span>
                      <span className="text-lg">
                        Lunes a Viernes 8:00 - 18:00 hrs
                      </span>
                    </p>
                    <motion.a
                      href="https://wa.me/5611161985?text=Hola%20SAI,%20necesito%20asistencia%20con%20un%20servicio%20de%2instalación%20o%20mantenimiento."
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block bg-white border border-sai-turquesa/30 p-4 rounded-2xl shadow-lg hover:shadow-sai-turquesa/20 transition-all group cursor-pointer"
                    >
                      <p className="text-sai-turquesa text-sm font-black uppercase tracking-wider animate-pulse group-hover:animate-none text-center flex items-center justify-center gap-2">
                        {/* Icono opcional de WhatsApp para mejorar la UX */}
                        <svg
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.891-11.891 11.891-2.001 0-3.971-.51-5.713-1.472l-6.28 1.69zm6.273-3.953c1.614.96 3.2 1.488 4.931 1.488 5.437 0 9.857-4.42 9.857-9.857 0-2.633-1.023-5.11-2.881-6.97-1.856-1.857-4.331-2.88-6.963-2.88-5.438 0-9.857 4.419-9.857 9.857 0 1.83.504 3.619 1.458 5.18l-1.01 3.692 3.8-.992z" />
                        </svg>
                        Servicio 24/7: Emergencias y mantenimiento
                      </p>
                    </motion.a>

                    <motion.a
                       href="https://www.facebook.com/share/1DDrEJKy3t/"
                       target="_blank"
                       rel="noopener noreferrer"
                       whileHover={{ scale: 1.05 }}
                       whileTap={{scale: 0.95}}
                       className="block bg-white border border-sai-turquesa/30 p-4 rounded-2xl shadow-lg hover:shadow-sai-turquesa/20 transition-all group cursor-pointer"
                       >
                          <p className ="text-[#1877F2] text-sm font-black uppercase tracking-wider text-center flex items-center justify-center gap-2">
                           {/* Icono de Facebook */}
                           <svg 
                                className="w-5 h-5 fill-current"
                                viewBox="0 0 24 24"
                            >
                              <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c .733 0 1 .591 1 .324v-21c0-.733-.267-1-.324z"/>
                            </svg>
                            Síguenos en Facebook
                          </p>

                       </motion.a>
                    <motion.a
                      href="https://www.instagram.com/saisolucionesacapulco?igsh=ZGh3NGUwajU2cmcy&fbclid=IwY2xjawSzAe1leHRuA2FlbQIxMABicmlkETF4cmUzVkpKdjhWSlJHb0d6c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHq-cbxTRMVw_chM9iwV4rmvNaE79bkC-Ui4-LIAMwr4lL_zBpi1bqGrNcs5k_aem_dKL-6an8wr_OGV0EbfsnsQ"
                      target="_blank"
                      rel= "noonpener noreferrer"
                      whileHover={{ scale: 1.05}}
                      whileTap={{ scale: 0.95}}
                      className="block bg-white border border-sai-turquesa/30 p-4 rounded-2xl shadow-lg hover:shadow-sai-turquesa/20 transition-all group cursor-pointer mt-4"
                      >
                        <p className="text-gray-800 text-sm font-black uppercase tracking-wider text-center flex items-center justify-center gap-2">
                          {/* Icono de Instagram */}
                          <svg 
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient id="instaGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#f58529" />
                                <stop offset="25%" stopColor="#FCAF45" />
                                <stop offset="50%" stopColor="#dd2a7b" />
                                <stop offset="75%" stopColor="#8134af" />
                                <stop offset="100%" stopColor="#8134af" />
                              </linearGradient>
                            </defs>
                            <path         
                            fill="url(#instaGradient)"
                               d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                            />
                               </svg>
                          siguenos en Instagram
                        </p>
                      </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- CRÉDITOS FINALES --- */}
        <div className="mt-28 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <img
            src={LOGO}
            alt="SAI Logo"
            className="h-10 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
          />
          <p className="text-gray-600 text-sm font-light">
            © {currentYear} SAI Ingeniería. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-gray-500 text-xs uppercase tracking-widest">
            <span className="hover:text-white cursor-pointer transition-colors">
              Aviso de Privacidad
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Términos
            </span>
          </div>
        </div>
      </div>

      {/* Brillo de fondo */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sai-turquesa/10 blur-[150px] rounded-full pointer-events-none" />
    </footer>
  );
};
