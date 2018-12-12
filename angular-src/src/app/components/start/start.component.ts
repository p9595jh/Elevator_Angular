import { Component, OnInit } from '@angular/core';
import { HandleuserService } from '../../services/handleuser.service';
import { Router } from '@angular/router';

import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  loggedIn: boolean;
  user: Object;
  id: String;
  password: String;

  constructor(
    private handleuserService: HandleuserService,
    private router: Router,
    private http:Http,
    private location: Location
  ) { }

  ngOnInit() {
    this.handleuserService.getLoginData().subscribe(data => {
      this.loggedIn = data.result;
      this.user = data.user;
    });
  }

  onLoginSubmit() {
    const formData = {
      id: this.id,
      password: this.password
    }

    this.handleuserService.loggingIn(formData).subscribe(data => {
      if ( data.success ) {
        this.router.navigate(['./start']);
      }
      else {
        this.router.navigate(['localhost:3000/loginpage']);
        
      }
    })
  }

  onLogoutClick() {
    this.handleuserService.logout().subscribe(data => {
      this.router.navigated = false;
      this.router.navigate(['./start']);
    });
  }

}
