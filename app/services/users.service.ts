import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './models/user'

@Injectable()
export class UsersService {
    
    constructor(private http: Http) {}
    
    getAll() : Promise<User[]> {
        return this.http.get('http://jsonplaceholder.typicode.com/users')
            .toPromise()
            .then(response => response.json() as User[])
            .catch(this.handleError);
    }
    
    handleError(error: any) {
        console.error('An error occurred', error); 
    }
}