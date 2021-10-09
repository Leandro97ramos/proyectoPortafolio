import { Component, OnInit } from '@angular/core';
import { trigger , state, style , animate , transition } from '@angular/animations';
import * as jQuery from 'jquery';
import{ContactComponent} from '../contact/contact.component'
import { css } from 'jquery';
import { from } from 'rxjs';
// const $ = '';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./principal.css'],
 
})
export class HomeComponent implements OnInit {
  public state: string = 'inactive';
  constructor() { }

  ngOnInit() {
  }

 
}
