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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async userInsertData(age, userName, hobbies) {
        try {
            if (!age || !userName || hobbies.length === 0) {
                return {
                    message: 'invalid parameters',
                    status: common_1.HttpStatus.BAD_REQUEST
                };
            }
            const usersData = await this.prisma.users.create({
                data: {
                    userName: userName,
                    hobbies: hobbies,
                    age: age
                }
            });
            if (usersData) {
                return {
                    message: 'success',
                    status: common_1.HttpStatus.OK
                };
            }
            return {
                message: 'bad request',
                status: common_1.HttpStatus.BAD_REQUEST
            };
        }
        catch (error) {
            return {
                error: error,
                message: error.message,
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
            };
        }
    }
    async getAllUsers() {
        try {
            const usersList = await this.prisma.users.findMany({});
            if (usersList.length > 0) {
                return {
                    data: usersList,
                    message: 'success',
                    status: common_1.HttpStatus.OK
                };
            }
            return {
                data: [],
                message: 'not found',
                status: common_1.HttpStatus.NOT_FOUND
            };
        }
        catch (error) {
            return {
                error: error,
                message: error.message,
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
            };
        }
    }
    async getSpecificUsers(userId) {
        try {
            if (!userId) {
                return {
                    message: 'invalid parameters',
                    status: common_1.HttpStatus.BAD_REQUEST
                };
            }
            const userData = await this.prisma.users.findFirst({
                where: {
                    id: userId
                }
            });
            if (userData) {
                return {
                    data: userData,
                    message: 'success',
                    status: common_1.HttpStatus.OK
                };
            }
            return {
                data: [],
                message: 'not found',
                status: common_1.HttpStatus.NOT_FOUND
            };
        }
        catch (error) {
            return {
                error: error,
                message: error.message,
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
            };
        }
    }
    async updateUserData(userId, age, userName, hobbies) {
        try {
            if (!userId) {
                return {
                    message: 'invalid parameters',
                    status: common_1.HttpStatus.BAD_REQUEST
                };
            }
            const userData = await this.prisma.users.update({
                where: {
                    id: userId
                },
                data: {
                    userName: userName || undefined,
                    age: age || undefined,
                    hobbies: {
                        push: hobbies,
                    } || undefined
                }
            });
            if (userData) {
                return {
                    message: 'success',
                    status: common_1.HttpStatus.OK
                };
            }
            return {
                message: 'bad request',
                status: common_1.HttpStatus.BAD_REQUEST
            };
        }
        catch (error) {
            return {
                error: error,
                message: error.message,
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
            };
        }
    }
    async deleteUserData(userId) {
        try {
            if (!userId) {
                return {
                    message: 'invalid parameters',
                    status: common_1.HttpStatus.BAD_REQUEST
                };
            }
            const usersData = await this.prisma.users.delete({
                where: {
                    id: userId
                }
            });
            if (usersData) {
                return {
                    message: 'success',
                    status: common_1.HttpStatus.OK
                };
            }
            return {
                message: 'bad request',
                status: common_1.HttpStatus.BAD_REQUEST
            };
        }
        catch (error) {
            return {
                error: error,
                message: error.message,
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
            };
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map