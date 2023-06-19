import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../json/projects.json";
import "./Project.css";
import Navbar from "../../components/Navbar";

type Project = {
  projectId: number;
  projectName: string;
  githubLink: string;
  description: string;
  techUsed?: string[];
  langUsed: string[];
  databaseUsed?: string;
};

export default function Project(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const id: number | undefined = params.id ? parseInt(params.id) : undefined;
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    if (id == undefined || id < 1 || id > 5) navigate("/");

    let projects: Project[] = [];
    Object.assign(projects, data);
    const projectFromData: Project = projects.find(
      (pr: Project) => pr.projectId == id
    )!;
    setProject(projectFromData);
  }, []);

  return (
    <div className="circle-in-animation-shorter main">
      <Navbar inProjectPage={true}/>
      <h1>{project?.projectName}</h1>
      <a href={project?.githubLink} target="_blank">GitHub</a>
      <h2>Descripción</h2>
      <p dangerouslySetInnerHTML={{ __html: project?.description! }}/>
      <div className='used-things'>
        {project?.techUsed && (
          <div className="section" key={project.projectId}>
            <h2>Tecnologías utilizadas</h2>
            <ul>
              {project.techUsed.map((tech: string) => (
                <li>
                  <h4>{tech}</h4>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="section">
        <h2>Lenguajes utilizados</h2>
          <ul>
            {project?.langUsed.map((lang: string) => (
              <li>
                <h4>{lang}</h4>
              </li>
            ))}
          </ul>
        </div>
        {project?.databaseUsed && (
          <div className="section">
            <h2>Base de datos</h2>
            <ul>
              <li>
                <h4>{project.databaseUsed}</h4>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
