import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  copied:boolean;

  constructor() {
    this.copied = false;
  }

  ngOnInit():void {
    const navbar:HTMLElement = document.getElementById("navbar") as HTMLElement;
    
    setTimeout(() =>{
      navbar!.classList.remove("blur_in");
    }, 2000);

    if(window.innerWidth > 540){
      window.addEventListener("scroll", () => {
        if (window.scrollY > 600){
          navbar!.classList.add("scrolled");
          navbar!.classList.remove("scroll_on_top");
        }
        else{
          navbar!.classList.remove("scrolled");
          navbar!.classList.add("scroll_on_top");
        }
      });
    }
  }
}
