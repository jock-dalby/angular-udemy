import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(
      private serversService: ServersService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onSelectServer(id: number) {
    event.preventDefault();

    // When using router.navigate it cannot tell from which component it was called and therefore does not know which path it is currently on. If you want to use a relative path when using .navigate method you need to pass a second argument with the relativeTo property.

    // Example (Note: Path does not exist and so will not work):

    // this.router.navigate([id], {relativeTo: this.route});
  }

  onReload() {
    this.router.navigate(['/servers']);
  }

  onGoToUsers() {
    this.router.navigate(['/users']);
  }

  onEditServer(id: number) {
    event.preventDefault();
    this.router.navigate(
        ['/servers', id, 'edit'],
        {queryParams:
            {
              allowEdit: true,
              options: 7,
              value: 'method'
            },
          fragment: 'loading'
        },
    );
  }


}
