import { Component, OnInit, Input } from '@angular/core';
import { ReceivablesModel } from './receivables/receivables.model';

import { ReceivablesComponent } from './receivables/receivables.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
