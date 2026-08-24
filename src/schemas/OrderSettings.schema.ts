import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class OrderSettings {
    @Prop({ required: true })
    currency!: string;
    @Prop({ type: String, nullable: true })
    discountCode?: string | null;
    @Prop({required : true , type : String })
    shippingPriority!: string;
}

export const OrderSettingsSchema = SchemaFactory.createForClass(OrderSettings);
