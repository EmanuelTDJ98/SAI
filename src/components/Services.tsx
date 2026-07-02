import { motion } from "framer-motion";
// Recuerda importar tu imagen de la carpeta assets o public
// import QuienesSomosImg from "../assets/Fhotos/tu-imagen.jpg";
import Servicios from "../assets/SAI-Servicios.png";
import Plano from "../assets/PlanoIngenieria.png";
import Equipo from "../assets/EquipoAire.jpg";
import instalacion from "../assets/Instalador.jpg";
import mantenimiento from "../assets/Mantenimiento.jpg";

const services = [
  {
    title: "Proyectos e Ingeniería",
    description:
      "Diseño técnico personalizado de sistemas HVAC-R. Cálculo de cargas térmicas, selección de equipos y planos de instalación según normativa vigente.",
    image: Plano,
  },
  {
    title: "Venta de Equipos",
    description:
      "Suministro de equipos de climatización de marcas líderes. Asesoría especializada para seleccionar la solución más eficiente para su proyecto",
    image: Equipo,
  },
  {
    title: "Instalaciones Profesionales",
    description:
      "Montaje e instalación de sistemas completos con personal certificado. Puesta en marcha, pruebas de rendimiento y entrega llave en mano.",
    image: instalacion,
  },
  {
    title: "Mantenimiento Preventivo",
    description:
      "Planes de mantenimiento programado para garantizar eficiencia y vida útil. Servicio técnico especializado disponible 24/7 para emergencias.",
    image: mantenimiento,
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* --- TÍTULO MONUMENTAL --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-6xl font-black text-[#22d3ee] tracking-tighter leading-none select-none">
            Quiénes Somos
          </h2>
        </motion.div>

        {/* --- BLOQUE QUIÉNES SOMOS (1/3 TEXTO | 2/3 IMAGEN) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-32">
          {/* LADO IZQUIERDO: TEXTO (1/3) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1 space-y-6 text-gray-500 text-lg"
          >
            <p className="leading-relaxed">
              <span className="text-sai-turquesa font-bold">SAI</span> es una
              empresa líder en soluciones integrales de climatización,
              especializada en el diseño, instalación y mantenimiento de
              sistemas <span className="text-black font-semibold">HVAC-R</span>{" "}
              para el sector comercial e industrial.
            </p>
            <p className="leading-relaxed">
              Con un equipo de ingenieros certificados y técnicos
              especializados, garantizamos eficiencia energética, confort
              térmico y operación continua de sus instalaciones.
            </p>
            <p className="leading-relaxed border-l-4 border-sai-turquesa pl-6 py-2">
              Nuestra experiencia abarca desde pequeñas oficinas hasta grandes
              complejos industriales, siempre con el más alto estándar de
              calidad.
            </p>
          </motion.div>

          {/* LADO DERECHO: IMAGEN (2/3) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
             className="md:col-span-2 relative w-full h-auto"
          >
            <div className="absolute inset-0 bg-white border-2 border-slate-100 rounded-[2rem] shadow-xl translate-x-4 translate-y-4" />
            <img
              src={Servicios}
              alt="Ingeniería SAI"
              className="w-full h-full object-cover rounded-3xl relative z-10  transition-all duration-700"
            />
          </motion.div>
        </div>

        {/* --- GRID DE SERVICIOS (4 COLUMNAS) --- */}
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-sai-turquesa mb-2">
            Soluciones Profesionales en Climatización
          </h3>
          <div className="h-1 w-20 bg-sai-turquesa mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-slate-900 border border-white/5 rounded-2xl transition-all group"
            >
              {/* --- CONTENEDOR DE IMAGEN DEL SERVICIO --- */}
              <div className="relative h-52 w-full overflow-hidden rounded-xl mb-6 bg-slate-100 shadow-inner border border-slate-200/50">
                <img
                  src={service.image}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                {/* Overlay Turquesa sutil en hover */}
                <div className="absolute inset-0 bg-sai-turquesa/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
