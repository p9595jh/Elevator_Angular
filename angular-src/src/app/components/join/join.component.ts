import { Component, OnInit } from '@angular/core';
import { HandleuserService } from '../../services/handleuser.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  id: String;
  password: String;
  email: String;
  nickname: String;
  genre: String;
  intro: String;

  constructor(
    private handleuserService: HandleuserService,
    private router: Router,
    private http: Http,
    private flashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {
  }

  submitRegister() {
    const user = {
      id: this.id,
      password: this.password,
      email: this.email,
      nickname: this.nickname,
      genre: this.genre,
      intro: this.intro
    };

    this.handleuserService.handleRegi(user).subscribe(data => {
      if ( !data.success ) {
        this.flashMessage.showFlashMessage({
          messages: [data.errmsg],
          type: 'danger',
          timeout: 3000
        })
      }
      else {
        this.router.navigate(['./start']);
      }
    })
  }

}
