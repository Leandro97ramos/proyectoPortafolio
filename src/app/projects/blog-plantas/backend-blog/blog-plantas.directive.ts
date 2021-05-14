import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appBlog]'
})
export class BlogPlantasDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
