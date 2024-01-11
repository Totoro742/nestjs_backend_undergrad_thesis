import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from '../users/dto/register-user.dto';
import { LoginUserDto } from '../users/dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  signUp(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.singUp(registerUserDto);
  }

  @HttpCode(200)
  @Post('login')
  signIn(@Body() loginDto: LoginUserDto) {
    return this.authService.singIn(loginDto.email, loginDto.password);
  }
}
