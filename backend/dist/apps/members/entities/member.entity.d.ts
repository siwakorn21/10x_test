import { Party } from '../../parties/entities/party.entity';
import { User } from '../../users/entities/user.entity';
export declare class Member {
    id: string;
    partyId: string;
    party: Party;
    userId: string;
    user: User;
}
