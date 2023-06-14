import './Projects.css'
import data from '../../json/projects_brief.json';
import { useEffect, useRef, useState } from 'react';

interface projectBrief{
  title:string;
  description:string;
  projectId:number;
}

export default function Projects():JSX.Element{
  const [seeingAll,setSeingAll] = useState<boolean>(false);
  const [listing,setListing] = useState<projectBrief[]>([]);
  const allProjects = useRef<projectBrief[]>([]);

  useEffect(() => {
    Object.assign(allProjects.current,data);
    setListing(allProjects.current.slice(0,3));
  },[]);

  useEffect(() => {
    if(seeingAll)
      setListing(allProjects.current);
  },[seeingAll])
  
  return (
    <div className='projects' id='projects'>
      <h1 className="section_header">Proyectos</h1>
      {listing.map((project:projectBrief) => (
        <div className='project' key={project.projectId}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {/* <Link to={`/project/${project.projectId}`}>
            <a>ver proyecto</a>
          </Link> */}
        </div>
        )
      )}
      {!seeingAll && 
        <button onClick={() => setSeingAll(true)}>
          Ver todos
        </button>
      }
    </div>
  )
}