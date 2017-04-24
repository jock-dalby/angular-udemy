import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoggingService } from './logging.service';
import { AccountsService } from './accounts.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      LoggingService,
    // By adding AccountsService into providers array here all child components can use the same instance by importing AccountsService and adding to constructor but MUST NOT add to the child components providers array otherwise it will create a new instance of the service and not communicate with other components.
      AccountsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
