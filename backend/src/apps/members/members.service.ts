import { Inject, Injectable } from '@nestjs/common';
import { CreateMemberInput } from './dto/create-member.input';
import { UpdateMemberInput } from './dto/update-member.input';
import { MEMBERS_REPOSITORY } from '../../resources/constant';
import { Repository } from 'typeorm';
import { Member } from './entities/member.entity';

@Injectable()
export class MembersService {
  constructor(
    @Inject(MEMBERS_REPOSITORY)
    private readonly membersRepository: Repository<Member>,
  ) {}

  create(createMemberInput: CreateMemberInput): Promise<CreateMemberInput> {
    const newItem = this.membersRepository.create(createMemberInput);
    return this.membersRepository.save(newItem);
  }

  findAll(): Promise<Member[]> {
    return this.membersRepository.find();
  }

  findOne(id: string): Promise<Member> {
    return this.membersRepository.findOne(id);
  }

  update(id: string, updateMemberInput: UpdateMemberInput): Promise<Member> {
    return this.membersRepository.save({ ...updateMemberInput, id });
  }

  async remove(id: string): Promise<Member> {
    const removeItem = await this.membersRepository.findOne(id);
    return this.membersRepository.remove(removeItem);
  }
}
