import {ContainerizableInterface} from './containerizable.interface';

export class ContainerizableClass implements ContainerizableInterface{

  public items: Array<any>;

  constructor() {
    this.items = [];
  }

  private errorLog(info: { methodName }): void {
    console.error(info.methodName + ' is not defined yet. This method should be override by child class', this);
  }

  addNew() {
    this.errorLog({
      methodName: 'addNew'
    });
  }

  sumValues(): number {
    this.errorLog({
      methodName: 'sumValues'
    });
    // let total = 0;
    // for(let item of this.ReferenceObject){
    //   total += item[this.sumPropertyName];
    // }
    //
    // this.sum = parseFloat(total.toFixed(2));
    return 0;
  }
}
