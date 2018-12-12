import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
  }

  find(type) {
    if ( type == 'id' ) {
      var code = (<HTMLInputElement> document.getElementById("findid")).value;
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:3000/ajax/find', {type: type, code: code}, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe((data: Find) => {
        document.getElementById("idresult").innerHTML = data.result;
      });
    }
    else {
      var code = (<HTMLInputElement> document.getElementById("findpw")).value;
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:3000/ajax/find', {type: type, code: code}, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe((data: Find) => {
        document.getElementById("pwresult").innerHTML = data.result;
      });
    }
  }

}

interface Find {
  result: string;
}
