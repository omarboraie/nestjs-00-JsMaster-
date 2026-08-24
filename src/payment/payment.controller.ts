import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/CreatePayment.dto';
import mongoose from 'mongoose';
import { UpdatePaymentDto } from './dto/UpdatePayment.dto';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createPayment(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.createPayment(createPaymentDto);
  }

  @Get()
  getPayments() {
    return this.paymentService.getPayments();
  }

  @Get(':id')
  async getPaymentById(@Param('id') paymentId: string) {
    const idIsValid = mongoose.Types.ObjectId.isValid(paymentId);
    if (!idIsValid) {
      throw new NotFoundException(`Payment with ID ${paymentId} not found`);
    }
    const findPayment = await this.paymentService.getPaymentById(paymentId);
    if (!findPayment) {
      throw new NotFoundException(`Payment with ID ${paymentId} not found`);
    }
    return findPayment;
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updatePayment(@Body() updatePaymentDto: UpdatePaymentDto, @Param('id') paymentId: string) {
    const idIsValid = mongoose.Types.ObjectId.isValid(paymentId);
    if (!idIsValid) {
      throw new NotFoundException(`Payment with ID ${paymentId} not found`);
    }
    const updatedPayment = await this.paymentService.updatePayment(paymentId, updatePaymentDto);
    if (!updatedPayment) {
      throw new NotFoundException(`Payment with ID ${paymentId} not found`);
    }
    return updatedPayment;
  }

  @Delete(':id')
  async deletePayment(@Param('id') paymentId: string) {
    const isValid = mongoose.Types.ObjectId.isValid(paymentId);
    if (!isValid) {
      throw new NotFoundException(`Payment with ID ${paymentId} not found`);
    }
    const deletedPayment = await this.paymentService.deletePayment(paymentId);
    if (!deletedPayment) {
      throw new NotFoundException(`Payment with ID ${paymentId} not found`);
    }
    return deletedPayment;
  }
}