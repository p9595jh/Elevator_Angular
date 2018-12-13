import { Component, OnInit, OnDestroy } from '@angular/core';
import { HandleuserService } from '../../services/handleuser.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit, OnDestroy {
  loggedIn: boolean;
  user: Object;
  id: String;
  password: String;
  navigationSubscription;

  constructor(
    private handleuserService: HandleuserService,
    private router: Router
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if ( e instanceof NavigationEnd ) {
        this.initialiseInvites();
      }
    })
  }

  ngOnInit() {
    this.handleuserService.getLoginData().subscribe(data => {
      this.loggedIn = data.result;
      this.user = data.user;
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

  openWindow(userid: string) {
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
