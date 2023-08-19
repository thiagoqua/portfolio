import './Projects.css'
import data from '../../data/projects_brief.json';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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
      <h1 className='section_header'>Proyectos</h1>
      {listing.map((project:projectBrief) => (
        <div className='project' key={project.projectId}>
          <h2 className='project_title'>{project.title}</h2>
          <p>{project.description}</p>
          <Link to={`/project/${project.projectId}`}>
            <p className='link'>ver proyecto</p>
          </Link>
        </div>
        )
      )}
      {!seeingAll && 
        <button onClick={() => setSeingAll(true)} className='button'>
          Ver todos
        </button>
      }
    </div>
  )
}