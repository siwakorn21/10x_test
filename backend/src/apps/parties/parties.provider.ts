import {
  DATABASE_CONNECTION,
  PARTIES_REPOSITORY,
} from '../../resources/constant';
import { Connection } from 'typeorm';
import { Party } from './entities/party.entity';

export const PartiesProvider = [
  {
    provide: PARTIES_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Party),
    inject: [DATABASE_CONNECTION],
  },
];
