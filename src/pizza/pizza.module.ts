import { Module } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { PizzaController } from './pizza.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PizzaSchema } from '../schemas/pizza.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Pizza', schema: PizzaSchema }]),
  ],
  controllers: [PizzaController],
  providers: [PizzaService],
})
export class PizzaModule {}
