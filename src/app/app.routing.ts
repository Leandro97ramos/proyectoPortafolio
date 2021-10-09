import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './Components/home/home.component';
import {SkillsComponent} from './Components/skills/skills.component';
import {ContactComponent} from './Components/contact/contact.component';






// import { BlogPlantasComponent } from './projects/blog-plantas/blog-plantas.component';
//


const appRoutes: Routes = [

    {path:'home', component: HomeComponent},
    {path:'skills', component: SkillsComponent},
    {path:'contact', component: ContactComponent},

    {path:'**', component: HomeComponent},



]


export const appRoutingProviders: any [] = [] ;
export const routing: ModuleWithProviders<any> =RouterModule.forRoot(appRoutes);
