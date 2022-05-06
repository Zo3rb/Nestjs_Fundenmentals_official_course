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
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<IPizza[]> {
    try {
      const pizzas = await this.pizzaModel.find();
      return pizzas;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: string): Promise<IPizza> {
    try {
      const pizza = await this.pizzaModel.findById(id);
      if (!pizza)
        throw new HttpException('Pizza is Not Found', HttpStatus.NOT_FOUND);
      return pizza;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: string, updatePizzaDto: UpdatePizzaDto): Promise<IPizza> {
    try {
      const pizzaToUpdate = await this.pizzaModel.findByIdAndUpdate(
        id,
        updatePizzaDto,
        { new: true },
      );
      if (!pizzaToUpdate)
        throw new HttpException('Pizza is Not Found', HttpStatus.NOT_FOUND);
      return pizzaToUpdate;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: string): Promise<string> {
    try {
      const pizzaToDelete = await this.pizzaModel.findByIdAndDelete(id);
      if (!pizzaToDelete)
        throw new HttpException('Pizza is Not Found', HttpStatus.NOT_FOUND);
      return 'Pizza is Deleted Successfully';
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
