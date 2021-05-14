

import { Component, OnInit, DoCheck } from '@angular/core';
import { Global} from '../../service/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CambioProject} from '../../camb/cambioProject';

import {Cactus} from '../../models/blogPlantas';
import {Curiosidades} from '../../models/blogPlantas';
import {PlantasInterior} from '../../models/blogPlantas';
import {PlantasResistent} from '../../models/blogPlantas';
import {BlogPlantasService} from '../../service/blog-plantas.service'

import * as jQuery from 'jquery';


@Component({
  selector: 'app-blog-plantas',
  templateUrl: './blog-plantas.component.html',
  styleUrls: ['./blog-plantas.css']
})


export class BlogPlantasComponent implements OnInit, DoCheck
 {
  public proyecto:boolean ;
  public body = $("body");

  public cactus :Cactus[];
  public curiosidades :Curiosidades[];
  public plantasInterior:PlantasInterior[];
  public plantasResistent:PlantasResistent [];



  public save_cactus;
  public save_curiosidades;
  public save_plantasInterior;
  public save_plantasResistent;
  constructor(
    private _blogPlantasService : BlogPlantasService,

  ){
    this.proyecto = true;
    CambioProject.cambio =this.proyecto ;
  }

  ngOnInit(){

  }
  ngDoCheck(){
    var arreglo = parseInt(localStorage.getItem("guardar-color"));
    console.log(arreglo);
      $("#menu").removeClass();
    switch (arreglo) {
      case 1:

          this.body.css("background","url('../../../assets/hojas.jpg')");
          $("#logo").css("background", "#235e3d")
          $("#menu").addClass('menuHojas');
        break;
        case 2:
          this.body.css("background","url('../../../assets/rojo.jpg')");
          $("#logo").css("background", "#CA3413")
          $("#menu").addClass('menuRojo');
          console.log("el atributo es "+$("#menu"));

        break;
          case 3:
          this.body.css("background","url('../../../assets/invierno.jpg')" );
          $("#logo").css("background", "#1f87c4");
          $("#menu").addClass('menuInvierno');
          break;
        }
    }
  cambioTheme(index){
          //Selector de tema
          console.log("entra en funcion");

          switch (index) {
            case  1:
            console.log("entra en 1");
            localStorage.setItem("guardar-color", index);

            this.body.css("background","url('../../../assets/hojas.jpg')");
            $("#logo").css("background", "#235e3d")
            $("#menu").addClass('menuHojas');


            break;

            case  2:
            console.log("entra en 2");

              localStorage.setItem("guardar-color", index);
              $("#logo").css("background", "#CA3413")
              $("#menu").addClass('menuRojo');
            break;

            case  3:
            console.log("entra en 3");
            localStorage.setItem("guardar-color", index);
            $("#logo").css("background", "#1f87c4");
            $("#menu").addClass('menuInvierno');
            break;

          }
    }

    getCacts(){

      this._blogPlantasService.getCactuss().subscribe(
        response => {
          if(response.cactus){
            this.cactus = response.cactus;
          }
        },
        error =>{
            console.log(<any>error)
        }

      );
   }


   getCuriosidad(){

     this._blogPlantasService.getCuriosidadess().subscribe(
       response => {
         if(response.curiosidades){
           this.curiosidades = response.curiosidades;
         }
       },
       error =>{
           console.log(<any>error)
       }

     );
  }

  getPlantasInt(){

    this._blogPlantasService.getPlantasInteriors().subscribe(
      response => {
        if(response.plantasInterior){
          this.plantasInterior = response.plantasInterior;
        }
      },
      error =>{
          console.log(<any>error)
      }

    );
 }

 getPlantasRes(){

   this._blogPlantasService.getPlantasResistents().subscribe(
     response => {
       if(response.plantasResistent){
         this.plantasResistent = response.plantasResistent;
       }
     },
     error =>{
         console.log(<any>error)
     }

   );
}

}
