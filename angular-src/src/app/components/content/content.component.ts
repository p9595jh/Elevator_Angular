import { Component, OnInit } from '@angular/core';
import { HandleuserService } from '../../services/handleuser.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  paramType: String;
  paramNum: String;

  loggedIn: boolean;
  user: Object;
  imageWidth: Number;
  content: Object;
  type: String;
  listurl: String;
  boardtype: String;
  all: Object[];

  constructor(
    private handleuserService: HandleuserService,
    private router: Router,
    private http:Http,
    private route: ActivatedRoute
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

}
