import mongoose from 'mongoose';
import { PizzaSize } from 'src/pizza/dto/create-pizza.dto';

export interface IPizza extends mongoose.Document {
  size: PizzaSize;
  name: string;
  ingredients?: string[];
}

export const PizzaSchema = new mongoose.Schema(
  {
    size: {
      type: String,
      enum: [PizzaSize.small, PizzaSize.medium, PizzaSize.large],
      default: PizzaSize.small,
    },
    name: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
);

const Pizza = mongoose.model<IPizza>('Pizza', PizzaSchema);

export default Pizza;
