import { Module } from '@nestjs/common';
import { PartiesService } from './parties.service';
import { PartiesResolver } from './parties.resolver';
import { PartiesProvider } from './parties.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...PartiesProvider, PartiesResolver, PartiesService],
  exports: [PartiesService],
})
export class PartiesModule {}
