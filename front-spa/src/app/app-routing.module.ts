import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreditCardComponent } from './credit-card/credit-card.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'creditCard', component: CreditCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
