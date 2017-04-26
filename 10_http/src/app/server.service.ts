import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

@Injectable() // Required because injecting th Angular Http service

export class ServerService {

    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        // headers here is not strictly necessary as this is default setting anyway, but leave in for reference.
        return this.http.post('https://udemy-ng-http-e7c21.firebaseio.com/data.json',
            servers,
            {headers: headers}
            );
        // data.json is firebase specific but needs to be at end of url to stop CORS errors
        // This returns an observable, but so long as nothing is subscribed, no request will be sent. We will subscribe in the component where we call this method.
    }
}