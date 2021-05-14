import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../Models/comentario';
import { ComentariosService } from '../../service/comentarios.service';
@Component({
  selector: 'app-crud-listar-proyecto',
  templateUrl: './crud-listar-proyecto.component.html',
  styleUrls: ['./crud-listar-proyecto.component.css']
})
export class CrudListarProyectoComponent implements OnInit {
  listComentarios: Comentario[];
  loading = false;
  constructor(private comentariosService: ComentariosService) { }

  ngOnInit(): void {
    this.cargarComentario();
  }
  cargarComentario() {
    this.loading = true;
    this.comentariosService.getListComentario().subscribe(data => {
      this.loading = false;
      this.listComentarios = data;
    })
  }
  delete(id: number) {
    this.loading = true;
    this.comentariosService.deleteComentario(id).subscribe(data => {
      this.cargarComentario();
      this.loading = false;
    })
  }

}
