import { useEffect } from "react";
import { evalNavbarLang } from "../../logic/evalLang";

interface Props{
  inProjectPage:boolean;
  lang:string;
}

export default function Navbar(props:Props) {
  const {about,skills,projects,experience} = evalNavbarLang(props.lang);

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
          <a href="#experience">{experience}</a>
          <a href="#skills">{skills}</a>
          <a href="#projects">{projects}</a>
        </div> : 
        
        <div className="navbar blur_in">
          <a href={`/${props.lang}/`} id="navbar">
            home
          </a>
        </div>
}
