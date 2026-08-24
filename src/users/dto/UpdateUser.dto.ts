import { IsOptional, IsArray } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  username?: string;

  @IsOptional()
  email?: string;

  @IsOptional()
  @IsArray()
  posts?: string[];
}