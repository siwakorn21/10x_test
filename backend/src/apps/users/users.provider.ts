import {
  DATABASE_CONNECTION,
  USERS_REPOSITORY,
} from '../../resources/constant';
import { Connection } from 'typeorm';
import { User } from './entities/user.entity';

export const UsersProvider = [
  {
    provide: USERS_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [DATABASE_CONNECTION],
  },
];
