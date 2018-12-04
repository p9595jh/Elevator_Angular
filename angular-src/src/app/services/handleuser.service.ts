import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable(
  // {providedIn: 'root'}
)
export class HandleuserService {

  constructor(
    private http:Http,
    private router:Router
  ) { }

  loggedIn() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/login/ng', {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  loggingIn(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/login', user, {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  getLoginData() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/login/data', {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  logout() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.get('http://localhost:3000/logout', {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  handleRegi(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/handleRegi', user, {headers: headers}).pipe(map((res: Response) => res.json()));
  }

}
