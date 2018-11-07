import {Component, Injectable, Input, OnInit} from '@angular/core';
import {ContainerizableClass} from '../../../../shared/container/containerizable.class';
import {ConstantFixedAmountModel} from '../constant-fixed-amount/constant-fixed-amount.model';

@Component({
  selector: 'app-constant-variable-amount',
  templateUrl: './constant-variable-amount.component.html',
})

export class ConstantVariableAmountComponent extends ContainerizableClass implements OnInit {

  public items: Array<ConstantFixedAmountModel>;

  @Input() theTeste: string;

  constructor() {
    super();

    this.items = ConstantFixedAmountModel.find();
  }

  ngOnInit() {
    console.log('init!');
  }

  addNew() {
    console.log('Override ok!');
  }

  sumValues() {
    return 678.90;
  }
}
