import './Projects.css'
import data from '../../../../data/projects_brief.json';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TechsGallery } from '../TechsGallery/TechsGallery';

interface projectBrief{
  title:string;
  description:string;
  projectId:number;
  techs?:string[];
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
          <div className='project_info_container'>
            <h2 className='project_title'>{project.title}</h2>
            <p>{project.description}</p>
            <Link to={`/project/${project.projectId}`}>
              <p className='link'>ver proyecto</p>
            </Link>
          </div>
          <div className='project_things_container'>
            {project.techs != undefined && <TechsGallery techs={project.techs}/>}
          </div>
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