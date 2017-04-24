import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  observableExampleOneSubscription: Subscription;
  observableExampleTwoSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    /*** Observable example 1 ***/
    // Setup Observable to send an incremental number every 1000ms
    const myNumbers = Observable.interval(1000)
        // map() is an example of an opertor we can use on observables
            .map(
                (data: number) => {
                  return data * 2;
                }
            );

    // Subscribe to Observable. Now check the console.
    this.observableExampleOneSubscription = myNumbers.subscribe(
        (myNumber: number) => {
          console.log(myNumber);
        }
    );

    /*** Observable example 2 ***/
        // Setup Observable to send different package/error after different times
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        // next() emits the next data package
        observer.next('first package');
      },2000);
      setTimeout(() => {
        observer.next('second package');
      },4000);

    // NOTE: observable will not complete if an error is thrown.
      // setTimeout(() => {
      //   observer.error('This does not work');
      // },5000);

      setTimeout(() => {
        observer.complete();
      },7000);

    // NOTE: observable will not emit anymore packages after completion.
      setTimeout(() => {
        observer.next('third package');
      },10000);

    });

    // Subscribe to Observable. Now check the console.
    this.observableExampleTwoSubscription = myObservable.subscribe(
        // Handle data packages
        (data: string) => {
          console.log("Data", data);
        },
        // Handle errors
        (error: string) => {
          console.error("Error", error);
        },
        // Handle completion
        () => {
          console.log("completed");
        }
    );
  }


  ngOnDestroy() {
    this.observableExampleOneSubscription.unsubscribe();
    this.observableExampleTwoSubscription.unsubscribe();
  }

}
