import { useEffect } from "react";

export default function Navbar(): JSX.Element {
  
  useEffect(() => {
      const navbar:HTMLElement = document.getElementById("navbar") as HTMLElement;
      
      setTimeout(() => {
        navbar!.classList.remove("blur_in");
      }, 2000);
    
      if (window.innerWidth > 540) {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 600) {
            navbar!.classList.add("scrolled");
            navbar!.classList.remove("scroll_on_top");
          } else {
            navbar!.classList.remove("scrolled");
            navbar!.classList.add("scroll_on_top");
          }
        });
      }
    },[]);

    return (
    <div className="navbar blur_in" id="navbar">
      <a href="#about">about</a>
      <a href="#personal">personal info</a>
      <a href="#skills">skills</a>
      <a href="#projects">proyects</a>
    </div>
  );
}
