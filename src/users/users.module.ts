import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../schemas/user.schema';
import { UserSettings, UserSettingsSchema } from '../schemas/UserSettings.schema';
import { Order, OrderSchema } from '../schemas/order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: UserSettings.name, schema: UserSettingsSchema },
      { name: Order.name, schema: OrderSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [],
})
export class UsersModule {}