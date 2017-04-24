import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorMessage: string;

  constructor(
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.errorMessage = this.route.snapshot.data['message'];

    // If the route data could possibly change whilst on this route then need to subscribe to an observable
    this.route.data.subscribe(
        (data: Data) => {
          this.errorMessage = data['message'];
        }
    );
  }

}
