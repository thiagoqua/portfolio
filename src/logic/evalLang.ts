import projectsBriefES from "../locales/es/projects_brief.json";
import projectsBriefEN from "../locales/en/projects_brief.json";
import extraES from "../locales/es/extra.json";
import extraEN from "../locales/en/extra.json";
import type { ProjectsBrief } from "../types/projectsBriefType";
import type { 
  Gallery, 
  Cv as CvLang,
  Navbar as NavbarLang, 
  Project as ProjectLang, 
  Skills as SkillsLang
} from "../types/extraType";

interface GalleryLang extends Gallery {
  data: ProjectsBrief[];
}

export function evalProjectLang(lang:string):ProjectLang{
  if(lang == 'es')
    return extraES.project;
  else 
    return extraEN.project;
}

export function evalNavbarLang(lang:string):NavbarLang{
  if(lang == 'es')
    return extraES.navbar;
  else 
    return extraEN.navbar;
}

export function evalGalleryLang(lang:string):GalleryLang{
  if(lang == 'es')
    return {
      data: projectsBriefES,
      ...extraES.gallery
    }
  else 
    return {
      data: projectsBriefEN,
      ...extraEN.gallery
    }
}

export function evalDownloadCVLang(lang:string):CvLang{
  if(lang == 'es')
    return extraES.cv;
  else 
    return extraEN.cv;
}

export function evalSkillsLang(lang:string):SkillsLang{
  if(lang == 'es')
    return extraES.skills;
  else 
    return extraEN.skills;
}