import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { HandleuserService } from './handleuser.service';

@Injectable()
export class HandleboardService {

  constructor(
    private http: Http,
    private handleuserService: HandleuserService
  ) { }

  getFrees() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.handleuserService.ServerAddress + '/free', {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  getMusics() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.handleuserService.ServerAddress + '/music', {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  getSuggests() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.handleuserService.ServerAddress + '/suggest', {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  getSubcontents(type) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.handleuserService.ServerAddress + '/subboard?type='+type, {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  getNotices() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.handleuserService.ServerAddress + '/notice', {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  getSubs() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.handleuserService.ServerAddress + '/subs', {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  getStartPageInfos() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.handleuserService.ServerAddress + '/start', {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  handleWrite(formData: any) {
    let headers = new Headers();
    headers.append('enctype', 'multipart/form-data');
    return this.http.post(this.handleuserService.ServerAddress + '/handleWrite', formData, {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  handleSuggest(formData: any) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(this.handleuserService.ServerAddress + '/handleSuggest', formData, {headers: headers}).pipe(map((res: Response) => res.json()));
  }

  handleNotice(formData: any) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(this.handleuserService.ServerAddress + '/handleNotice', formData, {headers: headers}).pipe(map((res: Response) => res.json()));
  }

}
