import { Component, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import "rxjs/add/operator/map";
import {Observable, Subject} from 'rxjs/Rx';


@Component({
  selector: 'app-regular',
  templateUrl: './regular.component.html',
  styleUrls: ['./regular.component.css']
})
export class RegularComponent implements OnInit {

  randomUser: any;
  res: any;

  constructor(
    public http: Http
  ) { }

  ngOnInit() {
    this.http.get('https://randomuser.me/api/?results=50')
      .subscribe(data => {
        console.log(data);
        // this.res = JSON.parse(data['_body']);
        // this.randomUser = this.res.results[0];
        // console.log(this.randomUser);
        // console.log(this.randomUser.cell);
        this.randomUser = data['_body'];
      })
  }

}
