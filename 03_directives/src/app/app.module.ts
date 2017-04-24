import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './attribute-directives/basic-highlight/directive';
import { BetterHighlightDirective } from './attribute-directives/better-highlight/directive';
import { UsingHostListenerDirective } from './attribute-directives/using-host-listener/directive';
import { UsingHostListener2Directive } from './attribute-directives/using-host-listener-2/directive';
import { UsingHostListener3Directive } from './attribute-directives/using-host-listener-3/directive';
import { UnlessDirective } from './structural-directive/unless/directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UsingHostListenerDirective,
    UsingHostListener2Directive,
    UsingHostListener3Directive,
    UnlessDirective
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
