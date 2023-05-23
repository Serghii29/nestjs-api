import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  // eslint-disable-next-line indent
  email: string;

  @IsString()
  @IsNotEmpty()
  // eslint-disable-next-line indent
  password: string;
}
