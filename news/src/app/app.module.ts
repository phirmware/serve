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
import { MoviesComponent } from './movies/movies.component';
import { CoolComponent } from './cool/cool.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    ArtComponent,
    AutomobilesComponent,
    TechComponent,
    MoviesComponent,
    CoolComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',component:StoriesComponent},
      {path:'art',component:ArtComponent},
      {path:'automobiles',component:AutomobilesComponent},
      {path:'tech',component:TechComponent},
      {path:'movies',component:MoviesComponent}
    ]),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
