import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
