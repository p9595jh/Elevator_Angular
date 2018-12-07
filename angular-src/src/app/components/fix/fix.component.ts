import { Component, OnInit } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fix',
  templateUrl: './fix.component.html',
  styleUrls: ['./fix.component.css']
})
export class FixComponent implements OnInit {
  user: Object;

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    this.http.get('http://localhost:3000/fix', {headers: headers}).pipe(map((res: Response) => res.json())).subscribe(data => {
      this.user = data.user;
    });
  }

}
