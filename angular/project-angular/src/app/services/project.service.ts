import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./global";

@Injectable()
export class ProjectService{
    // Class attributes
    public api: string;

    // Constructor method
    constructor(
        private _http: HttpClient
    ){
        this.api = Global.api;
    }

    // Methods
    testService(){
        return 'Testing Angular service';
    }
}