import { IsNotEmpty, IsOptional, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserSettingsDto {
  currency?: string;
  discountCode?: string | null;
  shippingPriority?: string;
}

export class CreateUserDto {
  @IsNotEmpty()
  username!: string;

  @IsNotEmpty()
  email!: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateUserSettingsDto)
  settings?: CreateUserSettingsDto;
}