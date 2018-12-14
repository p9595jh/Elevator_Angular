import { Component, OnInit, OnDestroy } from '@angular/core';
import { HandleuserService } from '../../services/handleuser.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HandleboardService } from '../../services/handleboard.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit, OnDestroy {
  navigationSubscription;
  goto: String;
  type: String;
  num: String;

  free: any[];
  music: any[];
  suggest: any[];

  loggedIn: boolean;
  user: Object;
  id: String;
  password: String;

  constructor(
    private handleuserService: HandleuserService,
    private handleboardService: HandleboardService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if ( this.route.snapshot.queryParamMap.get('goto') ) {
      this.goto = this.route.snapshot.queryParamMap.get('goto');
      this.type = this.route.snapshot.queryParamMap.get('type');
      this.num = this.route.snapshot.queryParamMap.get('num');
      this.router.navigate(['./'+this.goto], {queryParams: {type: this.type, num: this.num}});
    }
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if ( e instanceof NavigationEnd ) {
        this.initialiseInvites();
      }
    });
  }

  ngOnInit() {
    this.handleuserService.getLoginData().subscribe(data => {
      this.loggedIn = data.result;
      this.user = data.user;
      this.handleboardService.getStartPageInfos().subscribe(result => {
        this.free = result.free;
        this.music = result.music;
        this.suggest = result.suggest;
      })
    });
  }

  initialiseInvites() {
    this.handleuserService.getLoginData().subscribe(data => {
      this.loggedIn = data.result;
      this.user = data.user;
    });
  }

  ngOnDestroy() {
    if ( this.navigationSubscription ) {
      this.navigationSubscription.unsubscribe();
    }
  }

  openInfoWindow(userid: string) {
    this.handleuserService.openWindow('http://localhost:3000/info?userid='+userid);
  }

  onLoginSubmit() {
    const formData = {
      id: this.id,
      password: this.password
    }

    this.handleuserService.loggingIn(formData).subscribe(data => {
      if ( data.success ) {
        this.router.navigated = false;
        this.router.navigate(['./start']);
      }
      else {
        this.router.navigate(['localhost:3000/loginpage']);
        
      }
    })
  }

  onLogoutClick() {
    this.handleuserService.logout().subscribe(data => {
      this.router.navigated = false;
      this.router.navigate(['./start']);
    });
  }

}
