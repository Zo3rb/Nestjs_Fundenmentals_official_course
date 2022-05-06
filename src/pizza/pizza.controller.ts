import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { IPizza } from '../schemas/pizza.schema';

@Controller('pizza')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Post()
  create(@Body() createPizzaDto: CreatePizzaDto): Promise<IPizza> {
    return this.pizzaService.create(createPizzaDto);
  }

  @Get()
  findAll(): Promise<IPizza[]> {
    return this.pizzaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<IPizza> {
    return this.pizzaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePizzaDto: UpdatePizzaDto,
  ): Promise<IPizza> {
    return this.pizzaService.update(id, updatePizzaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<string> {
    return this.pizzaService.remove(id);
  }
}
