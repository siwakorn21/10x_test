"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersProvider = void 0;
const constant_1 = require("../../resources/constant");
const user_entity_1 = require("./entities/user.entity");
exports.UsersProvider = [
    {
        provide: constant_1.USERS_REPOSITORY,
        useFactory: (connection) => connection.getRepository(user_entity_1.User),
        inject: [constant_1.DATABASE_CONNECTION],
    },
];
//# sourceMappingURL=users.provider.js.map