import { IsMongoId, IsNotEmpty, IsNumber, IsOptional ,ValidateNested } from "class-validator";
import { CreatePaymentDto } from "../../payment/dto/CreatePayment.dto";
import mongoose from "mongoose";
export class CreateOrderSettingsDto {
        currency?: string;
        discountCode?: string | null;
        shippingPriority?: string;
}
export class CreateOrderDto {
    @IsNotEmpty()
    items!: { name: string, price: number, quantity: number }[];
    @IsNotEmpty()
    @IsNumber()
    total!: CreatePaymentDto;
    @IsNotEmpty()
    orderId!: string;
    @IsNotEmpty()
    customerName!: string;
    @IsNotEmpty()
    date!: Date;
    @IsOptional()
    @ValidateNested()
    settings!: CreateOrderSettingsDto;
    @IsNotEmpty()
    @IsMongoId()
    userID!: mongoose.Types.ObjectId;
}