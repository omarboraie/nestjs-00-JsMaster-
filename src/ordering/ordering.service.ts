import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from '../schemas/order.schema';
import { CreateOrderDto } from '../ordering/dto/CreateOrder.dto';
import { UpdateOrderDto } from '../ordering/dto/UpdateOrder.dto';
import { OrderSettings } from '../schemas/OrderSettings.schema';
@Injectable()
export class OrderingService {
    constructor(@InjectModel(Order.name) private readonly orderModel: Model<Order>,@InjectModel(OrderSettings.name) private readonly orderSettingsModel: Model<OrderSettings>) {}
    async createOrder({settings,userID, ...createOrderDto}: CreateOrderDto) {
        if(settings){
            const orderSettings = new this.orderSettingsModel(settings);
            const savedSettings = await orderSettings.save();
            const newOrder= this.orderModel.create({...createOrderDto,settings: savedSettings._id,user:userID});
            return await newOrder
        }
        const newOrder= this.orderModel.create(createOrderDto);
        return await newOrder
}
    getOrders() {
        return this.orderModel.find()
        .populate('user')
        .populate('payment');
    }

    getOrderById(orderId:string){
        return this.orderModel.findById(orderId).populate('user')
        .populate('payment');
    }

    updateOrder(id: string, updateOrderDto: UpdateOrderDto) {
        return this.orderModel.findByIdAndUpdate(id, updateOrderDto,{returnDocument:"after"});
    }

    deleteOrder(id: string) {
        return this.orderModel.findByIdAndDelete(id);
    }
}
