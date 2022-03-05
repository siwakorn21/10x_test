"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartiesProvider = void 0;
const constant_1 = require("../../resources/constant");
const party_entity_1 = require("./entities/party.entity");
exports.PartiesProvider = [
    {
        provide: constant_1.PARTIES_REPOSITORY,
        useFactory: (connection) => connection.getRepository(party_entity_1.Party),
        inject: [constant_1.DATABASE_CONNECTION],
    },
];
//# sourceMappingURL=parties.provider.js.map