import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './default/header/header.component';
import { NegativeArrowUpComponent } from './shared/graphs/negative-arrow-up/negative-arrow-up.component';
import { NegativeArrowDownComponent } from './shared/graphs/negative-arrow-down/negative-arrow-down.component';
import { HomeComponent } from './pages/home/home.component';
import { CreditCardComponent } from './pages/credit-card/credit-card.component';
import { ReceivablesComponent } from './pages/home/receivables/receivables.component';

import { ContainerComponent } from './shared/container/container.component';
import { ConstantFixedAmountComponent } from './pages/home/payables/constant-fixed-amount/constant-fixed-amount.component';
import { ConstantVariableAmountComponent } from './pages/home/payables/constant-variable-amount/constant-variable-amount.component';
import { MenuComponent } from './default/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';

import {HttpModule} from '@angular/http';
import {ConstantVariableAmountService} from './pages/home/payables/constant-variable-amount/constant-variable-amount-service';
import {ConstantFixedAmountService} from './pages/home/payables/constant-fixed-amount/constant-fixed-amount-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NegativeArrowUpComponent,
    NegativeArrowDownComponent,
    HomeComponent,
    CreditCardComponent,
    ReceivablesComponent,
    ContainerComponent,
    ConstantFixedAmountComponent,
    ConstantVariableAmountComponent,
    MenuComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    ConstantVariableAmountService,
    ConstantFixedAmountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
