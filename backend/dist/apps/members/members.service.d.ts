import { CreateMemberInput } from './dto/create-member.input';
import { UpdateMemberInput } from './dto/update-member.input';
import { Repository } from 'typeorm';
import { Member } from './entities/member.entity';
export declare class MembersService {
    private readonly membersRepository;
    constructor(membersRepository: Repository<Member>);
    create(createMemberInput: CreateMemberInput): Promise<CreateMemberInput>;
    findAll(): Promise<Member[]>;
    findOne(id: string): Promise<Member>;
    update(id: string, updateMemberInput: UpdateMemberInput): Promise<Member>;
    remove(id: string): Promise<Member>;
}
