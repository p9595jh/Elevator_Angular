import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { HandleuserService } from '../../services/handleuser.service';

@Component({
  selector: 'app-subadmin',
  templateUrl: './subadmin.component.html',
  styleUrls: ['./subadmin.component.css']
})
export class SubadminComponent implements OnInit {
  sub: any;
  clean: any[];
  user: any;

  constructor(
    private http: Http,
    private router: Router,
    private flashMessage: NgFlashMessageService,
    private handleuserService: HandleuserService
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

  openInfoWindow(userid: string) {
    this.handleuserService.openWindow('http://localhost:3000/info?userid='+userid);
  }

  onStopUser(userid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:3000/ajax/substop', {boardtype: this.sub.id, userid: userid}, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe(data => {
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
