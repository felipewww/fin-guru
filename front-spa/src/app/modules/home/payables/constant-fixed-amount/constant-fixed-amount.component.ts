import {Component, Injectable, Input, OnInit} from '@angular/core';
import {ContainerizableInterface} from '../../../../shared/container/containerizable.interface';
import {ContainerizableClass} from '../../../../shared/container/containerizable.class';
import {PayablesFixedFixedAmountModel} from '../../../../services/payables-fixed/payables-fixed-fixed-amount.model';
import {ConstantFixedAmountService} from '../../../../services/payables-fixed/constant-fixed-amount-service';

@Component({
  selector: 'app-constant-fixed-amount',
  templateUrl: './constant-fixed-amount.component.html'
})

@Injectable()
export class ConstantFixedAmountComponent extends ContainerizableClass implements OnInit {

  public items: Array<PayablesFixedFixedAmountModel>;

  constructor(private constantFixedAmountService: ConstantFixedAmountService) {
    super();
  }

  ngOnInit() {

    // this.constantFixedAmountService.payables()
    //   .subscribe((res) => {
    //     console.log('resOBSERVABLE');
    //     console.log(res);
    //     this.items = res.result;
    //     this.sumValues();
    //   });

    this.constantFixedAmountService.payables()
      .then(res => {
        this.items = res;
        this.sumValues();
      })
      .catch(err => {
        console.error('catch comp ERROR!');
        console.error(err);
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
