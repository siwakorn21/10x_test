"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersProvider = void 0;
const constant_1 = require("../../resources/constant");
const member_entity_1 = require("./entities/member.entity");
exports.MembersProvider = [
    {
        provide: constant_1.MEMBERS_REPOSITORY,
        useFactory: (connection) => connection.getRepository(member_entity_1.Member),
        inject: [constant_1.DATABASE_CONNECTION],
    },
];
//# sourceMappingURL=members.provider.js.map