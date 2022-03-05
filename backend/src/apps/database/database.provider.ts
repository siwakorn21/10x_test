import { DATABASE_CONNECTION } from '../../resources/constant';
import { createConnection } from 'typeorm';

export const DatabaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'db',
        port: 3306,
        username: 'root',
        password: '10x-password',
        database: '10x_test',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        migrations: ['dist/src/db/migrations/*.js'],
        cli: {
          migrationsDir: 'src/db/migrations',
        },
      }),
  },
];
