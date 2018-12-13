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

  getSubcontents(type) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/subboard?type='+type, {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  getNotices() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/notice', {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  getSubs() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/subs', {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  handleWrite(formData: any) {
    let headers = new Headers();
    headers.append('enctype', 'multipart/form-data');
    return this.http.post('http://localhost:3000/handleWrite', formData, {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  handleSuggest(formData: any) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/handleSuggest', formData, {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  handleNotice(formData: any) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/handleNotice', formData, {headers: headers}).pipe(map((res: Response) => res.json()));
  }

}
