//
import { skills } from "../data/skills";
import type { Skill } from "../types";

export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8">Habilidades</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill: Skill) => (
          <div
            key={skill.name}
            className="bg-white p-2.5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-2"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-gray-600">Nivel: {skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
