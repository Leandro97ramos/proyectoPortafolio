import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from '../../../Models/comentario';
import { ComentariosService } from '../../../service/comentarios.service';

@Component({
  selector: 'app-ver-comentario',
  templateUrl: './ver-comentario.component.html',
  styleUrls: ['./ver-comentario.component.css']
})
export class VerComentarioComponent implements OnInit {

  loading = false;
   comentario: Comentario;
   idComentario: number;
   constructor(private comentariosService: ComentariosService, private route: ActivatedRoute) {
     this.idComentario = + this.route.snapshot.paramMap.get('id');
 }

   ngOnInit(): void {
     this.cargarComentario();
   }

   cargarComentario() {
     this.loading = true;

     this.comentariosService.cargarComentario(this.idComentario).subscribe(data => {
       this.loading = false;
       this.comentario = data;
     })
   }
}
