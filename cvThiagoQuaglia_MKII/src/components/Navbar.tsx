import { useEffect } from "react";

export default function Navbar({inProjectPage}:{inProjectPage:boolean}): JSX.Element {  
  useEffect(() => {
    const navbar:HTMLElement = document.getElementById('navbar') as HTMLElement;
    const hideOnHeight:number = inProjectPage ? 80 : 600;

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
    },[]);

    return (
    <div className='navbar blur_in' id="navbar">
      {!inProjectPage 
      ? <>
        <a href="#about">about</a>
        <a href="#personal">personal info</a>
        <a href="#skills">skills</a>
        <a href="#projects">proyects</a>
      </>
      : <a href="/" className="unique">home</a>
      }
    </div>
  );
}
