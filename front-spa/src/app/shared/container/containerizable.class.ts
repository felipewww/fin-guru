import {ContainerizableInterface} from './containerizable.interface';

export class ContainerizableClass implements ContainerizableInterface{

  public items: Array<any>;

  public amountTotal: number;

  constructor() {
    this.items = [];
    this.amountTotal = 0;
  }

  private errorLog(info: { methodName }): void {
    console.error(info.methodName + ' is not defined yet. This method should be override by child class', this);
  }

  addNew() {
    this.errorLog({
      methodName: 'addNew'
    });
  }

  sumValues(): void {
    this.errorLog({
      methodName: 'sumValues'
    });
  }
}
