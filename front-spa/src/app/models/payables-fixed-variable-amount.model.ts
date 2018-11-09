export class PayablesFixedVariableAmountModel {

  id: number;
  amount_paid: number;
  amount_planned: number;
  category_id: number;
  created_at: string;
  description: string;
  due_date: string;
  updated_at: string;
  user_id: number;
  pro_teste: number;

  constructor(ref: {id, amount_paid, amount_planned, category_id, created_at, description, due_date, updated_at, user_id}) {
    this.id = ref.id;
    this.amount_paid = parseFloat(ref.amount_paid);
    this.amount_planned = parseFloat(ref.amount_planned);
    this.category_id = ref.category_id;
    this.created_at = ref.created_at;
    this.description = ref.description;
    this.due_date = ref.due_date;
    this.updated_at = ref.updated_at;
    this.user_id = ref.user_id;
  }

  // static find(): Array<PayablesFixedVariableAmountModel>{
  //   const fakeHttpResponseData: Array<any> = [
  //     {
  //       id: 1,
  //       description: 'Item fake 1',
  //       day: 23,
  //       amount: 12,
  //     },
  //     {
  //       id: 2,
  //       description: 'Item fake 2',
  //       day: 23,
  //       amount: 12,
  //     }
  //   ];
  //
  //   const res: Array<PayablesFixedVariableAmountModel> = [];
  //
  //   fakeHttpResponseData.map((item, idx, all) => {
  //     res.push(new PayablesFixedVariableAmountModel(item));
  //   });
  //
  //   return res;
  // }
}
