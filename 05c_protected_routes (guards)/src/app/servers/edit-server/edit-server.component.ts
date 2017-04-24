import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/observable';

import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;


  constructor(
      private serversService: ServersService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this.route.params
        .subscribe(
            (params: Params) => {
              this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
              this.serverName = this.server.name;
              this.serverStatus = this.server.status;
            }
        );

    this.route.queryParams
        .subscribe(
            (queryParams: Params) => {
              this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
            }
        )
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    // After changesSaved and property set to true, we want to navigate up one level to the last loaded server
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  // canDeactivate is a built in router method but if we want to implement it to be called every time we try to leave a route we have to create a version in a service of our own and then define our conditions within it. See can-deactivate-guard-service.

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.allowEdit) {
          return true;
      }
      if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status)) {
          return confirm('Do you wat to discard the changes?');
      } else {
          return true;
      }
  }

}
