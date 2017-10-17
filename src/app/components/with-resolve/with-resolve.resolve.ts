import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { QueryResult } from 'breeze-client';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";


@Injectable()
export class WithResolveResolve {
  constructor(
    private http: Http
  ) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.http.get('http://localhost:3333/services/util/withTimeout');
  }
}
