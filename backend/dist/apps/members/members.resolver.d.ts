import { MembersService } from './members.service';
import { Member } from './entities/member.entity';
import { CreateMemberInput } from './dto/create-member.input';
import { UpdateMemberInput } from './dto/update-member.input';
export declare class MembersResolver {
    private readonly membersService;
    constructor(membersService: MembersService);
    createMember(createMemberInput: CreateMemberInput): Promise<CreateMemberInput>;
    findAll(): Promise<Member[]>;
    findOne(id: string): Promise<Member>;
    updateMember(updateMemberInput: UpdateMemberInput): Promise<Member>;
    removeMember(id: string): Promise<Member>;
}
