import type {LangContent} from "../types/pageInfoType"
import es from "../data/es/projects_brief.json";
import en from "../data/en/projects_brief.json";

export function evalProjectLang(lang:string){
  if(lang == 'es')
    return {
      description:"Descripción",
      techUsed:"Tecnologías utilizadas",
      langUsed:"Lenguajes utilizados",
      dbUsed: "Bases de datsos",
      stillDev:"Este proyecto continúa bajo desarrollo."
    }
  else 
    return {
      description:"Description",
      techUsed:"Techs used",
      langUsed:"Languages used",
      dbUsed: "Databases",
      stillDev:"This project is still in development."
    }
}

export function evalNavbarLang(lang:string){
  if(lang == 'es')
    return {
      about:"sobre mi",
      personal:"info personal",
      skills:"habilidades",
      projects: "proyectos"
    }
  else 
    return {
      about:"about me",
      personal:"personal info",
      skills:"skills",
      projects: "projects"
    }
}

export function evalGalleryLang(lang:string){
  if(lang == 'es')
    return {
      data:es,
      projectsTitle: "Proyectos",
      seeAll: "Ver todos",
      seeProject: "ver proyecto"
    }
  else 
    return {
      data:en,
      projectsTitle: "Projects",
      seeAll: "See all",
      seeProject: "see project"
    }
}