import { Component, OnInit } from '@angular/core';
import { HandleuserService } from '../../services/handleuser.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  id: String;
  password: String;

  constructor(
    private handleuserService: HandleuserService,
    private router: Router,
    private http:Http,
    private flashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      id: this.id,
      password: this.password
    }

    this.handleuserService.loggingIn(user).subscribe(data => {
      if ( data.success ) {
        this.router.navigate(['./start']);
      }
      else {
        this.flashMessage.showFlashMessage({
          messages: ['로그인 실패'],
          type: 'danger',
          timeout: 3000
        });
      }
    });
  }

}
