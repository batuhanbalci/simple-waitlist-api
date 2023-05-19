import { IsEmail } from 'class-validator';

export class UserDto {
  @IsEmail()
  readonly email: string;
}
