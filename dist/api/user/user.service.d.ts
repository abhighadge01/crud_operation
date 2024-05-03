import { HttpStatus } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    userInsertData(age: number, userName: string, hobbies: string[]): Promise<{
        message: string;
        status: HttpStatus;
        error?: undefined;
    } | {
        error: any;
        message: any;
        status: HttpStatus;
    }>;
    getAllUsers(): Promise<{
        data: import(".prisma/client").users[];
        message: string;
        status: HttpStatus;
        error?: undefined;
    } | {
        error: any;
        message: any;
        status: HttpStatus;
        data?: undefined;
    }>;
    getSpecificUsers(userId: number): Promise<{
        message: string;
        status: HttpStatus;
        data?: undefined;
        error?: undefined;
    } | {
        data: import(".prisma/client").users;
        message: string;
        status: HttpStatus;
        error?: undefined;
    } | {
        data: any[];
        message: string;
        status: HttpStatus;
        error?: undefined;
    } | {
        error: any;
        message: any;
        status: HttpStatus;
        data?: undefined;
    }>;
    updateUserData(userId: number, age: number, userName: string, hobbies: string[]): Promise<{
        message: string;
        status: HttpStatus;
        error?: undefined;
    } | {
        error: any;
        message: any;
        status: HttpStatus;
    }>;
    deleteUserData(userId: number): Promise<{
        message: string;
        status: HttpStatus;
        error?: undefined;
    } | {
        error: any;
        message: any;
        status: HttpStatus;
    }>;
}
