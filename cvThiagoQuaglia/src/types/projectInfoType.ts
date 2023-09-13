export interface Project {
  projectId: number;
  projectName: string;
  githubLink: string;
  description: string;
  langUsed: string[];
  techUsed?: string[];
  databaseUsed?: string;
  developing?:boolean;
  demo?:string;
  snapshot?:string;
};