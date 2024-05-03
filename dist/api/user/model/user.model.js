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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSpecificList = exports.UsersList = exports.UsersDataList = exports.CommonResponse = void 0;
const graphql_1 = require("@nestjs/graphql");
let CommonResponse = class CommonResponse {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CommonResponse.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CommonResponse.prototype, "status", void 0);
CommonResponse = __decorate([
    (0, graphql_1.ObjectType)()
], CommonResponse);
exports.CommonResponse = CommonResponse;
let UsersDataList = class UsersDataList {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UsersDataList.prototype, "userName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UsersDataList.prototype, "age", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], UsersDataList.prototype, "hobbies", void 0);
UsersDataList = __decorate([
    (0, graphql_1.ObjectType)()
], UsersDataList);
exports.UsersDataList = UsersDataList;
let UsersList = class UsersList extends CommonResponse {
};
__decorate([
    (0, graphql_1.Field)(() => [UsersDataList]),
    __metadata("design:type", Array)
], UsersList.prototype, "data", void 0);
UsersList = __decorate([
    (0, graphql_1.ObjectType)()
], UsersList);
exports.UsersList = UsersList;
let UsersSpecificList = class UsersSpecificList extends CommonResponse {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", UsersDataList)
], UsersSpecificList.prototype, "data", void 0);
UsersSpecificList = __decorate([
    (0, graphql_1.ObjectType)()
], UsersSpecificList);
exports.UsersSpecificList = UsersSpecificList;
//# sourceMappingURL=user.model.js.map