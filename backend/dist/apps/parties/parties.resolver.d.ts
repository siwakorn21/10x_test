import { PartiesService } from './parties.service';
import { Party } from './entities/party.entity';
import { CreatePartyInput } from './dto/create-party.input';
import { UpdatePartyInput } from './dto/update-party.input';
export declare class PartiesResolver {
    private readonly partiesService;
    constructor(partiesService: PartiesService);
    createParty(createPartyInput: CreatePartyInput): Promise<Party>;
    findAll(): Promise<Party[]>;
    findOne(id: string): Promise<Party>;
    updateParty(updatePartyInput: UpdatePartyInput): Promise<Party>;
    removeParty(id: string): Promise<Party>;
}
