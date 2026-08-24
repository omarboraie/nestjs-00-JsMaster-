import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';
import mongoose from 'mongoose';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  getUsers() {
    return this.usersService.getsUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') userId: string) {
    const idIsValid = mongoose.Types.ObjectId.isValid(userId);
    if (!idIsValid) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    const findUser = await this.usersService.getUserById(userId);
    if (!findUser) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return findUser;
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateUser(@Body() updateUserDto: UpdateUserDto, @Param('id') userId: string) {
    const idIsValid = mongoose.Types.ObjectId.isValid(userId);
    if (!idIsValid) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    const updatedUser = await this.usersService.updateUser(userId, updateUserDto);
    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return updatedUser;
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: string) {
    const isValid = mongoose.Types.ObjectId.isValid(userId);
    if (!isValid) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    const deletedUser = await this.usersService.deleteUser(userId);
    if (!deletedUser) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return deletedUser;
  }
}