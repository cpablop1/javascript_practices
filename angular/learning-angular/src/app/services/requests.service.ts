import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class RequestsService {
    private url: string;

    constructor(private _http: HttpClient) {
        this.url = 'https://reqres.in/';
    }

    getUser(userId: any): Observable<any> {
        return this._http.get(this.url + 'api/users/' + userId);
    }

    addUser(user: any): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.post(this.url + 'api/users', params, {headers: headers});
    }
}