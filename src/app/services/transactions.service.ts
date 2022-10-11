import { Injectable } from '@angular/core';
import transactionsJson from '../../files/transactions.json';
import { ITotal } from '../models/ITotal';
import { ITransaction } from '../models/ITransaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  data: ITotal = transactionsJson;
  transactionsList: ITransaction[] = this.data.data;

  getTotal(): number {
    return this.data.total;
  }

  getFilteredList(type: string): ITransaction[] {
    const transactionsList = this.transactionsList.filter((item) =>
      this.filter(type, item)
    );
    return transactionsList;
  }

  filter(type: string, item: ITransaction): boolean {
    switch (item.type) {
      case type: {
        return true;
      }
      default: {
        return false;
      }
    }
  }
}
