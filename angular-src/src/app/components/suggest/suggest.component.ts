import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HandleuserService } from '../../services/handleuser.service';
import { HandleboardService } from '../../services/handleboard.service';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent implements OnInit {
  loggedIn: boolean;
  content: any[];

  constructor(
    private handleuserService: HandleuserService,
    private handleboardService: HandleboardService
  ) { }

  ngOnInit() {
    this.handleuserService.loggedIn().subscribe(data => {
      this.loggedIn = data.result;
      this.handleboardService.getSuggests().subscribe(data => {
        this.content = data.content;
      });
    });

  }

}
