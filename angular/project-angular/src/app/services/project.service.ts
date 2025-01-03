import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ObjectUnsubscribedError, Observable, retry } from "rxjs";
import { Global } from "./global";
import { Project } from "../models/project";

@Injectable()
export class ProjectService {
    // Class attributes
    public api: string;

    // Constructor method
    constructor(
        private _http: HttpClient
    ) {
        this.api = Global.api;
    }

    // Methods
    testService() {
        return 'Testing Angular service';
    }

    saveProject(project: Project): Observable<any> {
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.post(this.api + 'save-project', params, { headers: headers });
    }

    getProjects(): Observable<any> {
        let headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.get(this.api + 'projects', { headers: headers });
    }

    getProject(id: any): Observable<any> {
        let headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.get(this.api + 'project/' + id, { headers: headers });
    }
}