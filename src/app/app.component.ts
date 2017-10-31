import { Component } from '@angular/core';
import { AccountService } from '../service/account.service';
import { Account } from '../models/account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  sorting: string = '';
    curSortCol: string;
    prevSortCol: string;
    accounts: Account[] = [];
    accountsToDisplay: Account[] = [];
    showLoadMore: boolean = true;
    
    constructor(private accountService: AccountService) {
        this.accountService.getAccounts().subscribe((accounts) => {
            this.accounts = accounts;
            //console.log(this.accounts);
            this.getAccountsToDisplay();           
        });
    }

    sort(col: string) {
        if (this.prevSortCol === col && this.sorting === 'asc') {
            this.accounts.sort((a, b) => parseFloat(b[col]) - parseFloat(a[col]));
            this.sorting = 'desc';
        } 
        else {
            this.accounts.sort((a, b) => parseFloat(a[col]) - parseFloat(b[col]));
            this.sorting = 'asc';
        }
        
        this.curSortCol = col;
        this.prevSortCol = this.curSortCol;
        if (this.showLoadMore) {
            this.getAccountsToDisplay();
        }
    }
      
    loadMore() {
        this.showLoadMore = false;
        this.accountsToDisplay = this.accounts;
    }

    private getAccountsToDisplay() {
        this.accountsToDisplay = this.accounts.slice(0, 3);
    }
}
