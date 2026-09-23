import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-10 px-4"
    >
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-10 rounded-2xl shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-4">Sobre Mí</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Hola, soy{" "}
              <span className="text-indigo-400 font-semibold">
                Héctor Díaz Rafael Rodríguez
              </span>
              , un desarrollador apasionado por el ecosistema{" "}
              <span className="text-indigo-400 font-semibold">Backend</span>. Me
              especializo en la creación de arquitecturas robustas utilizando{" "}
              <span className="text-indigo-400 font-semibold">
                Node.js y JavaScript
              </span>
              , con un fuerte enfoque en el diseño de{" "}
              <span className="text-indigo-400 font-semibold">APIs REST</span>{" "}
              eficientes y la gestión optimizada de
              <span className="text-indigo-400 font-semibold">
                {" "}
                bases de datos
              </span>{" "}
              relacionales y no relacionales.
            </p>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              Mi objetivo es escribir código limpio, escalable y mantenible,
              siempre buscando resolver problemas complejos con soluciones
              elegantes. Me encuentro en constante aprendizaje, explorando
              nuevas tecnologías para seguir aportando valor en cada proyecto
              que emprendo.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
