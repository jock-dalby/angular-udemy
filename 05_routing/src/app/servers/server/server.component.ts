import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
      private serversService: ServersService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // NOTE: Can use + instead of Number() to convert a string to a number.
    this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
    this.server.status = this.route.snapshot.fragment;

    // Setup an observable to update the servers object whenever params changes.
    this.route.params.subscribe(
        (params: Params) => {
          this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
        }
    );
  }

}
