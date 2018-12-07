import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.css']
})
export class ReloadComponent implements OnInit {
  params: String[];

  constructor(
    private http:Http,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

}
