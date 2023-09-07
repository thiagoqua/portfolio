import { useEffect } from "react";

export default function Navbar({ inProjectPage }: { inProjectPage: boolean }) {
  useEffect(() => {
    const navbar: HTMLElement = document.getElementById("navbar") as HTMLElement;
    const hideOnHeight: number = inProjectPage ? 80 : 600;

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

  return !inProjectPage ? 
        <div className="navbar blur_in" id="navbar">
          <a href="#about">about</a>
          <a href="#personal">personal info</a>
          <a href="#skills">skills</a>
          <a href="#projects">proyects</a>
        </div> : 
        
        <div className="navbar-project">
          <a href="/" className="navbar-project" id="navbar">
            home
          </a>
        </div>
}
