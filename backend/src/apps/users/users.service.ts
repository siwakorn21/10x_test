import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { USERS_REPOSITORY } from '../../resources/constant';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: Repository<User>,
  ) {}

  create(createUserInput: CreateUserInput): Promise<User> {
    const newItem = this.usersRepository.create(createUserInput);
    return this.usersRepository.save(newItem);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    return this.usersRepository.save({ ...updateUserInput, id });
  }

  async remove(id: string): Promise<User> {
    const removeItem = await this.usersRepository.findOne(id);
    return this.usersRepository.remove(removeItem);
  }
}
