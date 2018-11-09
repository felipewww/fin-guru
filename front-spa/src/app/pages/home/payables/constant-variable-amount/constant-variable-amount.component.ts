import {Component, Injectable, Input, OnInit} from '@angular/core';
import {ContainerizableClass} from '../../../../shared/container/containerizable.class';

import { environment } from '../../../../../environments/environment';
import {ConstantVariableAmountService} from './constant-variable-amount-service';
import {PayablesFixedVariableAmountModel} from '../../../../models/payables-fixed-variable-amount.model';

@Component({
  selector: 'app-constant-variable-amount',
  templateUrl: './constant-variable-amount.component.html',
})

@Injectable()
export class ConstantVariableAmountComponent extends ContainerizableClass implements OnInit {

  public items: Array<PayablesFixedVariableAmountModel>;

  constructor(private constantVariableAmountService: ConstantVariableAmountService) {
    super();
  }

  ngOnInit() {
    // TODO - Manter isso aqui para consulta futura, este é um modo mais clean de requisitar AJAX
    // this.constantVariableAmountService.payables()
    //   .subscribe((res) => {
    //     console.log('resOBSERVABLE');
    //     console.log(res);
    //   });

    this.constantVariableAmountService.payablesPromise()
      .then(res => {
        this.items = res;
        this.afterResponse();
      })
      .catch(err => {
        console.error('catch comp ERROR!');
        console.error(err);
      });
  }

  private afterResponse(): void {
    this.sumValues();
  }

  addNew() {
    console.log('Override ok!');
  }

  sumValues(): void {
    this.items.map((item) => {
      this.amountTotal += item.amount_paid;
    });
  }
}
