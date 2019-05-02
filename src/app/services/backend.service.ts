import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createPipeInstance } from '@angular/core/src/view/provider';

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    url: string = 'http://localhost:4200';

    contacts: any[] = [];

    constructor(private http: HttpClient) { }
        
    getContacts(){
        const endpoint = this.url + '/api/contacts';
        return this.http.get(endpoint).toPromise();
    }


    register(user: { username: string }) {
        const endpoint = this.url + '/api/register';
        return this.http.post(endpoint, user).toPromise();
    }

    login(user: { username: string }) {
        const endpoint = this.url + '/api/login';
        return this.http.post(endpoint, user).toPromise();
    }

    logout() {
        const endpoint = this.url + '/api/login';
        return this.http.post(endpoint, {}).toPromise();

    }
}