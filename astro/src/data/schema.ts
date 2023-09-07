export interface LangContent {
  about:         string;
  academies:     Academies;
  languages:     Languages;
  interests:     Interests;
  disponibility: Disponibility;
  skills:        Skills;
  see_project:   string;
  see_all:       string;
}

export interface Academies {
  title:   string;
  content: AcademiesContent;
}

export interface AcademiesContent {
  secondary: Disponibility;
  tertirary: Tertirary;
}

export interface Disponibility {
  title:   string;
  content: string;
}

export interface Tertirary {
  title:            string;
  content:          string;
  academic_history: string;
}

export interface Interests {
  title:   string;
  content: ContentElement[];
}

export interface ContentElement {
  title:    string;
  content?: string[];
}

export interface Languages {
  title:   string;
  content: LanguagesContent;
}

export interface LanguagesContent {
  spanish: Disponibility;
  english: Disponibility;
}

export interface Skills {
  title: string;
}
