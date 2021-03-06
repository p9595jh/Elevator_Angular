import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { HandleuserService } from '../../services/handleuser.service';
import { HandleboardService } from '../../services/handleboard.service';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.css']
})
export class FreeComponent implements OnInit, OnDestroy {
  navigationSubscription;
  loggedIn: boolean;
  free: any[];
  user: any;

  constructor(
    private handleuserService: HandleuserService,
    private handleboardService: HandleboardService,
    private router: Router
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if ( e instanceof NavigationEnd ) {
        this.initialiseInvites();
      }
    });
  }

  openInfoWindow(userid: string) {
    this.handleuserService.openWindow('this.handleuserService.ServerAddress + /info?userid='+userid);
  }

  toWritePage() {
    location.href = this.handleuserService.ServerAddress + "/write?type=free";
  }

  initialiseInvites() {
    this.ngOnInit();
  }

  ngOnDestroy() {
    if ( this.navigationSubscription ) {
      this.navigationSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.handleuserService.loggedIn().subscribe(data => {
      this.loggedIn = data.result;
      this.handleboardService.getFrees().subscribe(result => {
        this.free = result.free;
        this.user = result.user;
      });
    });
  }

}
