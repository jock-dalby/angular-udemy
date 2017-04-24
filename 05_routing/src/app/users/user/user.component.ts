import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(
      private route: ActivatedRoute
  ) { }

  ngOnInit() {

    // This is a good way to get the params to populate the user object if only needs to be done once on render and WILL NOT CHANGE. IF YOU KNOW FOR SURE THAT YOUR COMPONENT WILL NEVER BE RELOADED FROM WITHIN THE COMPONENT THEN YOU CAN USE THE SNAPSHOT METHOD. OTHERWISE LOOK TO USE THE SUBSCRIBE OBSERVABLE.
    const user = this.route.snapshot.params;
    this.user = {
      id: user['id'],
      name: user['name']
    };

    // However, if there is the ability on the page to navigate to another route which will render the same component. Angular will recognise as the ame component and will not update the data. For this we use route.params, an observable. Using observables is an easy way to subscribe to some event which may happen at some point in the future
    this.paramsSubscription = this.route.params // if using onDestroy
    // this.route.params = // If not using onDestroy
        .subscribe(
            (params: Params) => {
              this.user = {
                id: params['id'],
                name: params['name']
              };
            }
        );
    // The subscribe method can take 3 functions you can pass to it as arguments. The first one is the most important and it will be fired whenever new data is passed through that observable (in this case, whenever this.route.params change).
  }

  ngOnDestroy() {
    // When you leave a component, Angular destroys that component and next time you come back it rebuilds another one. Angular automatically does the cleanup and unsubscribes anything inside the component but it is good practice to do it yoursef because if you ever make your own observables, then angular will not unsubscribe these. To implement this unsubscription on destroy, created a variable paramsSubscription, of type Subscription (imported from rxjs) and then assigned our observable to it. OnDestroy we then unsubscribe.
    this.paramsSubscription.unsubscribe();
  }

}
