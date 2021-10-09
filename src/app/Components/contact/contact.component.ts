import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  animarContenedor(){

    $(".container").animate({
      display:'block',
      height: 'toggle'
  });
  }
 
}
