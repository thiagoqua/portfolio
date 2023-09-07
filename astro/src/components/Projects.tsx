import data from "../data/es/projects_brief.json";
import { useEffect, useRef, useState } from "react";
import { TechsGallery } from "./TechsGallery";

interface projectBrief {
  title: string;
  description: string;
  projectId: number;
  techs?: string[];
}

export default function Projects() {
  const [seeingAll, setSeingAll] = useState<boolean>(false);
  const [listing, setListing] = useState<projectBrief[]>([]);
  const allProjects = useRef<projectBrief[]>([]);

  useEffect(() => {
    Object.assign(allProjects.current, data);
    setListing(allProjects.current.slice(0, 3));
  }, []);

  useEffect(() => {
    if (seeingAll) setListing(allProjects.current);
  }, [seeingAll]);

  return (
    <div className="projects" id="projects">
      <h1 className="section_header">Proyectos</h1>
      {listing.map((project: projectBrief) => (
        <div className="project" key={project.projectId}>
          <div className="project_info_container">
            <h2 className="project_title">{project.title}</h2>
            <p>{project.description}</p>
            <a href={`/project/${project.projectId}`}>
              ver proyecto
            </a>
          </div>
          {project.techs && (
            <div className="project_things_container">
              <TechsGallery techs={project.techs} />
            </div>
          )}
        </div>
      ))}
      {!seeingAll && (
        <button onClick={() => setSeingAll(true)} className="button">
          Ver todos
        </button>
      )}
    </div>
  );
}
