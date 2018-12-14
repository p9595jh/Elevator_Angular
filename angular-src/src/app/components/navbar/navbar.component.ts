import { Component, OnInit, OnDestroy } from '@angular/core';
import { HandleuserService } from '../../services/handleuser.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  navigationSubscription;
  loggedIn: Boolean;

  constructor(
    private handleuserService: HandleuserService,
    private router: Router
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if ( e instanceof NavigationEnd ) {
        this.initialiseInvites();
      }
    });
  }

  ngOnInit() {
    this.handleuserService.loggedIn().subscribe(data => {
      this.loggedIn = data.result;
    });
  }

  initialiseInvites() {
    this.ngOnInit();
  }

  ngOnDestroy() {
    if ( this.navigationSubscription ) {
      this.navigationSubscription.unsubscribe();
    }
  }

  onLogoutClick() {
    this.handleuserService.logout().subscribe(data => {
      this.router.navigated = false;
      this.router.navigate(['./start']);
    });
  }


}
