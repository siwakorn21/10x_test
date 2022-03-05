"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartiesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const parties_service_1 = require("./parties.service");
const party_entity_1 = require("./entities/party.entity");
const create_party_input_1 = require("./dto/create-party.input");
const update_party_input_1 = require("./dto/update-party.input");
let PartiesResolver = class PartiesResolver {
    constructor(partiesService) {
        this.partiesService = partiesService;
    }
    createParty(createPartyInput) {
        return this.partiesService.create(createPartyInput);
    }
    findAll() {
        return this.partiesService.findAll();
    }
    findOne(id) {
        return this.partiesService.findOne(id);
    }
    updateParty(updatePartyInput) {
        return this.partiesService.update(updatePartyInput.id, updatePartyInput);
    }
    removeParty(id) {
        return this.partiesService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => party_entity_1.Party),
    __param(0, (0, graphql_1.Args)('createPartyInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_party_input_1.CreatePartyInput]),
    __metadata("design:returntype", void 0)
], PartiesResolver.prototype, "createParty", null);
__decorate([
    (0, graphql_1.Query)(() => [party_entity_1.Party], { name: 'parties' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PartiesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => party_entity_1.Party, { name: 'party' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PartiesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => party_entity_1.Party),
    __param(0, (0, graphql_1.Args)('updatePartyInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_party_input_1.UpdatePartyInput]),
    __metadata("design:returntype", void 0)
], PartiesResolver.prototype, "updateParty", null);
__decorate([
    (0, graphql_1.Mutation)(() => party_entity_1.Party),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PartiesResolver.prototype, "removeParty", null);
PartiesResolver = __decorate([
    (0, graphql_1.Resolver)(() => party_entity_1.Party),
    __metadata("design:paramtypes", [parties_service_1.PartiesService])
], PartiesResolver);
exports.PartiesResolver = PartiesResolver;
//# sourceMappingURL=parties.resolver.js.map