import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from '../../../Models/comentario';
import { ComentariosService } from '../../../service/comentarios.service';

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {

    comentarios: FormGroup;
    idComentario = 0;
    accion = 'Agregar';
    loading = false;
    comentario: Comentario;
    comentarioService: any;
    constructor(private fb: FormBuilder, private route: ActivatedRoute, private comentariosService: ComentariosService, private router: Router) {

      this.comentarios = this.fb.group({
        titulo: ['', Validators.required],
        creador: ['', Validators.required],
        texto: ['', Validators.required]
      });
      if (+this.route.snapshot.paramMap.get('id') > 0) {
        this.idComentario = + this.route.snapshot.paramMap.get('id');
      }
    }


    ngOnInit(): void {
      this.esEditar();
    }
    guardarComentario() {

      if (this.accion === 'Agregar') {
        const comentario: Comentario = {
          fechaCreacion: new Date(),
          creador: this.comentarios.get('creador').value,
          titulo: this.comentarios.get('titulo').value,
          texto: this.comentarios.get('texto').value,

        };
        this.comentariosService.guardarComentario(comentario).subscribe(data => {
          this.router.navigate(['/listas']);
        });
      }
      else {
        const comentario: Comentario = {
          id: this.comentario.id,
          fechaCreacion: this.comentario.fechaCreacion,
          creador: this.comentarios.get('creador').value,
          titulo: this.comentarios.get('titulo').value,
          texto: this.comentarios.get('texto').value,
        };
        this.comentariosService.actualizarComentario(this.idComentario, comentario).subscribe(data => {
          this.router.navigate(['/']);

        })
      }


    }
    esEditar() {
      if (this.idComentario > 0) {
        this.accion = "Editar"
        this.comentariosService.cargarComentario(this.idComentario).subscribe(data => {
          this.comentario = data;
          this.comentarios.patchValue({
            titulo: data.titulo,
            creador: data.creador,
            texto: data.texto
          })
        })
      }
    }
      httpOptions(id: number, comentario: Comentario, httpOptions: any) {
          throw new Error('Method not implemented.');
      }
}
