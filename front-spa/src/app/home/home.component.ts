import { Component, OnInit, Input } from '@angular/core';
import { ReceivablesModel } from '../models/receivables.model';

import { ReceivablesComponent } from '../receivables/receivables.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @Input() ReceivablesModel:ReceivablesModel;
  // ReceivablesModel:ReceivablesModel[{}];

  constructor() {
      // this.ReceivablesModel = [
      //     { id: }
      // ];
  }

  ngOnInit() {
  }

}
