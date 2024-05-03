import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './api/user/user.module';
import { UserResolver } from './api/user/user.resolver';
import { UserService } from './api/user/user.service';
import { PrismaService } from 'nestjs-prisma';



@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphqlschema.gql'),
      sortSchema: true,
    }),
    
  ],
  controllers: [],
  providers: [UserModule,UserResolver,UserService, PrismaService],
})
export class AppModule {}
