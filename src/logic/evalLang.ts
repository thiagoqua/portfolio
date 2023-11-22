import type {LangContent} from "../types/pageInfoType"
import es from "../data/es/projects_brief.json";
import en from "../data/en/projects_brief.json";

export function evalProjectLang(lang:string){
  if(lang == 'es')
    return {
      description:"Descripción",
      techUsed:"Tecnologías utilizadas",
      langUsed:"Lenguajes utilizados",
      dbUsed: "Bases de datos",
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
      skills:"habilidades",
      projects: "proyectos"
    }
  else 
    return {
      about:"about me",
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

export function evalDownloadCVLang(lang:string){
  if(lang == 'es')
    return {
      downloadText:"descargar CV",
      downloadLink:"/cvs/CV_ThiagoQuaglia.pdf"
    }
  else 
    return {
      downloadText:"download CV",
      downloadLink:"/cvs/CV_ThiagoQuaglia_ENG.pdf"
    }
}

export function evalSkillsLang(lang:string){
  if(lang == 'es')
    return {
      lang:"Lenguajes",
      db:"Bases de datos"
    }
  else 
    return {
      lang:"Languages",
      db:"Databases"
    }
}