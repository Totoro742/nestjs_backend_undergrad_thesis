import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { RegisterUserDto } from '../users/dto/register-user.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async singUp(registerUserDto: RegisterUserDto) {
    const user = await this.usersService.find(registerUserDto.email);
    console.log(user);
    if (!user === null) {
      throw new ConflictException('User already exists');
    }
    if (registerUserDto.confirmPassword != registerUserDto.password) {
      throw new ConflictException(`Passwords doesn't match`);
    }
    const hash = await bcrypt.hash(registerUserDto.password, 10);
    const createUserDto: CreateUserDto = {
      email: registerUserDto.email,
      password: hash,
    };

    return this.usersService.create(createUserDto);
  }

  async singIn(email: string, password: string) {
    const user = await this.usersService.find(email);
    console.log(user);
    if (user === null) {
      throw new BadRequestException('User not found');
    }
    const passMatch = await bcrypt.compare(password, user?.password);

    if (!passMatch) {
      throw new UnauthorizedException();
    }
    const payload = { id: user.id, email: user.email };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
