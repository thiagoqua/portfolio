import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  proyectNro:string;

  constructor(private route:ActivatedRoute,private router:Router) {
    this.proyectNro = this.route.snapshot.paramMap.get('number')!;
    const proyectNroNumber = parseInt(this.proyectNro);

    if(proyectNroNumber < 1 || proyectNroNumber > 4)
      this.router.navigate(['']);
  }

  ngOnInit(): void {
    const navbar:HTMLElement = document.getElementById("navbar") as HTMLElement;
    navbar.classList.add("scrolled");
  }

}
