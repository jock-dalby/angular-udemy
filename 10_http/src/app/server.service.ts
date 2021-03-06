import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; // Needed for .map observable operator

@Injectable() // Required because injecting th Angular Http service

export class ServerService {

    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://udemy-ng-http-e7c21.firebaseio.com/data.json',
            servers,
            {headers: headers}
            );
        // 1. headers here is not strictly necessary as this is default setting anyway, but leave in for reference.
        // 2. data.json is firebase specific but needs to be at end of url to stop CORS errors
        // 3. This returns an observable, but so long as nothing is subscribed, no request will be sent. We will subscribe in the component where we call this method.
    }

    overwrtieServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('https://udemy-ng-http-e7c21.firebaseio.com/data.json',
            servers,
            {headers: headers}
        );
        // 1. headers here is not strictly necessary as this is default setting anyway, but leave in for reference.
        // 2. data.json is firebase specific but needs to be at end of url to stop CORS errors
        // 3. This returns an observable, but so long as nothing is subscribed, no request will be sent. We will subscribe in the component where we call this method.
    }

    getServersOne() {
       return this.http.get('https://udemy-ng-http-e7c21.firebaseio.com/data.json')
           .catch(
               (error: Response) => {
                   console.log(error);
                   return Observable.throw(error);
               }
               );
    }

    getServersTwo() {
        return this.http.get('https://udemy-ng-http-e7c21.firebaseio.com/data.json')
        // The map function takes the old observable and maps the data we get back and transforms it and wraps it in a new observable (so we are still returning an observable when called.)
            .map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            )
            .catch(
                (error: Response) => {
                    console.log(error);
                    return Observable.throw(error);
                }
            );
    }

    // Use overwrite before testing so comes back without array values
    getServersThree() {
        return this.http.get('https://udemy-ng-http-e7c21.firebaseio.com/data.json')
            .map(
                (response: Response) => {
                    const data = response.json();
                    console.log('DATA 1', data);
                    for (const server of data) {
                        server.name = 'FETCHED_' + server.name;
                    }
                    console.log('DATA 2', data);
                    return data;
                }
            )
            .catch(
                (error: Response) => {
                    console.log(error);
                    return Observable.throw('Something went wrong');
                }
            );
    }

    getAppName() {
        return this.http.get('https://udemy-ng-http-e7c21.firebaseio.com/appName.json')
            .map(
                (response: Response) => {
                    return response.json();
                }
            );
    }
}