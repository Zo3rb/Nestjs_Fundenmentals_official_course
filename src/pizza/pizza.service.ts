import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { CreatePizzaDto, PizzaSize } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { Pizza } from './entities/pizza.entity';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PizzaService {
  pizzas: Pizza[] = [
    {
      id: '1',
      size: PizzaSize.small,
      name: "Ali's Pizza",
      ingredients: ['dough', 'meat', 'oliver', 'eggs', 'salt', 'tomatoes'],
    },
    {
      id: '2',
      size: PizzaSize.medium,
      name: "Ahmed's Pizza",
      ingredients: ['dough', 'meat', 'oliver', 'eggs', 'salt', 'tomatoes'],
    },
    {
      id: '3',
      size: PizzaSize.large,
      name: "Islam's Pizza",
      ingredients: ['dough', 'meat', 'oliver', 'eggs', 'salt', 'tomatoes'],
    },
  ];

  create(createPizzaDto: CreatePizzaDto): {
    id: string;
    pizza: CreatePizzaDto;
  } {
    let id = uuidv4();
    this.pizzas.push({ id, ...createPizzaDto });
    return { id, pizza: createPizzaDto };
  }

  findAll(): Pizza[] {
    return this.pizzas;
  }

  findOne(id: string): Pizza {
    const pizzaToReturn = this.pizzas.find((pizza) => pizza.id === id);
    if (!pizzaToReturn)
      throw new HttpException("Pizza's Is not Found", HttpStatus.NOT_FOUND);
    return pizzaToReturn;
  }

  update(id: string, updatePizzaDto: UpdatePizzaDto): Pizza {
    let pizzaToUpdate = this.pizzas.find((pizza) => pizza.id === id);
    if (!pizzaToUpdate)
      throw new HttpException("Pizza's Is not Found", HttpStatus.NOT_FOUND);
    pizzaToUpdate = { ...pizzaToUpdate, ...updatePizzaDto };
    return pizzaToUpdate;
  }

  remove(id: string): string {
    const pizzaToDelete = this.pizzas.find((pizza) => pizza.id === id);
    if (!pizzaToDelete)
      throw new HttpException("Pizza's Is not Found", HttpStatus.NOT_FOUND);
    this.pizzas = this.pizzas.filter((pizza) => pizza.id !== id);
    return `Pizza with Id: ${id} have been Deleted`;
  }
}
