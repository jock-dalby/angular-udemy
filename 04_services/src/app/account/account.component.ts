import { Component, Input } from '@angular/core';
// import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [
      // Notice we do not add AccountsService into providers array because this would create a new instance of the accountsService and we want all components to be using the same instance. Notice only in providers array in most-parent component (in this case, appModule).
      // LoggingService
  ]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor (
      // private loggingService: LoggingService,
      private accountsService: AccountsService
  ) {}


  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);

    // Triggering an event on AccountsService so other components can respond to this event (see newAccountComponent)
    this.accountsService.statusUpdated.emit(status);
  }
}
