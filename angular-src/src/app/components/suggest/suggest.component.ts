import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

import { Http, Headers, Response } from '@angular/http';
import { HandleuserService } from '../../services/handleuser.service';
import { HandleboardService } from '../../services/handleboard.service';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent implements OnInit {
  loggedIn: boolean;
  content: any[];
  comment: String;

  constructor(
    private handleuserService: HandleuserService,
    private handleboardService: HandleboardService,
    private router: Router,
    private http: Http,
    private flashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {
    this.handleuserService.loggedIn().subscribe(data => {
      this.loggedIn = data.result;
      this.handleboardService.getSuggests().subscribe(data => {
        this.content = data.content;
      });
    });

  }

  onWrite() {
    const formData = {
      comment: this.comment
    }
    this.handleboardService.handleSuggest(formData).subscribe(data => {
      if ( data.success ) {
        this.router.navigate(['./suggest']);
      }
      else {
        this.flashMessage.showFlashMessage({
          messages: ['글작성 에러'],
          type: 'danger',
          timeout: 3000
        });
      }
    })
  }

}
