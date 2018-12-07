import { Component, OnInit } from '@angular/core';
import { HandleuserService } from '../../services/handleuser.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.css']
})
export class SubsComponent implements OnInit {
  loggedIn: Boolean;

  constructor(
    private handleuserService: HandleuserService,
    private router: Router,
    private flashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {
    this.handleuserService.loggedIn().subscribe(data => {
      this.loggedIn = data.result;
    });
  }

  onSubscribeBoard(subid) {
    this.handleuserService.subscribeBoard(subid).subscribe(data => {
      if ( data.message == 'done' ) {
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
