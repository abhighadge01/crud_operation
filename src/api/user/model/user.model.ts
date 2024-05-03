import { Field, ObjectType } from "@nestjs/graphql";
@ObjectType()
export class CommonResponse{
 @Field()
 message:string;
 @Field()
 status:number;
}
@ObjectType()
export class UsersDataList {
 @Field({nullable:true})
 userName:string;
 @Field({nullable:true})
 age:number;
 @Field(()=>[String])
 hobbies:string[]    
}

@ObjectType()
export class UsersList extends CommonResponse {
@Field(()=>[UsersDataList])
 data:UsersDataList[];
}
@ObjectType()
export class UsersSpecificList extends CommonResponse {
@Field({nullable:true})
 data:UsersDataList;
}