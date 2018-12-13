import { Component, OnInit } from '@angular/core';
import { HandleuserService } from '../../services/handleuser.service';
import { HandleboardService } from '../../services/handleboard.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.css']
})
export class SubsComponent implements OnInit {
  loggedIn: Boolean;
  sub: Object[];
  user: Object;

  constructor(
    private handleuserService: HandleuserService,
    private router: Router,
    private flashMessage: NgFlashMessageService,
    private handleboardService: HandleboardService
  ) { }

  ngOnInit() {
    this.handleuserService.loggedIn().subscribe(data => {
      this.loggedIn = data.result;
      this.handleboardService.getSubs().subscribe(data => {
        this.sub = data.sub;
        this.user = data.user;
      })
    });
  }

  onSubscribeBoard(subid) {
    if ( confirm('구독하시겠습니까?') ) {
      this.handleuserService.subscribeBoard(subid).subscribe(data => {
        if ( data.message == 'done' ) {
          this.router.navigated = false;
          this.router.navigate(['./subs']);
        }
        else {
          this.flashMessage.showFlashMessage({
            messages: ['에러 발생: ' + data.message],
            type: 'danger',
            timeout: 3000
          });
        }
      })
    }
  }

}
