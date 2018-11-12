import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { NegativeArrowUpComponent } from './shared/graphs/negative-arrow-up/negative-arrow-up.component';
import { NegativeArrowDownComponent } from './shared/graphs/negative-arrow-down/negative-arrow-down.component';
import { HomeComponent } from './modules/home/home.component';
import { ReceivablesComponent } from './modules/home/receivables/receivables.component';

import { ContainerComponent } from './shared/container/container.component';
import { ConstantFixedAmountComponent } from './modules/home/payables/constant-fixed-amount/constant-fixed-amount.component';
import { ConstantVariableAmountComponent } from './modules/home/payables/constant-variable-amount/constant-variable-amount.component';
import { MenuComponent } from './core/components/menu/menu.component';

import {HttpModule} from '@angular/http';
import {ConstantVariableAmountService} from './services/payables-variable/constant-variable-amount-service';
import {ConstantFixedAmountService} from './services/payables-fixed/constant-fixed-amount-service';
import {Service} from './services/Service';
import { FormModalComponent } from './shared/form-modal/form-modal.component';

// noinspection TsLint
import {FormConstantFixedAmountComponent} from './modules/home/payables/constant-fixed-amount/form-constant-fixed-amount/form-constant-fixed-amount.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NegativeArrowUpComponent,
        NegativeArrowDownComponent,
        HomeComponent,
        ReceivablesComponent,
        ContainerComponent,
        ConstantFixedAmountComponent,
        ConstantVariableAmountComponent,
        MenuComponent,
        FormModalComponent,
        FormConstantFixedAmountComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule
        // Service
    ],
    entryComponents: [
        // FormModalComponent
    ],
    providers: [
        FormModalComponent,
        Service,
        ConstantVariableAmountService,
        ConstantFixedAmountService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
