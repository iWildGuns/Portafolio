//
import { projects } from "../data/projects";
import type { Project } from "../types";

export default function Proyectos() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8">
        Proyectos del curso <span> ReactJs</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: Project) => (
          <div
            key={project.num}
            className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-2"
          >
            <div className=" overflow-hidden">
              <img
                src={`/images/projects/${project.num}.png`}
                alt={project.name}
                className="w-full h-48 hover:scale-110 transition-transform"
              />
            </div>
            <div className=" pb-4 text-center grid grid-rows-2 justify-center">
              <h3 className="text-xl font-semibold ">{project.name}</h3>
              {/* <p className="text-gray-600">{project.url}</p> */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
