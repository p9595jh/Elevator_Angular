import { Component, OnInit } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { NgFlashMessageService } from 'ng-flash-messages';
import { HandleuserService } from '../../services/handleuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fix',
  templateUrl: './fix.component.html',
  styleUrls: ['./fix.component.css']
})
export class FixComponent implements OnInit {
  user: any;

  password: String;
  passwordNew: String;
  nickname: String;
  genre: String;
  intro: String;
  image: File;

  constructor(
    private http: Http,
    private flashMessage: NgFlashMessageService,
    private handleuserService: HandleuserService,
    private router: Router
  ) { }

  ngOnInit() {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    this.http.get('http://localhost:3000/fix', {headers: headers}).pipe(map((res: Response) => res.json())).subscribe(data => {
      this.user = data.user;
    });
  }

  onFixSubmit() {
    const formData = {
      password: this.password,
      passwordNew: this.passwordNew,
      nickname: this.nickname,
      genre: this.genre,
      intro: this.intro,
      image: this.image.name
    }
    this.handleuserService.fixUser(formData).subscribe(data => {
      if ( data.success ) {
        this.router.navigate(['./start']);
      }
      else {
        this.flashMessage.showFlashMessage({
          messages: [data.errmsg],
          type: 'danger',
          timeout: 3000
        });
      }
    })
  }

}
