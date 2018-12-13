import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: Object[];

  constructor(
    private http: Http,
    private router: Router,
    private flashMessage: NgFlashMessageService
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

  onStopUser(userid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:3000/ajax/stop', {userid: userid}, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe(data => {
      if ( data.message == 'done' ) {
        if ( data.stop ) {
          document.getElementById(userid).style.color = "red";
          document.getElementById(userid + 'button').innerHTML = "해제";
          this.flashMessage.showFlashMessage({
            messages: ['정지 완료'],
            type: 'success',
            timeout: 3000
          });
        }
        else {
          document.getElementById(userid).style.color = "black";
          document.getElementById(userid + 'button').innerHTML = "정지";
          this.flashMessage.showFlashMessage({
            messages: ['해제 완료'],
            type: 'success',
            timeout: 3000
          });
        }
      }
      else {
        this.flashMessage.showFlashMessage({
          messages: ['에러가 발생하였습니다'],
          type: 'danger',
          timeout: 3000
        });
      }
    });
  }

}
