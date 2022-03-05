import { Connection } from 'typeorm';
import { Party } from './entities/party.entity';
export declare const PartiesProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Party>;
    inject: string[];
}[];
