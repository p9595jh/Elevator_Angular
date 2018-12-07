import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: Object[];

  constructor(
    private http: Http,
    private router: Router
  ) { }

  ngOnInit() {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    this.http.get('http://localhost:3000/admin', {headers: headers}).pipe(map((res: Response) => res.json())).subscribe(data => {
      if ( data.result ) {
        this.users = data.users;
      }
      else {
        this.router.navigate(['./start']);
      }
    })
  }

}
