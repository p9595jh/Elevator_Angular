import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { HandleuserService } from '../../services/handleuser.service';
import { HandleboardService } from '../../services/handleboard.service';

@Component({
  selector: 'app-subboard',
  templateUrl: './subboard.component.html',
  styleUrls: ['./subboard.component.css']
})
export class SubboardComponent implements OnInit, OnDestroy {
  navigationSubscription;
  type: String;

  loggedIn: Boolean;
  title: String;
  sub: Object;
  subcontents: Object[];
  user: Object;

  constructor(
    private handleuserService: HandleuserService,
    private handleboardService: HandleboardService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.type = this.route.snapshot.queryParamMap.get('type');
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if ( e instanceof NavigationEnd ) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this.handleuserService.loggedIn().subscribe(data => {
      this.loggedIn = data.result;
      this.handleboardService.getSubcontents(this.type).subscribe(result => {
        if ( result.result ) {
          this.title = result.title;
          this.sub = result.sub;
          this.subcontents = result.subcontents;
          this.user = result.user;
        }
        else {
          this.router.navigate(['./start']);
        }
      });
    })
  }

  ngOnDestroy() {
    if ( this.navigationSubscription ) {
      this.navigationSubscription.unsubscribe();
    }
  }

  toWritePage() {
    location.href = "http://localhost:3000/write?type=" + this.type;
  }

  openInfoWindow(userid: string) {
    this.handleuserService.openWindow('http://localhost:3000/info?userid='+userid);
  }

  openPlayListWindow(userid: string) {
    this.handleuserService.openWindow('http://localhost:3000/openplaylist?userid='+userid);
  }

  openViewLiveWindow(userid: string) {
    this.handleuserService.openWindow('http://localhost:3000/live/view?userid='+userid);
  }

  openMakeLiveWindow(userid: string) {
    this.handleuserService.openWindow('http://localhost:3000/live/make?userid='+userid);
  }

}
