import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HandleuserService } from '../../services/handleuser.service';
import { HandleboardService } from '../../services/handleboard.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  loggedIn: boolean;
  music: any[];

  constructor(
    private handleuserService: HandleuserService,
    private handleboardService: HandleboardService
  ) { }

  ngOnInit() {
    this.handleuserService.loggedIn().subscribe(data => {
      this.loggedIn = data.result;
      this.handleboardService.getMusics().subscribe(data => {
        this.music = data.music;
      });
    });

  }

}
