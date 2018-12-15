import { Component, OnInit, OnDestroy } from '@angular/core';
import { HandleuserService } from '../../services/handleuser.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {
  navigationSubscription;
  paramType: String;
  paramNum: String;

  loggedIn: boolean;
  user: any;
  imageWidth: Number;
  content: any;
  type: String;
  listurl: String;
  boardtype: String;
  all: Object[];
  writer: any;

  comment: String;
  num: Number;
  audioPath: string = '';

  constructor(
    private handleuserService: HandleuserService,
    private router: Router,
    private http:Http,
    private route: ActivatedRoute,
    private flashMessage: NgFlashMessageService
  ) {
    this.paramType = this.route.snapshot.queryParamMap.get('type');
    this.paramNum = this.route.snapshot.queryParamMap.get('num');
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if ( e instanceof NavigationEnd ) {
        this.initialiseInvites();
      }
    });
  }

  ngOnInit() {
    this.handleuserService.loggedIn().subscribe(data => {
      this.loggedIn = data.result;

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.get(this.handleuserService.ServerAddress + '/content?type='+this.paramType+'&num='+this.paramNum, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe(result => {
        this.user = result.user;
        this.imageWidth = result.imageWidth;
        this.content = result.content;
        this.type = result.type;
        this.listurl = result.listurl;
        this.boardtype = result.boardtype;
        this.all = result.all;
        this.writer = result.writer;
        this.audioPath = this.content.audio;
      });
    });
  }

  initialiseInvites() {
    this.ngOnInit();
  }

  ngOnDestroy() {
    if ( this.navigationSubscription ) {
      this.navigationSubscription.unsubscribe();
    }
  }

  openInfoWindow(userid: string) {
    this.handleuserService.openWindow(this.handleuserService.ServerAddress + '/info?userid='+userid);
  }

  onWriteComment() {
    const formData = {
      board: this.listurl,
      _id: this.content._id,
      comment: this.comment
    };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.handleuserService.ServerAddress + '/comment', formData, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe(data => {
      if ( data.success ) {
        this.router.navigated = false;
        this.router.navigate(['./content'], {queryParams: {type: this.paramType, num: this.paramNum}});
      }
      else {
        this.flashMessage.showFlashMessage({
          messages: [data.msg],
          type: 'danger',
          timeout: 3000
        });
      }
    });
  }

  onDeleteContent() {
    if ( confirm('정말 삭제하시겠습니까?') ) {
      const formData = {
        id: this.content.id,
        num: this.content.num,
        boardtype: this.paramType
      }
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.handleuserService.ServerAddress + '/delete/' + this.paramType, formData, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe(data => {
        if ( data.success ) {
          this.router.navigated = false;
          this.router.navigate(['./'+this.listurl], {queryParams: {type: this.paramType}});
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

  onDeleteComment(num) {
    const formData = {
      contentnum: this.content.num,
      num: num,
      id: this.content.id,
      boardtype: this.paramType
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.handleuserService.ServerAddress + '/delete/comment', formData, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe(data => {
      if ( data.success ) {
        this.router.navigated = false;
        this.router.navigate(['./content'], {queryParams: {type: this.paramType, num: this.paramNum}});
      }
      else {
        this.flashMessage.showFlashMessage({
          messages: [data.msg],
          type: 'danger',
          timeout: 3000
        });
      }
    });
  }

  onRecommend() {
    var count = this.paramType == 'music' ? (<HTMLSelectElement> document.getElementById('grade')).value : 1;
    const formData = {
      boardtype: this.paramType,
      id: this.user.id,
      count: count,
      num: this.content.num
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.handleuserService.ServerAddress + '/ajax', formData, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe(data => {
      if ( data.msg == 'duplicate' ) {
        this.flashMessage.showFlashMessage({
          messages: ['이미 추천하셨습니다'],
          type: 'danger',
          timeout: 3000
        });
      }
      else {
        if ( this.paramType == 'music' ) {
          var gradeSpan = document.getElementById("gradeSpan");
          gradeSpan.innerHTML = "평점 " + data.grade + " by " + data.people + "명";
        }
        else {
          var recommendbtn = document.getElementById("recommendbtn");
          recommendbtn.innerHTML = "추천 " + data.recommend;
        }
      }
    });
  }

  requestBoard() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.handleuserService.ServerAddress + '/ajax/boardrequest', {userid: this.content.id, _id: this.content._id}, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe(data => {
      document.getElementById("boardRequest").style.display = "none";
    });
  }

  acceptBoard() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.handleuserService.ServerAddress + '/ajax/acceptboardrequest', {userid: this.content.id, _id: this.content._id}, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe(data => {
      document.getElementById("boardRequest").style.display = "none";
    });
  }

}
