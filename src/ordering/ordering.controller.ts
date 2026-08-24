import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrderingService } from './ordering.service';
import {CreateOrderDto} from './dto/CreateOrder.dto';
import mongoose from 'mongoose';
import { UpdateOrderDto } from './dto/UpdateOrder.dto';
@Controller('ordering')
export class OrderingController {
    constructor(private readonly orderingService: OrderingService ) {}
    @Post()
    @UsePipes(new ValidationPipe())
    createOrder(@Body() createOrderDto: CreateOrderDto) {
        console.log('Received order:', createOrderDto);
        return this.orderingService.createOrder(createOrderDto);
    }

    @Get()
    getOrders() {
        return this.orderingService.getOrders();
    }

    @Get(':id')
    async getOrderById(@Param('id') orderId: string) {
        const idIsValid = mongoose.Types.ObjectId.isValid(orderId);
        if (!idIsValid) {
            throw new NotFoundException(`Order with ID ${orderId} not found`);
        }
        const findOrder = await this.orderingService.getOrderById(orderId);
        if (!findOrder) {
            throw new NotFoundException(`Order with ID ${orderId} not found`);
        }
        return findOrder;
    }

    @Patch(":id")
    @UsePipes(new ValidationPipe())
    async updateOrder(@Body() updateOrderDto: UpdateOrderDto, @Param('id') orderId: string) {
        const updatedOrder = await this.orderingService.updateOrder(orderId, updateOrderDto);
        if (!updatedOrder) {
            throw new NotFoundException(`Order with ID ${orderId} not found`);
        } 
        return updatedOrder;
    }

    @Delete(":id")
    async deleteOrder(@Param('id') orderId: string) {
        const isValid=mongoose.Types.ObjectId.isValid(orderId);
        if(!isValid){
            throw new NotFoundException(`Order with ID ${orderId} not found`);
        }
        const deletedOrder =await this.orderingService.deleteOrder(orderId);
        return deletedOrder;
    }
}
