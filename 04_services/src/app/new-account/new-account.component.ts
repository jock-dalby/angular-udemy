import { Component, EventEmitter, Output } from '@angular/core';
// import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [
    // Notice we do not add AccountsService into providers array because this would create a new instance of the accountsService and we want all components to be using the same instance. Notice only in providers array in most-parent component (in this case, appModule).
    //   LoggingService
  ]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(
      // private loggingService: LoggingService,
      private accountsService: AccountsService
  ) {
    // Subscribing to the statusUpdated event to listen out for it being triggered. Whenever it is triggered we execute the code inside the parenthesis. See accountComponent for where the event is triggered.
    this.accountsService.statusUpdated.subscribe(
        (status: string) => alert('New Status: '+ status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);

    // this.loggingService.logStatusChange(accountStatus);

    /*
    Below method will work but is the incorrect way to use a service in Angular. You should not instantiate instances of services on your own because Angular provides a much better tool for us to get access to our services.

    const service = new LoggingService();
    service.logStatusChange(accountStatus);
    */
  }
}
