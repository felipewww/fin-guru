import {Model} from '../Model';


export class PayablesFixedFixedAmountModel extends Model{
  id: number;
  description: string;
  day: number;
  amount: number;

  constructor(ref: { id, description, day, amount }) {
    super();
    this.id = ref.id;
    this.description = ref.description;
    this.day = ref.day;
    this.amount = parseFloat(ref.amount);
  }
}
