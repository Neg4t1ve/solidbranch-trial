import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { TransactionsOverviewComponent } from './components/transactions-overview/transactions-overview.component';

const routes: Routes = [
  { path: '', component: TransactionsOverviewComponent },
  { path: 'navigator', component: TransactionDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
