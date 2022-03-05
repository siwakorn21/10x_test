import {
  DATABASE_CONNECTION,
  MEMBERS_REPOSITORY,
} from '../../resources/constant';
import { Connection } from 'typeorm';
import { Member } from './entities/member.entity';

export const MembersProvider = [
  {
    provide: MEMBERS_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Member),
    inject: [DATABASE_CONNECTION],
  },
];
