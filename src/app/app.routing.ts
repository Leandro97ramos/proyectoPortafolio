import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './Components/home/home.component';
import {ProjectsComponent} from './Components/projects/projects.component';
import {SkillsComponent} from './Components/skills/skills.component';
import {ContactComponent} from './Components/contact/contact.component';

import {AppClimaComponent} from './projects/app-clima/app-clima.component';

import { Principiante} from './projects/busca-minas/principiante/principiante.component';

import { CrudListarProyectoComponent } from './projects/crud-listar-proyecto/crud-listar-proyecto.component';
import { VerComentarioComponent } from './projects/crud-listar-proyecto/ver-comentario/ver-comentario.component';
import { AgregarEditarComentarioComponent } from './projects/crud-listar-proyecto/agregar-editar-comentario/agregar-editar-comentario.component';


import { BlogPlantasComponent } from './projects/blog-plantas/blog-plantas.component';

import { BackendBlogComponent } from './projects/blog-plantas/backend-blog/backend-blog.component';
// import { BlogPlantasComponent } from './projects/blog-plantas/blog-plantas.component';
//


const appRoutes: Routes = [

    {path:'home', component: HomeComponent},
    {path:'projects', component: ProjectsComponent},
    {path:'skills', component: SkillsComponent},
    {path:'contact', component: ContactComponent},
    {path:'Buscaminas', component: Principiante},
    {path:'clima', component: AppClimaComponent},
    {path:'listas', component: CrudListarProyectoComponent},
    { path: 'agregar', component: AgregarEditarComentarioComponent },
    { path: 'editar/:id', component: AgregarEditarComentarioComponent },
    { path: 'ver/:id', component: VerComentarioComponent },

    { path: 'BlogPlantas', component: BlogPlantasComponent },
    { path: 'BlogPlantas/BackendBlog', component: BackendBlogComponent },
    {path:'**', component: HomeComponent},



]


export const appRoutingProviders: any [] = [] ;
export const routing: ModuleWithProviders<any> =RouterModule.forRoot(appRoutes);
