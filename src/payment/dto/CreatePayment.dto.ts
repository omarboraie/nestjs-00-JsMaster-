import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsNumber()
  amount!: number;

  @IsNotEmpty()
  @IsString()
  currency!: string;

  @IsNotEmpty()
  @IsString()
  orderId!: string;

  @IsOptional()
  @IsString()
  status?: string; 

  @IsOptional()
  @IsString()
  paymentMethod?: string;
}