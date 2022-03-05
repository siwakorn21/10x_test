import { Connection } from 'typeorm';
import { Member } from './entities/member.entity';
export declare const MembersProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Member>;
    inject: string[];
}[];
