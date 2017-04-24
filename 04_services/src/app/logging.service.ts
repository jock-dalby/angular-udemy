// import { Injectable } from '@angular/core';

// Unlike components (@component decorator) and directives (@directive decorator), a service is a normal typescript class and can be used with no decorator at all.

// To inject a service into something, the something needs to have some metadata attached to it. A component has this in the @component decrorator and the @directive has this in @directive. The @Injectable tells Angular that this service injactable (can have something injected into it). You do not add @Injectable to the service you want to inject but to the service you want to inject it to. Therefore not required in this case. See accounts.service

// @Injectable()

export class LoggingService {

  constructor() { }

  logStatusChange(status: string) {
    console.log(status);
  }

}
