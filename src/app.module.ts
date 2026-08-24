import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderingController } from './ordering/ordering.controller';
import { OrderingService } from './ordering/ordering.service';
import { OrderingModule } from './ordering/ordering.module';
import { PaymentModule } from './payment/payment.module';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [OrderingModule, PaymentModule , MongooseModule.forRoot('mongodb+srv://omarborae2015_db_user:Omar@clusternest00.7qhgyvq.mongodb.net/?appName=ClusterNest00&retryWrites=true&w=majority'), UsersModule],
})
export class AppModule {}
