import {Component, Input, OnInit, ContentChild, AfterContentInit, ContentChildren, Directive, QueryList} from '@angular/core';

import {ConstantFixedAmountComponent} from '../../pages/home/payables/constant-fixed-amount/constant-fixed-amount.component';
import {ConstantVariableAmountComponent} from '../../pages/home/payables/constant-variable-amount/constant-variable-amount.component';
import {ContainerizableClass} from './containerizable.class';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit, AfterContentInit {

  @Input() contentType: string;
  @Input() title: string;
  @Input() highlightTitle: string;

  // private sum: number = null;

  @ContentChild('ConstantFixedAmountComponent, ConstantVariableAmountComponent') component: ContainerizableClass;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

  addNewEvent() {
    this.component.addNew();
  }
}
