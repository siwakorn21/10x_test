"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseProviders = void 0;
const constant_1 = require("../../resources/constant");
const typeorm_1 = require("typeorm");
exports.DatabaseProviders = [
    {
        provide: constant_1.DATABASE_CONNECTION,
        useFactory: async () => await (0, typeorm_1.createConnection)({
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
//# sourceMappingURL=database.provider.js.map