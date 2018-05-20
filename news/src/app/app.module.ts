import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import 'hammerjs';
import { ArtComponent } from './art/art.component';
import { AutomobilesComponent } from './automobiles/automobiles.component';
import { TechComponent } from './tech/tech.component';


@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    ArtComponent,
    AutomobilesComponent,
    TechComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',component:StoriesComponent},
      {path:'art',component:ArtComponent},
      {path:'automobiles',component:AutomobilesComponent},
      {path:'tech',component:TechComponent}
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
