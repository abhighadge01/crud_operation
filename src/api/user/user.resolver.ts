import { Args, Mutation, Resolver,Query } from '@nestjs/graphql';
import { UserIdDto, UserInput } from './dto/user.dto';
import { UserService } from './user.service';
import { CommonResponse, UsersList, UsersSpecificList } from './model/user.model';

@Resolver()
export class UserResolver {
constructor(private readonly userService:UserService ){}
@Mutation(()=> CommonResponse)
async usersInsertData(@Args(){age,userName,hobbies}:UserInput)
{
     return await this.userService.userInsertData(age,userName?.trim(),hobbies)
}
@Query(()=> UsersList)
async getAllUsers()
{
     return await this.userService.getAllUsers()
}
@Query(()=> UsersSpecificList)
async getSpecificUsers(@Args() {userId}:UserIdDto)
{
     return await this.userService.getSpecificUsers(userId)
}
@Mutation(()=> CommonResponse)
async updateUserData(@Args() {userId, age, hobbies,userName}:UserInput)
{
     return await this.userService.updateUserData(userId,age,userName,hobbies)
}
@Mutation(()=> CommonResponse)
async deleteUserData(@Args() {userId}:UserIdDto)
{
     return await this.userService.deleteUserData(userId)
}

}