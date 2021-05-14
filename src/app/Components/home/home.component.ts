import { Component, OnInit } from '@angular/core';
import { trigger , state, style , animate , transition } from '@angular/animations';
import * as jQuery from 'jquery';
// const $ = '';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./principal.css'],
  animations:[
    trigger('aniBoton',[
      state('inactive' , style ({

       })),
      state('active', style ({
        bottom: '0px',
        height: '30vh',
      })),

      transition('inactive <=> active', animate('500ms ease-in')),
    ])
  ]
})
export class HomeComponent implements OnInit {
  public state: string = 'inactive';
  constructor() { }

  ngOnInit() {
  }

  derScroll(){
    let fila = <HTMLElement> document.querySelector('.contenedor-carousel');
    let proyectos = <HTMLElement>  document.querySelector('.proyecto');

      fila.scrollLeft += fila.offsetWidth;



   }
   izqScroll(){
     let fila = <HTMLElement> document.querySelector('.contenedor-carousel');
     let proyectos = <HTMLElement>  document.querySelector('.proyecto');

       fila.scrollLeft -= fila.offsetWidth;

    }

    togleBoton(){
      $(".ver-mas").hide();
      this.state = this.state === 'active' ? 'inactive' : 'active';
      $(".nose").css("align-items", "center");
      $(".quienSoy-hero").css("margin-top", "0px");
      $(".quienSoy-hero").css("margin-top", "0px");
      $(".contenedor-quienSoy").css("margin-top", "0px");
      $(".nose").css("box-shadow", "0px");



    }
}
