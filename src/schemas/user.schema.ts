import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { UserSettings } from './UserSettings.schema';
import { Order } from './order.schema';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  username!: string;

  @Prop({ required: true, unique: true })
  email!: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }], default: [] })
  posts?: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserSettings', required: false })
  settings?: UserSettings;

  @Prop()
  orders!:Order[]
}

export const UserSchema = SchemaFactory.createForClass(User);