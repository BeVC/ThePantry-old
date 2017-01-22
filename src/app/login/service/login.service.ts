// ANGULAR
import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Subject } from "rxjs/Subject";

// RXJS
import 'rxjs/add/operator/toPromise';

// MODELS
import { User } from '../../models/user';

@Injectable()
export class LoginService {

  private usersUrl = "app/users";

  constructor(
    private http: Http
  ) { }

  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
