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
exports.MembersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const members_service_1 = require("./members.service");
const member_entity_1 = require("./entities/member.entity");
const create_member_input_1 = require("./dto/create-member.input");
const update_member_input_1 = require("./dto/update-member.input");
let MembersResolver = class MembersResolver {
    constructor(membersService) {
        this.membersService = membersService;
    }
    createMember(createMemberInput) {
        return this.membersService.create(createMemberInput);
    }
    findAll() {
        return this.membersService.findAll();
    }
    findOne(id) {
        return this.membersService.findOne(id);
    }
    updateMember(updateMemberInput) {
        return this.membersService.update(updateMemberInput.id, updateMemberInput);
    }
    removeMember(id) {
        return this.membersService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => member_entity_1.Member),
    __param(0, (0, graphql_1.Args)('createMemberInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_member_input_1.CreateMemberInput]),
    __metadata("design:returntype", void 0)
], MembersResolver.prototype, "createMember", null);
__decorate([
    (0, graphql_1.Query)(() => [member_entity_1.Member], { name: 'members' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MembersResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => member_entity_1.Member, { name: 'member' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MembersResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => member_entity_1.Member),
    __param(0, (0, graphql_1.Args)('updateMemberInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_member_input_1.UpdateMemberInput]),
    __metadata("design:returntype", void 0)
], MembersResolver.prototype, "updateMember", null);
__decorate([
    (0, graphql_1.Mutation)(() => member_entity_1.Member),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MembersResolver.prototype, "removeMember", null);
MembersResolver = __decorate([
    (0, graphql_1.Resolver)(() => member_entity_1.Member),
    __metadata("design:paramtypes", [members_service_1.MembersService])
], MembersResolver);
exports.MembersResolver = MembersResolver;
//# sourceMappingURL=members.resolver.js.map