import { motion } from "framer-motion";
import { skills } from "../data/skills";
import type { Skill } from "../types";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
        Habilidades Tecnicas
      </h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skills.map((skill: Skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="text-center bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img src={skill.image} alt={skill.name} className=" mb-4 mx-auto w-12 h-12" />
            <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
            <span className="inline-block bg-indigo-500/20 text-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded-full border border-indigo-500/30">
              {skill.category}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
