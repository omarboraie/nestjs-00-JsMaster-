import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Payment {
  @Prop({ required: true })
  amount!: number;

  @Prop({ required: true })
  currency!: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true })
  orderId!: string;

  @Prop({ default: 'pending' })
  status!: string;

  @Prop()
  paymentMethod?: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);