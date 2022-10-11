import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsOverviewComponent } from './components/transactions-overview/transactions-overview.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';

@NgModule({
  declarations: [AppComponent, TransactionsOverviewComponent, TransactionDetailsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
