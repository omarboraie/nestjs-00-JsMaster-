import { Module } from '@nestjs/common';
import { OrderingService } from './ordering.service';
import { OrderingController } from './ordering.controller';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { Order, OrderSchema } from '../schemas/order.schema';
import { OrderSettings, OrderSettingsSchema } from '../schemas/OrderSettings.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }, { name: OrderSettings.name, schema: OrderSettingsSchema }])],
    controllers: [OrderingController],
    providers: [OrderingService],
    exports: [],
})
export class OrderingModule {}
