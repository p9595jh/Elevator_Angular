import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class HandleboardService {

  constructor(private http:Http) { }

  getFrees() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/free', {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  getMusics() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/music', {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  getSuggests() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/suggest', {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  handleWrite(formData) {
    let headers = new Headers();
    headers.append('enctype', 'multipart/form-data');
    return this.http.post('http://localhost:3000/handleWrite', formData, {headers: headers}).pipe(map((res: Response) => res.json()));
  }

}
