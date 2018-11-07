export class ConstantFixedAmountModel {
  id: number;
  description: string;
  day: number;
  amount: number;

  constructor(ref: { id, description, day, amount }) {
    this.id = ref.id;
    this.description = ref.description;
    this.day = ref.day;
    this.amount = ref.amount;
  }

  static find(): Array<ConstantFixedAmountModel>{
    const fakeHttpResponseData: Array<any> = [
      {
        id: 1,
        description: 'Item fake 1',
        day: 23,
        amount: 12,
      },
      {
        id: 2,
        description: 'Item fake 2',
        day: 23,
        amount: 12,
      }
    ];

    const res: Array<ConstantFixedAmountModel> = [];

    fakeHttpResponseData.map((item, idx, all) => {
      res.push(new ConstantFixedAmountModel(item));
    });

    return res;
  }
}
