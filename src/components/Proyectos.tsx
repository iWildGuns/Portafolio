import { motion } from "framer-motion";
import { projects } from "../data/projects";
import type { Project } from "../types";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Proyectos() {
  return (
    <div className="max-w-4xl sm:my-auto mx-auto mt-5">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
        Proyectos <span> Destacados</span>
      </h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project: Project) => (
          <motion.div
            key={project.num}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden shadow-xl transition-all duration-300"
          >
            <div className=" overflow-hidden">
              <img
                src={`/images/projects/${project.num}.png`}
                alt={project.name}
                className="w-full h-48 hover:scale-110 transition-transform"
              />
            </div>
            <div className="p-4 text-center flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold mb-2 text-white">
                {project.name}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors"
              >
                Ver Proyecto
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
