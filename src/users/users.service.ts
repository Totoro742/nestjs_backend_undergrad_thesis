import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  find(email: string) {
    return this.usersRepository.findOneBy({ email: email });
  }

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }
}
