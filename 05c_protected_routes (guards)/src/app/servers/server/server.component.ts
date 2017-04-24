import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
      private serversService: ServersService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // With using resolver => see routes. We are using an observable because data can change while we are on the page and we want it to automatically update

    this.route.data
        .subscribe(
            (data: Data) => {
              this.server = data['server'];
              // must match the property name from where called resolve in routes.
            }
        );

    // Without using resolver

    // const id = this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(+id);
    //
    // this.route.params
    //     .subscribe(
    //         (params: Params) => {
    //           this.server = this.serversService.getServer(+params['id']);
    //         }
    //     );
  }

  onEditServer(id: number) {
    // 1. Use an absolute path from '/'
      // => this.router.navigate(['/servers', id, 'edit']);
    // or
      // 2. we can use a relative path
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve' // takes all query params from current route and passes them to route navigating to. Use 'merge' to merge with new queryParams.
    });
  }

}
