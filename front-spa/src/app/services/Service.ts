import {ConnectionBackend, Headers, Http, Response} from '@angular/http';
import {Model} from './Model';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {PayablesFixedFixedAmountModel} from './payables-fixed/payables-fixed-fixed-amount.model';

const httpOptions = {
    headers: new Headers({
        'Content-Type':  'application/json',
        'Authorization': environment.fixedToken
    })
};

export class Service {

    protected http: Http;
    // constructor(private http: Http) {
    constructor() {
        // this.http = new Htt\a);
    }

    async get(url, typeForMap) {
        return new Promise((resolve, reject) => {
            this.http.get(environment.apiUrl + url, httpOptions)
            // Http.get(environment.apiUrl + url, httpOptions)
                .toPromise()
                .then(res => {

                    resolve(
                        this.mapper(res, typeForMap)
                    );

                })
                .catch(err => {
                    reject('Algo deu errado na consulta da API!');
                });
        });
    }

    mapper(response: Response, typeForMap: any): Array<Model> {

        const data = [];

        const result = response.json().result;

        result.map(item => {
            data.push(new typeForMap(item));
        });

        return data;
    }
}
