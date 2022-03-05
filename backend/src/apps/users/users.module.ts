import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { DatabaseModule } from '../database/database.module';
import { UsersProvider } from './users.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...UsersProvider, UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
