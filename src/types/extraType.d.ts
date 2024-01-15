export interface Extras {
  project: Project;
  navbar:  Navbar;
  gallery: Gallery;
  cv:      Cv;
  skills:  Skills;
}

export interface Cv {
  downloadText: string;
  downloadLink: string;
}

export interface Gallery {
  projectsTitle: string;
  seeAll:        string;
  seeProject:    string;
}

export interface Navbar {
  about:    string;
  skills:   string;
  projects: string;
}

export interface Project {
  description: string;
  techUsed:    string;
  langUsed:    string;
  dbUsed:      string;
  stillDev:    string;
}

export interface Skills {
  lang: string;
  db:   string;
}
