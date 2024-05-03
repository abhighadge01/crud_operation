import { ArgsType, Field, InputType } from "@nestjs/graphql";

@InputType()
@ArgsType()
export class UserInput {
@Field({nullable:true})
userId?:number;
@Field({nullable:true})
userName:string;
@Field({nullable:true})
age:number;
@Field(()=>[String],{nullable:true})
hobbies:string[];
}
@InputType()
@ArgsType()
export class UserIdDto {
    @Field()
    userId:number;
   }