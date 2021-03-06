import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

import { HandleuserService } from '../../services/handleuser.service';
import { HandleboardService } from '../../services/handleboard.service';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent implements OnInit, OnDestroy {
  navigationSubscription;
  loggedIn: boolean;
  content: any[];
  comment: string;
  id: string;

  constructor(
    private handleuserService: HandleuserService,
    private handleboardService: HandleboardService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: NgFlashMessageService
  ) {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if ( e instanceof NavigationEnd ) {
        this.initialiseInvites();
      }
    });
  }

  ngOnInit() {
    this.handleuserService.loggedIn().subscribe(data => {
      this.loggedIn = data.result;
      this.handleboardService.getSuggests().subscribe(data => {
        this.content = data.content;
        let el = document.getElementById(this.id);
        if ( el ) {
          el.scrollIntoView();
        }
      });
    });

  }

  openInfoWindow(userid: string) {
    this.handleuserService.openWindow(this.handleuserService.ServerAddress + '/info?userid='+userid);
  }

  initialiseInvites() {
    this.ngOnInit();
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
    this.handleboardService.handleSuggest(formData).subscribe(data => {
      if ( data.success ) {
        // this.router.navigate(['./suggest']);
        this.router.navigated = false;
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
