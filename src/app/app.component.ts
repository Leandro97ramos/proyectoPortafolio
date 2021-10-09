import { Component, OnInit, DoCheck } from '@angular/core';
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
  }
  ngDoCheck(){

  }
  ngOnInit() {

  }




}
