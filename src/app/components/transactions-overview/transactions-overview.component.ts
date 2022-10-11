import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transactions-overview',
  templateUrl: './transactions-overview.component.html',
  styleUrls: ['./transactions-overview.component.css'],
})
export class TransactionsOverviewComponent implements OnInit {
  totalAmount = 0;
  toggle = false;
  types = ['income', 'investment', 'outcome', 'loan'];

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.totalAmount = this.transactionsService.getTotal();
  }

  getAmount(type: string) {
    return this.transactionsService.getFilteredList(type).length;
  }

  handleToggle() {
    this.toggle = !this.toggle;
  }
}
