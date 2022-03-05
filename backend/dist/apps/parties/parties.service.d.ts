import { CreatePartyInput } from './dto/create-party.input';
import { UpdatePartyInput } from './dto/update-party.input';
import { Repository } from 'typeorm';
import { Party } from './entities/party.entity';
export declare class PartiesService {
    private readonly partiesRepository;
    constructor(partiesRepository: Repository<Party>);
    create(createPartyInput: CreatePartyInput): Promise<Party>;
    findAll(): Promise<Party[]>;
    findOne(id: string): Promise<Party>;
    update(id: string, updatePartyInput: UpdatePartyInput): Promise<Party>;
    remove(id: string): Promise<Party>;
}
