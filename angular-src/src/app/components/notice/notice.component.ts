import { Component, OnInit, OnDestroy } from '@angular/core';
import { HandleboardService } from '../../services/handleboard.service';
import { Router, NavigationEnd } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { HandleuserService } from '../../services/handleuser.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit, OnDestroy {
  navigationSubscription;
  user: Object;
  content: Object[];
  comment: string;

  constructor(
    private handleboardService: HandleboardService,
    private handleuserService: HandleuserService,
    private router: Router,
    private flashMessage: NgFlashMessageService
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if ( e instanceof NavigationEnd ) {
        this.initialiseInvites();
      }
    });
  }

  ngOnInit() {
    this.handleboardService.getNotices().subscribe(data => {
      this.user = data.user;
      this.content = data.content;
    });
  }

  initialiseInvites() {
    this.ngOnInit();
  }

  openInfoWindow(userid: string) {
    this.handleuserService.openWindow('http://localhost:3000/info?userid='+userid);
  }

  ngOnDestroy() {
    if ( this.navigationSubscription ) {
      this.navigationSubscription.unsubscribe();
    }
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
