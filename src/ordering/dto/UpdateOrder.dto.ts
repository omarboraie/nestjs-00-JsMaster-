import { IsNotEmpty, IsOptional } from "class-validator";
export class UpdateOrderDto{
     @IsNotEmpty()
     @IsOptional()
        items!: { name: string, price: number, quantity: number }[];

}