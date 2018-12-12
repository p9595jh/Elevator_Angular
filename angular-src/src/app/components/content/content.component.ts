import { Component, OnInit } from '@angular/core';
import { HandleuserService } from '../../services/handleuser.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
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

  board: String;
  _id: String;
  comment: String;

  contentnum: Number;
  num: Number;
  id: String;
  commentBoardtype: String;

  constructor(
    private handleuserService: HandleuserService,
    private router: Router,
    private http:Http,
    private route: ActivatedRoute,
    private flashMessage: NgFlashMessageService
  ) {
    this.paramType = this.route.snapshot.queryParamMap.get('type');
    this.paramNum = this.route.snapshot.queryParamMap.get('num');
  }

  ngOnInit() {
    this.handleuserService.loggedIn().subscribe(data => {
      this.loggedIn = data.result;

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.get('http://localhost:3000/content?type='+this.paramType+'&num='+this.paramNum, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe(result => {
        this.user = result.user;
        this.imageWidth = result.imageWidth;
        this.content = result.content;
        this.type = result.type;
        this.listurl = result.listurl;
        this.boardtype = result.boardtype;
        this.all = result.all;
      });
    });
  }

  onWriteComment() {
    const formData = {
      board: this.board,
      _id: this._id,
      comment: this.comment
    };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:3000/comment', formData, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe(data => {
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

  onDeleteComment() {
    const formData = {
      contentnum: this.contentnum,
      num: this.num,
      id: this.id,
      boardtype: this.commentBoardtype
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:3000/delete/comment', formData, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe(data => {
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
      _id: this.content._id,
      id: this.user.id,
      count: count
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:3000/ajax', formData, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe(data => {
      if ( this.paramType == 'music' ) {
        var gradeSpan = document.getElementById("gradeSpan");
        gradeSpan.innerHTML = "평점 " + data.grade + " by " + data.people + "명";
      }
      else {
        var recommendBtn = document.getElementById("recommendBtn");
        recommendBtn.innerHTML = "추천 " + data.recommend;
      }
    });
  }

}
