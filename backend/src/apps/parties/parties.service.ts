import { Inject, Injectable } from '@nestjs/common';
import { CreatePartyInput } from './dto/create-party.input';
import { UpdatePartyInput } from './dto/update-party.input';
import { PARTIES_REPOSITORY } from '../../resources/constant';
import { Repository } from 'typeorm';
import { Party } from './entities/party.entity';

@Injectable()
export class PartiesService {
  constructor(
    @Inject(PARTIES_REPOSITORY)
    private readonly partiesRepository: Repository<Party>,
  ) {}

  create(createPartyInput: CreatePartyInput): Promise<Party> {
    const newItem = this.partiesRepository.create(createPartyInput);
    return this.partiesRepository.save(newItem);
  }

  findAll(): Promise<Party[]> {
    return this.partiesRepository.find();
  }

  findOne(id: string): Promise<Party> {
    return this.partiesRepository.findOne(id);
  }

  update(id: string, updatePartyInput: UpdatePartyInput): Promise<Party> {
    return this.partiesRepository.save({ ...updatePartyInput, id });
  }

  async remove(id: string): Promise<Party> {
    const removeItem = await this.partiesRepository.findOne(id);
    return this.partiesRepository.remove(removeItem);
  }
}
