import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { HandleuserService } from '../../services/handleuser.service';
import { HandleboardService } from '../../services/handleboard.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit, OnDestroy {
  navigationSubscription;
  loggedIn: boolean;
  music: any[];
  user: any;

  constructor(
    private handleuserService: HandleuserService,
    private handleboardService: HandleboardService,
    private router: Router
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if ( e instanceof NavigationEnd ) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this.handleuserService.loggedIn().subscribe(data => {
      this.loggedIn = data.result;
      this.handleboardService.getMusics().subscribe(result => {
        this.music = result.music;
        this.user = result.user;
      });
    });

  }

  ngOnDestroy() {
    if ( this.navigationSubscription ) {
      this.navigationSubscription.unsubscribe();
    }
  }

  toWritePage() {
    location.href = this.handleuserService.ServerAddress + '/write?type=music';
  }

  openInfoWindow(userid: string) {
    this.handleuserService.openWindow(this.handleuserService.ServerAddress + '/info?userid='+userid);
  }

}
