import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export enum PizzaSize {
  small = 'SMALL',
  medium = 'MEDIUM',
  large = 'LARGE',
}

export class CreatePizzaDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  size: PizzaSize;

  @IsString()
  @IsNotEmpty()
  name: string;

  @MaxLength(20, {
    each: true,
  })
  ingredients: string[];
}
