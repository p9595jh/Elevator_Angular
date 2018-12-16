import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

function _window() {
  return window;
}

@Injectable(
  // {providedIn: 'root'}
)
export class HandleuserService {
  public ServerAddress: string = 'http://localhost:3000';

  constructor(
    private http: Http,
    private router: Router
  ) { }

  openWindow(url: string) {
    const option = 'width=500, height=600, left=300, top=100, scrollbars=yes, toolbars=no, location=no';
    _window().open(url, '', option);
  }

  loggedIn() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.ServerAddress + '/login/ng', {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  loggingIn(user: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.ServerAddress + '/login', user, {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  getLoginData() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.ServerAddress + '/login/data', {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  logout() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.ServerAddress + '/logout', {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  handleRegi(user: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.ServerAddress + '/handleRegi', user, {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  subscribeBoard(formData: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.ServerAddress + '/ajax/subscribeboard', formData, {headers: headers}).pipe(map((res: Response) => res.json()));
  }

}
