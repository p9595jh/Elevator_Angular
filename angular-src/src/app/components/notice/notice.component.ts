import { Component, OnInit } from '@angular/core';
import { HandleboardService } from '../../services/handleboard.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  user: Object;
  content: Object[];
  comment: String;

  constructor(
    private handleboardService: HandleboardService,
    private router: Router,
    private flashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {
    this.handleboardService.getNotices().subscribe(data => {
      this.user = data.user;
      this.content = data.content;
    });
  }

  onWrite() {
    const formData = {
      comment: this.comment
    }
    this.handleboardService.handleNotice(formData).subscribe(data => {
      if ( data.success ) {
        this.router.navigated = false;
        this.router.navigate(['./notice']);
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
