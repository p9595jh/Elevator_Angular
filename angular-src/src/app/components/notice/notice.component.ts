import { Component, OnInit } from '@angular/core';
import { HandleboardService } from '../../services/handleboard.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  user: Object;
  content: Object[];

  constructor(
    private handleboardService: HandleboardService
  ) { }

  ngOnInit() {
    this.handleboardService.getNotices().subscribe(data => {
      this.user = data.user;
      this.content = data.content;
    });
  }

}
