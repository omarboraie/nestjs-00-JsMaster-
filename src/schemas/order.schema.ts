import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { OrderSettings } from './OrderSettings.schema';
import { Payment } from './payment.schema';

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true, min: 1 })
  items!: { name: string; price: number; quantity: number }[];

  @Prop({ type: mongoose.Schema.Types.Number, ref: 'Payment', required: true })
  total!: Payment;

  @Prop({ unique: true, required: true })
  orderId!: string;

  @Prop({ required: true })
  customerName!: string;


  @Prop({ required: true })
  date!: Date;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Payment', required: false})
  payment?: mongoose.Types.ObjectId

  @Prop({type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true})
  user!:  mongoose.Types.ObjectId
  
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'OrderSettings', required: false })
  settings?: OrderSettings | mongoose.Types.ObjectId; // allows both populated and ID
}

export const OrderSchema = SchemaFactory.createForClass(Order);