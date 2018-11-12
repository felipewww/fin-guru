import {Headers, Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {PayablesFixedFixedAmountModel} from './payables-fixed-fixed-amount.model';
import {Model} from '../Model';
import {Service} from '../Service';
import {environment} from '../../../environments/environment';
// import 'rxjs/add/operator/map';
// import * as map from 'rxjs/add/operator/map';

const httpOptions = {
  headers: new Headers({
    'Content-Type':  'application/json',
    'Authorization': environment.fixedToken
  })
};

@Injectable()
export class ConstantFixedAmountService extends Service {
  constructor(public http: Http) {
    super();
  }

  async payables(): Promise<PayablesFixedFixedAmountModel|any> {

    return await this.get('payables/fixed/fixedAmount/', PayablesFixedFixedAmountModel);
    // return new Promise((resolve, reject) => {
      // this.http.get(environment.apiUrl + 'payables/fixed/fixedAmount/', httpOptions)
      //   .toPromise()
      //   .then(res => {
      //
      //     resolve(
      //       this.mapper(res, PayablesFixedFixedAmountModel)
      //     );
      //
      //   })
      //   .catch(err => {
      //     reject('Algo deu errado na consulta da API!');
      //   });

    // });
  }
}
