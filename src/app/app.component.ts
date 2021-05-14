import { Component, OnInit, DoCheck } from '@angular/core';
import {CambioProject} from './camb/cambioProject';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./principal.css']
})
export class AppComponent implements  OnInit,  DoCheck {
  title = 'PortafolioPersonal';

  public noProject: boolean;

  constructor(){
    this.noProject = CambioProject.cambio;
  }
  ngDoCheck(){
      this.noProject= CambioProject.cambio;
      console.log("en AppComponent "+this.noProject);

  }
  ngOnInit() {




  }




}
