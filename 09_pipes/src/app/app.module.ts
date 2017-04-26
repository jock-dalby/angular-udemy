import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FilterPipe } from "./filter.pipe";
import { ShortenPipe } from "./shorten.pipe";
import { ShortenWithParamsPipe } from "./shortenWithParams.pipe";

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    ShortenPipe,
    ShortenWithParamsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
