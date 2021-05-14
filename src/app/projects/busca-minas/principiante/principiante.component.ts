  import { Component, OnInit } from '@angular/core';
  import { CambioProject} from '../../../camb/cambioProject'
  @Component({
    selector: 'Principiante',
    templateUrl: './principiante.component.html',
    styleUrls: ['./project-buscaMinas-princ.css']
  })
  export class Principiante implements OnInit {
    public minas1: number;
    public valoresPrincipiante: any[] = new Array() ;
    public matrizBotones: any[] = new Array();
    public visiblePrincipiante  = new Array();
    public casillasFaltantes: 0;
    public columna : number[] = new Array();
    public proyecto:boolean ;
    constructor() {
      this.minas1 =10;
      this.proyecto = true;
      CambioProject.cambio =this.proyecto ;
    }
    ngOnInit(): void {



    }

    verMatriz(){
      console.log("entra");

      for (let i = 0; i < this.minas1; i++) {
        for (let j = 0; j < this.minas1; j++) {

          this.valoresPrincipiante[i][j] = i;
          console.log(this.valoresPrincipiante[i][j]);
        }
      }
    }

    nuevaPartidaPrincipiante(){
      this.crearMatriz();
      this.ponerBotones();
      this.casillasFaltantes =0 ;
      this.verPrincipiante(false);
      this.ponerMinas();
      this.recArr();
      this.contornoPrincipiante();
      this.visualizarMinasPrincipiante();
      this.eventosPrincipiante();

    }
    crearMatriz(){
      for (let i = 0; i < this.minas1; i++) {
        this.valoresPrincipiante[i] = new Array(this.minas1);
      }

      for (let i = 0; i < this.minas1; i++) {
        this.matrizBotones[i] = new Array(this.minas1);
      }
      for (let i = 0; i < this.minas1; i++) {
        this.visiblePrincipiante[i]= new Array(this.minas1);
      }

      console.log(this.valoresPrincipiante.length);
    }

    empezar(){
      this.comienzoJuego();
    }


      ponerBotones(){
        let numeracion= 0;
        let contador = 0;
        for (let i = 0; i < this.minas1; i++) {
          for (let j = 0; j < this.minas1; j++) {
              this.matrizBotones[i][j] = document.createElement("button");
              this.matrizBotones[i][j].setAttribute("class",`casillero ${numeracion}`);
              this.matrizBotones[i][j].setAttribute("id", 'casilleros');
              $(`#casilleros${numeracion}`).css("position","static");
              $(`#casilleros${numeracion}`).css("width","40px");

              contador++;
              numeracion = contador;
              $(".contenedorJuego").append(this.matrizBotones[i][j]);
          }
        }
      }

      verPrincipiante(valor){
          for (let i = 0; i < this.minas1; i++) {
            for (let j = 0; j < this.minas1; j++) {
                this.visiblePrincipiante[i][j]=valor;
                console.log("ver principiante en boolean es:"+this.visiblePrincipiante[i][j]);

                // console.log("visiblePrincipiante " + visiblePrincipiante[i][j]);
            }
          }
      }

       ponerMinas(){
        for (let i = 0; i < this.minas1; i++) {
          for (let j = 0; j < this.minas1; j++) {
            this.valoresPrincipiante[i][j] = 0;
            console.log(this.valoresPrincipiante[i][j]);

          };
        };
        let cambio;
        let i1,j1;

        for (let i = 0; i < 4 * this.minas1 ; i++) {
          do {
            i1= Math.floor (Math.random () * this.minas1);
            j1= Math.floor (Math.random () * this.minas1);


          }while (this.valoresPrincipiante[i1][j1] !=0);
            this.valoresPrincipiante[i1][j1] = 9;
            if(this.valoresPrincipiante[i1][j1] == 9){
              cambio =  this.matrizBotones[i1][j1].className.substr(9);
              this.matrizBotones[i1][j1].removeAttribute("class");
              this.matrizBotones[i1][j1].setAttribute("class",`minas ${cambio} `)

            }

        }
      }
    //
    //
      contornoPrincipiante(){
        //le da el contorno en los espacios en blanco y asigna un valor a cuantas minas hay en proximidad
          for (let i = 0; i < this.minas1 ; i++){
            for (let j = 0; j <this.minas1 ; j++){
              if (this.valoresPrincipiante[i][j]==9){
                  for (let i1= i-1; i1 <= i+1 ; i1++){
                    for (let j1 = j-1; j1 <= j+1 ; j1++){
                        if (i1>=0 && i1<this.minas1 && j1>=0 && j1<this.minas1 && this.valoresPrincipiante[i1][j1]!=9 ) {
                              console.log("segunda parte "+this.valoresPrincipiante[i][j]);
                              this.valoresPrincipiante[i1][j1]++;

                        };
                    };
                  };
              };
            };
          };
      }



      visualizarMinasPrincipiante(){
          let  x = document.getElementsByClassName('casillero');
          let numeracion;
          let flag = true;
          for (let i = 0; i < this.minas1 ; i++) {
            for (let j = 0; j < this.minas1 ; j++) {

                  if (this.visiblePrincipiante[i][j]==false && flag==true) {
                        $(".casillero").text("");
                        flag= false;
                  }


                 if (this.visiblePrincipiante[i][j]==true) {
                      // console.log("visiblePrincipiante es true");
                    if (this.valoresPrincipiante[i][j]==0)  {

                      numeracion= $.trim(this.matrizBotones[i][j].className.substr(9,10));
                      $(`.casillero.${numeracion}`).text("").css("background","#9f9f9f");




                    }else if(this.valoresPrincipiante[i][j]==1) {

                        numeracion= $.trim(this.matrizBotones[i][j].className.substr(9,10));
                        $(`.casillero.${numeracion}`).text("1").css("background","#9f9f9f");




                    }else if (this.valoresPrincipiante[i][j]==2) {


                      numeracion= $.trim(this.matrizBotones[i][j].className.substr(9,10));


                      $(`.casillero.${numeracion}`).text("2").css("background","#9f9f9f");

                    }else if(this.valoresPrincipiante[i][j]==3) {

                      numeracion= $.trim(this.matrizBotones[i][j].className.substr(9,10));


                      $(`.casillero.${numeracion}`).text("3").css("background","#9f9f9f");

                    }else if (this.valoresPrincipiante[i][j]==4) {

                      numeracion= $.trim(this.matrizBotones[i][j].className.substr(9,10));


                      $(`.casillero.${numeracion}`).text("4").css("background","#9f9f9f");

                      }else if(this.valoresPrincipiante[i][j]==5) {

                        numeracion= $.trim(this.matrizBotones[i][j].className.substr(9,10));


                        $(`.casillero.${numeracion}`).text("5").css("background","#9f9f9f");


                    }else if (this.valoresPrincipiante[i][j]==6) {

                      numeracion= $.trim(this.matrizBotones[i][j].className.substr(9,10));
                      $(`.casillero.${numeracion}`).text("6").css("background","#9f9f9f");


                    }else if(this.valoresPrincipiante[i][j]==7) {

                      numeracion= $.trim(this.matrizBotones[i][j].className.substr(9,10));
                      $(`.casillero.${numeracion}`).text("7").css("background","#9f9f9f");


                    }else if (this.valoresPrincipiante[i][j]==8) {


                      numeracion= $.trim(this.matrizBotones[i][j].className.substr(9,10));
                      $(`.casillero.${numeracion}`).text("8").css("background","#9f9f9f");


                    }else if (this.valoresPrincipiante[i][j]==9) {
                        if (this.matrizBotones[i][j].className == `minas`) {
                          numeracion = this.matrizBotones[i][j].className.substr(5,8);
                          console.log("this.numeracion "+numeracion);
                        }
                      $(`.minas`).css("background","red");

                    }
                }
          }
        }
    }

    recArr(){
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {

            console.log(this.matrizBotones[i][j]);


        };

      };
    }

    eventosPrincipiante(){
      let numeracion;
      console.log("entra eventosPrincipiante");

      for (let i = 0; i < this.minas1; i++) {
        for (let j = 0; j < this.minas1 ; j++) {

          //INSERTAR FUNCION QUE BUSQUE LA NUMERACION DE MINA
            this.matrizBotones[i][j].addEventListener("click", function(e){

              let flag= false;
               e =$(this).attr('class');
              console.log( "y e es:" + e);
              if (e !==null) {

              for(let i1 = 0; i1 < 10 ; i1++) {
                console.log( "y ssssssse es:" + e);
                for(let j1 = 0; j1 < 10 ; j1++) {


                  if((e == this.matrizBotones[i][j].ClassName) &&  flag==false){
                      if (this.matrizBotones[i][j].ClassName.substr(0,9) == `casillero`) {
                          this.numeracion = $.trim(this.matrizBotones[i][j].className.substr(9));
                          console.log("numeracion casillero en eventos principales" + numeracion );

                          this.pulsarBotonPrincipiante(i,j);
                            // console.log("el valor en visiblePrincipiante[i][j] es: " + visiblePrincipiante[i][j]);
                      }else if (this.matrizBotones[i][j].className.substr(0,5) == `minas`) {
                          numeracion = $.trim(this.matrizBotones[i][j].className.substr(5));
                          console.log("numeracion mina en eventos principales"+ this.numeracion);

                          this.pulsarBotonPrincipiante(i,j);
                      }
                    flag=true;
                  };
                }
              }
            }
            });
    }
    }

    }

  //
    pulsarBotonPrincipiante(i,j ){

        // if (matrizBotones[i][j].className != $(".minas ")  ) {
        //
        //     $(`.casillero ${numeracion}`).css("display", "none");
        // }
        this.pulsarBotonVasPrincipiante(i,j);
        // console.log("fila "+i +" columna "+ j);
        this.visualizarMinasPrincipiante();

    }
  //
  //
    pulsarBotonVasPrincipiante( i,  j ){
        if (i>=0 && i<this.minas1 && j>=0 && j< this.minas1 && this.visiblePrincipiante[i][j]==false ) {
             if (this.visiblePrincipiante[i][j]==false) {


                this.visiblePrincipiante[i][j]=true;

                if (this.valoresPrincipiante[i][j]==9) {

                  this.verPrincipiante(true);
                  // console.log("el valor que es nueve esta en : "+valoresPrincipiante[i][j]);
                  alert("perdiste");
                  //aca cambia la imagen de la carita 'perdiste'
                }else if (this.visiblePrincipiante[i][j]==true){


                  this.casillasFaltantes++;
                  if (this.casillasFaltantes ==90) {
                    this.verPrincipiante(true);
                     alert("ganaste");
                    //poner imagen de ganaste

                    //poner variable 0/90 al principio inicializada como ''
                  }
                  //variable de arriba con alert(casillasFaltantes+"/90")M
                }
             }
             if ( this.valoresPrincipiante[i][j] ==0 ) {
                //funcion pulsar boton
                // var flag=true;

                // alert("entra");




                this.pulsarBotonVasPrincipiante(i, j-1);
                this.pulsarBotonVasPrincipiante(i, j+1);
                this.pulsarBotonVasPrincipiante(i-1, j);
                this.pulsarBotonVasPrincipiante(i+1, j);
             }
        }
      }
      quitarBotonesPrincipiante(){
        let valor ;
        for (let i = 0; i < this.minas1; i++) {
            for (let j = 0; j < this.minas1; j++) {
              $("#casilleros").remove();

            }
        }
      }
    //
    //
    comienzoJuego(){
       this.quitarBotonesPrincipiante();
       this.nuevaPartidaPrincipiante();
    }


}
