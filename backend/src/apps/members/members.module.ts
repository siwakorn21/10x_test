import { Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersResolver } from './members.resolver';
import { DatabaseModule } from '../database/database.module';
import { MembersProvider } from './members.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...MembersProvider, MembersResolver, MembersService],
  exports: [MembersService],
})
export class MembersModule {}
