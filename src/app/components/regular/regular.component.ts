import { Component, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-regular',
  templateUrl: './regular.component.html',
  styleUrls: ['./regular.component.css']
})
export class RegularComponent implements OnInit {

  data: any;

  constructor(
    public http: Http
  ) { }

  ngOnInit() {
    this.http.get('http://localhost:3333/services/util/withTimeout')
      .subscribe(data => {
        console.log(data);
        this.data = data['_body'];
        console.log(this.data);
      })
  }

}
