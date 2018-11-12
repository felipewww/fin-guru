import { Component, OnInit, Input } from '@angular/core';
import { ReceivablesModel } from './receivables/receivables.model';

import { ReceivablesComponent } from './receivables/receivables.component';

// noinspection TsLint
import {FormConstantFixedAmountComponent} from './payables/constant-fixed-amount/form-constant-fixed-amount/form-constant-fixed-amount.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
      console.log(this);
  }

}
