import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {routing, appRoutingProviders} from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';


import { WeatherService } from './service/weather.service';


import { AppComponent } from './app.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { HomeComponent } from './Components/home/home.component';
import { StaticHeroComponent } from './Components/static-hero/static-hero.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AppClimaComponent } from './projects/app-clima/app-clima.component';
import { ClimaSecundarioComponent } from './projects/app-clima/clima-secundario/clima-secundario.component';
import { FechaANombreDiaPipe  } from './projects/app-clima/fecha-anombre-dia-pipe.pipe';
import { FormatearFechaPipe } from './projects/app-clima/formatear-fecha-pipe.pipe';
import { CrudListarProyectoComponent } from './projects/crud-listar-proyecto/crud-listar-proyecto.component';
import { AgregarEditarComentarioComponent } from './projects/crud-listar-proyecto/agregar-editar-comentario/agregar-editar-comentario.component';
import { VerComentarioComponent } from './projects/crud-listar-proyecto/ver-comentario/ver-comentario.component';
import { BlogPlantasComponent } from './projects/blog-plantas/blog-plantas.component';
import { CuriosidadesComponent } from './projects/blog-plantas/curiosidades/curiosidades.component';
import { ResistentesFrioComponent } from './projects/blog-plantas/resistentes-frio/resistentes-frio.component';
import { InteriorComponent } from './projects/blog-plantas/interior/interior.component';
import { CactusComponent } from './projects/blog-plantas/cactus/cactus.component';
import { BackendBlogComponent } from './projects/blog-plantas/backend-blog/backend-blog.component';
import { BlogPlantasDirective } from './projects/blog-plantas/backend-blog/blog-plantas.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    StaticHeroComponent,
    SkillsComponent,
    ContactComponent,
    AppClimaComponent,
    ClimaSecundarioComponent,
    FechaANombreDiaPipe,
    FormatearFechaPipe,
    CrudListarProyectoComponent,
    AgregarEditarComentarioComponent,
    VerComentarioComponent,
    BlogPlantasComponent,
    CuriosidadesComponent,
    ResistentesFrioComponent,
    InteriorComponent,
    CactusComponent,
    BackendBlogComponent,
    BlogPlantasDirective,

  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    appRoutingProviders,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
