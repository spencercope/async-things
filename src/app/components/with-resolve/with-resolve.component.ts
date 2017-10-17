import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-with-resolve',
  templateUrl: './with-resolve.component.html',
  styleUrls: ['./with-resolve.component.css']
})
export class WithResolveComponent implements OnInit {

  randomUsers: any;
  res: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    var data = this.route.data['value'].someName['_body'];
    console.log(this.route.data);
    this.res = JSON.parse(this.route.data['value'].someName['_body']);
    this.randomUsers = this.res.results;
    console.log(this.randomUsers);
  }

  ngOnInit() {
  }

}
