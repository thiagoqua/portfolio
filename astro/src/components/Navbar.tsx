import { useEffect } from "react";

interface Props{
  inProjectPage:boolean;
  lang:string;
}

function evalLang(lang:string){
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

export default function Navbar(props:Props) {
  const {about,personal,skills,projects} = evalLang(props.lang);

  useEffect(() => {
    const navbar: HTMLElement = document.getElementById("navbar") as HTMLElement;
    const hideOnHeight: number = props.inProjectPage ? 80 : 600;

    setTimeout(() => {
      navbar!.classList.remove("blur_in");
    }, 2000);

    if (window.innerWidth > 540) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > hideOnHeight) {
          navbar!.classList.add("scrolled");
          navbar!.classList.remove("scroll_on_top");
        } else {
          navbar!.classList.remove("scrolled");
          navbar!.classList.add("scroll_on_top");
        }
      });
    }
  }, []);

  return !(props.inProjectPage) ? 
        <div className="navbar blur_in" id="navbar">
          <a href="#about">{about}</a>
          <a href="#personal">{personal}</a>
          <a href="#skills">{skills}</a>
          <a href="#projects">{projects}</a>
        </div> : 
        
        <div className="navbar blur_in">
          <a href="/" id="navbar">
            home
          </a>
        </div>
}
