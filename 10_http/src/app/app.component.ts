import { Component, Injectable } from '@angular/core';
import { Response } from '@angular/Http';

import { ServerService } from './server.service';

import 'rxjs/Rx'; // Needed for .map observable operator

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  appName = this.serverService.getAppName();

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(
      private serverService: ServerService
  ) {}

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onAddAllServers(server: any) {
    this.serverService.storeServers(server)
        // important to subscribe to observable otherwise no request will be sent
        .subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
  }

  onOverwrite() {
    this.serverService.overwrtieServers(this.servers)
    // important to subscribe to observable otherwise no request will be sent
        .subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
  }

  // Both onGetOne an onGetTwo give the same result, but by using method two we write less code if multiple components are using the getServers method

  onGetOne() {
    this.serverService.getServersOne()
        .subscribe(
            (response: Response) => {
             const data = response.json();
             console.log(data);
            },
            (error) => console.log(error)
        );
  }

  onGetTwo() {
    this.serverService.getServersTwo()
        .subscribe(
            (servers: any[]) => {
              console.log(servers);
            },
            (error) => console.log(error)
        );
  }

  // Use overwrite before testing so comes back without array values
  onGetThree() {
    this.serverService.getServersThree()
        .subscribe(
            (servers: any[]) => this.servers = servers,
            (error) => console.log(error)
        );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
