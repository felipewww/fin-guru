import {Component, Injectable, Input, OnInit} from '@angular/core';
import {ContainerizableInterface} from '../../../../shared/container/containerizable.interface';
import {ContainerizableClass} from '../../../../shared/container/containerizable.class';

@Component({
  selector: 'app-constant-fixed-amount',
  templateUrl: './constant-fixed-amount.component.html'
})

// @Injectable
export class ConstantFixedAmountComponent extends ContainerizableClass implements OnInit {

  public objTeste: string;
  // @Input() teste?: string;

  // constructor(public propTest: string) {
  constructor() {
    super();
    // this.propTest = 'aa';
  }

  ngOnInit() {
  }

  /**
   * @Override
   */
  addNew() {
    console.log('@Override adding new from fixed amount comp.');
  }

  sumValues() {
    return 123.45;
  }

}
