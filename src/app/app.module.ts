import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccountService} from '../service/account.service';
import { HttpModule } from '@angular/http';
//import { Account } from '../models/account';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
