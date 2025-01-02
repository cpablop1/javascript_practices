import { Injectable } from "@angular/core";
import { Global } from "./global";

@Injectable()
export class UploadService {
    // Class attributes
    public api: string;

    // Class constructor
    constructor() {
        this.api = Global.api;
    }

    // Class methods
    makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string) {
        // Code here....
        return new Promise((resolve, reject) => {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();

            for (var i = 0; i < files.length; i++) {
                formData.append(name, files[i], files[i].name);
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }

            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }
}