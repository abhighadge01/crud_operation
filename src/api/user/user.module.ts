import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { PrismaService } from 'nestjs-prisma';


@Module({
  providers: [UserResolver, UserService,PrismaService]
})
export class UserModule {}
