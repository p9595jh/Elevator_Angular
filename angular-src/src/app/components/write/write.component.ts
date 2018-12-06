import { Component, OnInit } from '@angular/core';
import { HandleuserService } from '../../services/handleuser.service';
import { HandleboardService } from '../../services/handleboard.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  title: String;
  content: String;
  tag: String;
  fileSrc: any;

  constructor(
    private handleuserService: HandleuserService,
    private handleboardSerivce: HandleboardService,
    private router: Router,
    private http: Http,
    private flashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {
    this.fileSrc = '';
  }

  onFileChange(files: FileList) {
    if ( files && files.length > 0 ) {
      const file = files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        this.fileSrc = reader.result;
      }
    }
  }

  submitWrite() {
    
  }

}
