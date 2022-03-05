import { Connection } from 'typeorm';
import { User } from './entities/user.entity';
export declare const UsersProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<User>;
    inject: string[];
}[];
