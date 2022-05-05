import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreatePizzaDto, PizzaSize } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { IPizza } from '../schemas/pizza.schema';

@Injectable()
export class PizzaService {
  constructor(
    @InjectModel('Pizza') private readonly pizzaModel: Model<IPizza>,
  ) {}

  async create(createPizzaDto: CreatePizzaDto): Promise<IPizza> {
    try {
      const newPizza = await this.pizzaModel.create(createPizzaDto);
      return newPizza;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // findAll(): Pizza[] {
  //   return this.pizzas;
  // }

  // findOne(id: string): Pizza {
  //   const pizzaToReturn = this.pizzas.find((pizza) => pizza.id === id);
  //   if (!pizzaToReturn)
  //     throw new HttpException("Pizza's Is not Found", HttpStatus.NOT_FOUND);
  //   return pizzaToReturn;
  // }

  // update(id: string, updatePizzaDto: UpdatePizzaDto): Pizza {
  //   let pizzaToUpdate = this.pizzas.find((pizza) => pizza.id === id);
  //   if (!pizzaToUpdate)
  //     throw new HttpException("Pizza's Is not Found", HttpStatus.NOT_FOUND);
  //   pizzaToUpdate = { ...pizzaToUpdate, ...updatePizzaDto };
  //   return pizzaToUpdate;
  // }

  // remove(id: string): string {
  //   const pizzaToDelete = this.pizzas.find((pizza) => pizza.id === id);
  //   if (!pizzaToDelete)
  //     throw new HttpException("Pizza's Is not Found", HttpStatus.NOT_FOUND);
  //   this.pizzas = this.pizzas.filter((pizza) => pizza.id !== id);
  //   return `Pizza with Id: ${id} have been Deleted`;
  // }
}
