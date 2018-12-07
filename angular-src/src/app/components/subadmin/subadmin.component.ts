import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subadmin',
  templateUrl: './subadmin.component.html',
  styleUrls: ['./subadmin.component.css']
})
export class SubadminComponent implements OnInit {
  sub: Object;
  clean: Object[];
  user: Object;

  constructor(
    private http: Http,
    private router: Router
  ) { }

  ngOnInit() {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    this.http.get('http://localhost:3000/subadmin', {headers: headers}).pipe(map((res: Response) => res.json())).subscribe(data => {
      if ( data.result ) {
        this.sub = data.sub;
        this.clean = data.clean;
        this.user = data.user;
      }
      else {
        this.router.navigate(['./start']);
      }
    })
  }

}
