import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PizzaSize } from 'src/pizza/dto/create-pizza.dto';

@Schema({ timestamps: true })
export class Pizza extends Document {
  @Prop([
    {
      type: String,
      enum: [PizzaSize.small, PizzaSize.medium, PizzaSize.large],
    },
  ])
  size: PizzaSize;

  @Prop({ required: true })
  name: string;

  @Prop([String])
  ingredients: string[];
}

export const PizzaSchema = SchemaFactory.createForClass(Pizza);

// export interface IPizza extends mongoose.Document {
//   size: PizzaSize;
//   name: string;
//   ingredients?: string[];
// }

// export const PizzaSchema = new mongoose.Schema(
//   {
//     size: {
//       type: String,
//       enum: [PizzaSize.small, PizzaSize.medium, PizzaSize.large],
//       default: PizzaSize.small,
//     },
//     name: {
//       type: String,
//       required: true,
//     },
//     ingredients: {
//       type: [String],
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

// const Pizza = mongoose.model<IPizza>('Pizza', PizzaSchema);

// export default Pizza;
