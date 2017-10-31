import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {
  constructor(private http: Http) {
  }
  getAccounts() {
    return this.http.get("./assets/data.json").map((res) => <Account[]>res.json().data);
  }
}