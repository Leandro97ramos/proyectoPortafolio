import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {routing, appRoutingProviders} from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { StaticHeroComponent } from './Components/static-hero/static-hero.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ContactComponent } from './Components/contact/contact.component';
import { TmpSkillsComponent } from './Components/tmp-skills/tmp-skills.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StaticHeroComponent,
    SkillsComponent,
    ContactComponent,
    TmpSkillsComponent,

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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
