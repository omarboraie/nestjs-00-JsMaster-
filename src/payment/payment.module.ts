import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from '../schemas/payment.schema';
import { OrderSchema } from '../schemas/order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Payment.name, schema: PaymentSchema },
      {name: 'Order', schema:OrderSchema}
    ]),
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
  exports: [],
})
export class PaymentModule {}