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
exports.UserIdDto = exports.UserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let UserInput = class UserInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UserInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInput.prototype, "userName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UserInput.prototype, "age", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], UserInput.prototype, "hobbies", void 0);
UserInput = __decorate([
    (0, graphql_1.InputType)(),
    (0, graphql_1.ArgsType)()
], UserInput);
exports.UserInput = UserInput;
let UserIdDto = class UserIdDto {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], UserIdDto.prototype, "userId", void 0);
UserIdDto = __decorate([
    (0, graphql_1.InputType)(),
    (0, graphql_1.ArgsType)()
], UserIdDto);
exports.UserIdDto = UserIdDto;
//# sourceMappingURL=user.dto.js.map