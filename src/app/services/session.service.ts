import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SessionService {
    user: {
        username: string,
        loggedIn: boolean
    } = {
        username: '',
        loggedIn: false
    };

    constructor() {
        let userString = window.localStorage.getItem('user');
        try {
            if (userString) { this.user = JSON.parse(userString); }
            else { console.log('user not found'); }
        }
        catch (err) {
            console.log('could not parse')
        }
    }

    setSession(user: { username: string }) {
        this.user.username = user.username;
        this.user.loggedIn = true;

        let userString = JSON.stringify(this.user);
        window.localStorage.setItem('user', userString);
    }

    clearSession(){
        this.user.loggedIn = false;
        this.user.username = '';
        window.localStorage.removeItem('user');
    }

    getSession() {
        return this.user;
    }

    isLoggedIn() {
        return this.user.loggedIn;
    }
}