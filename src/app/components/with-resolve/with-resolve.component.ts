import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-with-resolve',
  templateUrl: './with-resolve.component.html',
  styleUrls: ['./with-resolve.component.css']
})
export class WithResolveComponent implements OnInit {

  data: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.data = this.route.data['value'].someName['_body'];
  }

  ngOnInit() {
  }

}
