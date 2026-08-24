import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment } from '../schemas/payment.schema';
import { CreatePaymentDto } from './dto/CreatePayment.dto';
import { UpdatePaymentDto } from './dto/UpdatePayment.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<Payment>,
  ) {}

  async createPayment(createPaymentDto: CreatePaymentDto) {
    const newPayment = new this.paymentModel(createPaymentDto);
    return newPayment.save();
  }

  getPayments() {
    return this.paymentModel.find().populate('orderId');
  }

  getPaymentById(id: string) {
    return this.paymentModel.findById(id).populate('orderId');
  }

  updatePayment(id: string, updatePaymentDto: UpdatePaymentDto) {
    return this.paymentModel.findByIdAndUpdate(id, updatePaymentDto, { new: true });
  }

  deletePayment(id: string) {
    return this.paymentModel.findByIdAndDelete(id);
  }
}