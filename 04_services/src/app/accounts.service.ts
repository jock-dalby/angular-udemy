import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

// To inject a service into something, the something needs to have some metadata attached to it. A component has this in the @component decrorator and the @directive has this in @directive. The @Injectable tells Angular that this service injactable (can have something injected into it). You do not add @Injectable to the service you want to inject but to the service you want to inject it to.

@Injectable()

export class AccountsService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(
      private loggingService: LoggingService
  ) { }

  addAccount(name: string, status: string) {
    this.accounts.push({name, status});
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }

}
