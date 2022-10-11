import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITransaction } from 'src/app/models/ITransaction';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css'],
})
export class TransactionDetailsComponent implements OnInit {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private transactionsService: TransactionsService
  ) {}
  filteredList: ITransaction[] = [];
  types = ['income', 'investment', 'outcome', 'loan'];
  tab: string | null = null;

  ngOnInit(): void {
    this.tab = this.activatedRoute.snapshot.queryParamMap.get('tab');
    this.filteredList = this.transactionsService.getFilteredList(
      isNaN(Number(this.tab)) ? this.types[0] : this.types[Number(this.tab)]
    );
  }

  handleClick(i: number) {
    this.filteredList = this.transactionsService.getFilteredList(this.types[i]);
  }
}
