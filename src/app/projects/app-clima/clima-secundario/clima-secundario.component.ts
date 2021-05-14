import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clima-secundario',
  templateUrl: './clima-secundario.component.html',
  styleUrls: ['./clima-secundario.component.css']
})
export class ClimaSecundarioComponent implements OnInit {

  @Input() detalles: any

  constructor() { }

  resolverImagen() {
    return `../../../../../assets/projects/Clima/${this.detalles.weather}.png`;
  }

  ngOnInit(): void {
  }

}
