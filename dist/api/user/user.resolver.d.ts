import { UserIdDto, UserInput } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    usersInsertData({ age, userName, hobbies }: UserInput): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        error?: undefined;
    } | {
        error: any;
        message: any;
        status: import("@nestjs/common").HttpStatus;
    }>;
    getAllUsers(): Promise<{
        data: import(".prisma/client").users[];
        message: string;
        status: import("@nestjs/common").HttpStatus;
        error?: undefined;
    } | {
        error: any;
        message: any;
        status: import("@nestjs/common").HttpStatus;
        data?: undefined;
    }>;
    getSpecificUsers({ userId }: UserIdDto): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        data?: undefined;
        error?: undefined;
    } | {
        data: import(".prisma/client").users;
        message: string;
        status: import("@nestjs/common").HttpStatus;
        error?: undefined;
    } | {
        data: any[];
        message: string;
        status: import("@nestjs/common").HttpStatus;
        error?: undefined;
    } | {
        error: any;
        message: any;
        status: import("@nestjs/common").HttpStatus;
        data?: undefined;
    }>;
    updateUserData({ userId, age, hobbies, userName }: UserInput): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        error?: undefined;
    } | {
        error: any;
        message: any;
        status: import("@nestjs/common").HttpStatus;
    }>;
    deleteUserData({ userId }: UserIdDto): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        error?: undefined;
    } | {
        error: any;
        message: any;
        status: import("@nestjs/common").HttpStatus;
    }>;
}
