import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HandleuserService } from '../../services/handleuser.service';
import { HandleboardService } from '../../services/handleboard.service';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.css']
})
export class FreeComponent implements OnInit {
  loggedIn: boolean;
  free: any[];

  constructor(
    private handleuserService: HandleuserService,
    private handleboardService: HandleboardService
  ) { }

  ngOnInit() {
    this.handleuserService.loggedIn().subscribe(data => {
      this.loggedIn = data.result;
      this.handleboardService.getFrees().subscribe(data => {
        this.free = data.free;
      });
    });
  }

}
