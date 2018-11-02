import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NegativeArrowUpComponent } from './graphs/negative-arrow-up/negative-arrow-up.component';
import { NegativeArrowDownComponent } from './graphs/negative-arrow-down/negative-arrow-down.component';
import { HomeComponent } from './home/home.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DataboxComponent } from './databox/databox.component';
import { ReceivablesComponent } from './receivables/receivables.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NegativeArrowUpComponent,
    NegativeArrowDownComponent,
    HomeComponent,
    CreditCardComponent,
    DataboxComponent,
    ReceivablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
