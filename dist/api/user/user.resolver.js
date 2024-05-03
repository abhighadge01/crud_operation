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
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_dto_1 = require("./dto/user.dto");
const user_service_1 = require("./user.service");
const user_model_1 = require("./model/user.model");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async usersInsertData({ age, userName, hobbies }) {
        return await this.userService.userInsertData(age, userName === null || userName === void 0 ? void 0 : userName.trim(), hobbies);
    }
    async getAllUsers() {
        return await this.userService.getAllUsers();
    }
    async getSpecificUsers({ userId }) {
        return await this.userService.getSpecificUsers(userId);
    }
    async updateUserData({ userId, age, hobbies, userName }) {
        return await this.userService.updateUserData(userId, age, userName, hobbies);
    }
    async deleteUserData({ userId }) {
        return await this.userService.deleteUserData(userId);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => user_model_1.CommonResponse),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "usersInsertData", null);
__decorate([
    (0, graphql_1.Query)(() => user_model_1.UsersList),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getAllUsers", null);
__decorate([
    (0, graphql_1.Query)(() => user_model_1.UsersSpecificList),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserIdDto]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getSpecificUsers", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_model_1.CommonResponse),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUserData", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_model_1.CommonResponse),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserIdDto]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUserData", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map