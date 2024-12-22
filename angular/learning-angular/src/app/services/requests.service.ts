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
}