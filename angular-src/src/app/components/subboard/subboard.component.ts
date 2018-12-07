import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HandleuserService } from '../../services/handleuser.service';
import { HandleboardService } from '../../services/handleboard.service';

@Component({
  selector: 'app-subboard',
  templateUrl: './subboard.component.html',
  styleUrls: ['./subboard.component.css']
})
export class SubboardComponent implements OnInit {
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

}
