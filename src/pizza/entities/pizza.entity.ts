import { PizzaSize } from '../dto/create-pizza.dto';

export class Pizza {
  id: string;
  size: PizzaSize;
  name: string;
  ingredients: string[];
}
