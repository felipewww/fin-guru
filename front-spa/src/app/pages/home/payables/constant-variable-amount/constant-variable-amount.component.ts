import {Component, Injectable, Input, OnInit} from '@angular/core';
import {ContainerizableClass} from '../../../../shared/container/containerizable.class';

@Component({
  selector: 'app-constant-variable-amount',
  templateUrl: './constant-variable-amount.component.html',
  // providers: []
})

// @Injectable()

export class ConstantVariableAmountComponent extends ContainerizableClass implements OnInit {

  // public items: [{}];

  @Input() theTeste: string;

  // constructor(public items: string) {
  constructor() {
    super();
    this.items.push({
      id: 1,
      name: 'teste'
    });
  }

  // public It

  ngOnInit() {
    console.log('init!');
    // console.log("init!");
  }

  addNew() {
    console.log('Override ok!');
  }

  sumValues() {
    return 678.90;
  }
}
