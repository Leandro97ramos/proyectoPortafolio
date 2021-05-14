import { Component, OnInit, DoCheck , ComponentFactoryResolver, ViewContainerRef, ViewChild,  } from '@angular/core';
import {Cactus} from '../../../models/blogPlantas';
import {Curiosidades} from '../../../models/blogPlantas';
import {PlantasInterior} from '../../../models/blogPlantas';
import {PlantasResistent} from '../../../models/blogPlantas';
import { UploadService} from '../../../service/upload.service';
import { Global} from '../../../service/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BlogPlantasService} from '../../../service/blog-plantas.service';
import { BlogPlantasDirective } from './blog-plantas.directive';
import * as jQuery from 'jquery';


@Component({
  selector: 'app-backend-blog',
  templateUrl: './backend-blog.component.html',
  styleUrls: ['../blog-plantas.css'],
  providers: [BlogPlantasService, UploadService]
})
export class BackendBlogComponent implements OnInit {
  @ViewChild(BlogPlantasDirective)public dynamicComp: BlogPlantasDirective;

  public opc;
  public title: string;

  public cactus: Cactus;
  public save_cactus;

  public curiosidades: Curiosidades;
  public save_curiosidades;

  public plantasInterior: PlantasInterior;
  public save_plantasInterior;

  public plantasResistent: PlantasResistent;
  public save_plantasResistent;
  miComponent: any;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;

  constructor(
    private _blogPlantasService : BlogPlantasService,

    private _uploadService: UploadService,
    private componentFactoryResolver: ComponentFactoryResolver,

  ) {
    this.title = 'Crear proyecto';
    this.cactus = new Cactus('','','','','');
    this.curiosidades = new Curiosidades('','','','','');
    this.plantasInterior = new PlantasInterior('','','','','');
    this.plantasResistent = new PlantasResistent('','','','','');
    this.miComponent = BackendBlogComponent ;
    this.url= Global.url;
    this.opc;


  }

  ngOnInit(): void {
    console.log(this.miComponent);
    $("ul").css("display","flex");


  }

  elegirOpc(index){
    this.opc = index;
    console.log("se eligio el numero: " , this.opc);
    this.recargarPag();

  }


  recargarPag(){
    const component = this.componentFactoryResolver.resolveComponentFactory(this.miComponent);

    this.dynamicComp.viewContainerRef.clear();
    // this.dynamicComp.viewContainerRef.createComponent(component);
    console.log("la bandera es ");

  }

  ngDoCheck(){

  }
    //   console.log(this.project);
    //
      // poner las 4 opciones

    //guardar los datos
    onSubmit(form){

      switch (this.opc) {
        case 1:
            this._blogPlantasService.saveCactus(this.cactus).subscribe(
              response=> {
                if (response.cactus) {


                  //Subir la imagen
                  if (this.filesToUpload){

                    this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.cactus._id, [] , this.filesToUpload, 'image').then((result:any) =>{
                      this.save_cactus =result.cactus;
                      this.status = 'sucess';
                      console.log(result);
                      form.reset();
                    });

                  }else{
                    this.save_cactus = response.cactus;

                    this.status = 'sucess';
                    form.reset();
                  }
                }else{
                  this.status = 'failed';
                }
              },
              error => {
                console.log(<any>error);
              }
            );


          break;

          case 2:
              this._blogPlantasService.saveCuriosidades(this.curiosidades).subscribe(
                response=> {
                  if (response.curiosidades) {


                    //Subir la imagen
                    if (this.filesToUpload){

                      this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.curiosidades._id, [] , this.filesToUpload, 'image').then((result:any) =>{
                        this.save_curiosidades =result.curiosidades;
                        this.status = 'sucess';
                        console.log(result);
                        form.reset();
                      });

                    }else{
                      this.save_curiosidades = response.curiosidades;

                      this.status = 'sucess';
                      form.reset();
                    }
                  }else{
                    this.status = 'failed';
                  }
                },
                error => {
                  console.log(<any>error);
                }
              );


            break;

            case 3:
                this._blogPlantasService.savePlantasInterior(this.plantasInterior).subscribe(
                  response=> {
                    if (response.plantasInterior) {


                      //Subir la imagen
                      if (this.filesToUpload){

                        this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.plantasInterior._id, [] , this.filesToUpload, 'image').then((result:any) =>{
                          this.save_plantasInterior =result.plantasInterior;
                          this.status = 'sucess';
                          console.log(result);
                          form.reset();
                        });

                      }else{
                        this.save_plantasInterior = response.plantasInterior;

                        this.status = 'sucess';
                        form.reset();
                      }
                    }else{
                      this.status = 'failed';
                    }
                  },
                  error => {
                    console.log(<any>error);
                  }
                );


              break

              case 4:
                  this._blogPlantasService.savePlantasResistent(this.plantasResistent).subscribe(
                    response=> {
                      if (response.plantasResistent) {


                        //Subir la imagen
                        if (this.filesToUpload){

                          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.plantasResistent._id, [] , this.filesToUpload, 'image').then((result:any) =>{
                            this.save_plantasResistent =result.plantasResistent;
                            this.status = 'sucess';
                            console.log(result);
                            form.reset();
                          });

                        }else{
                          this.save_plantasResistent = response.plantasResistent;

                          this.status = 'sucess';
                          form.reset();
                        }
                      }else{
                        this.status = 'failed';
                      }
                    },
                    error => {
                      console.log(<any>error);
                    }
                  );


                break

        default:
          break;
      }
    }
    fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
    }
  }
