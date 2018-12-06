import { Component, OnInit } from '@angular/core';
import { HandleuserService } from '../../services/handleuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: Boolean;

  constructor(
    private handleuserService: HandleuserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.handleuserService.loggedIn().subscribe(data => {
      this.loggedIn = data.result;
    });
  }

  onLogoutClick() {
    this.handleuserService.logout().subscribe(data => {
      this.router.navigate(['./start']);
    });
  }


}
