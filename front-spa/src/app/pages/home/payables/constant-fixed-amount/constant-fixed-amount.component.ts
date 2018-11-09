import {Component, Injectable, Input, OnInit} from '@angular/core';
import {ContainerizableInterface} from '../../../../shared/container/containerizable.interface';
import {ContainerizableClass} from '../../../../shared/container/containerizable.class';
import {PayableFixedFixedAmountModel} from '../../../../models/payable-fixed-fixed-amount.model';
import {ConstantFixedAmountService} from './constant-fixed-amount-service';

@Component({
  selector: 'app-constant-fixed-amount',
  templateUrl: './constant-fixed-amount.component.html'
})

@Injectable()
export class ConstantFixedAmountComponent extends ContainerizableClass implements OnInit {

  public items: Array<PayableFixedFixedAmountModel>;

  constructor(private constantFixedAmountService: ConstantFixedAmountService) {
    super();
  }

  ngOnInit() {

    this.constantFixedAmountService.payables()
      .subscribe((res) => {
        console.log('resOBSERVABLE');
        console.log(res);
        this.items = res.result;
        this.sumValues();
      });
  }

  /**
   * @Override
   */
  addNew() {
    console.log('@Override adding new from fixed amount comp.');
  }

  sumValues(): void {
    this.items.map((item) => {
      this.amountTotal += item.amount;
    });
  }

}
