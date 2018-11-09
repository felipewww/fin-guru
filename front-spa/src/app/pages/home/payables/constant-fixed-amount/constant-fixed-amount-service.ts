import {Headers, Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {PayableFixedFixedAmountModel} from '../../../../models/payable-fixed-fixed-amount.model';
// import 'rxjs/add/operator/map';
// import * as map from 'rxjs/add/operator/map';

const httpOptions = {
  headers: new Headers({
    'Content-Type':  'application/json',
    'Authorization': environment.fixedToken
  })
};

@Injectable()
export class ConstantFixedAmountService {
  constructor(private http: Http) {
  }


  payables(): Observable<PayableFixedFixedAmountModel[]> {
    return this.http.get(environment.apiUrl + 'payables/fixed/fixedAmount/', httpOptions).pipe(map(response => response.json()));
  }

  // async payablesPromise(): Promise<PayableFixedFixedAmountModel> {
  // async payablesPromise(): Promise<PayableFixedFixedAmountModel|any> {
  //
  //   return new Promise((resolve, reject) => {
  //     this.http.get(environment.apiUrl + 'payables/fixed/fixedAmount/', httpOptions)
  //       .toPromise()
  //       .then(res => {
  //
  //         if (res.ok) {
  //           let result = res.json().result;
  //           let info = [];
  //
  //           result.map(item => {
  //             info.push(new PayableFixedFixedAmountModel(item));
  //           });
  //
  //           resolve(info);
  //         } else {
  //           reject('Era pra dar certo, mas deu errado!');
  //         }
  //
  //       })
  //       .catch(err => {
  //         reject('Algo deu errado na consulta da API!');
  //       });
  //
  //   });
  // }
}
