import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';


@Injectable()
export class UserService {
constructor(private readonly prisma:PrismaService){}
async userInsertData(age:number,userName:string,hobbies:string[])
{
 try {
   if(!age|| !userName||hobbies.length===0 )
      {
         return{
            message:'invalid parameters',
            status:HttpStatus.BAD_REQUEST
         }
      }
    const usersData= await this.prisma.users.create({
      data:{
         userName:userName,
         hobbies:hobbies,
         age:age
      }
    })
    if(usersData)
      {
         return{
            message:'success',
            status:HttpStatus.OK
         
      }
   }
   return{
      message:'bad request',
      status:HttpStatus.BAD_REQUEST
   
}
 } catch (error) {
   return{
      error:error,
      message:error.message,
      status:HttpStatus.INTERNAL_SERVER_ERROR

   }
    
 }
}
async getAllUsers()
{
   try {
   const usersList=await this.prisma.users.findMany({})
    if(usersList.length > 0)
      {
         return{
            data:usersList,
            message:'success',
            status:HttpStatus.OK        
      }

      }
      return{
         data:[],
         message:'not found',
         status:HttpStatus.NOT_FOUND        
   }
      
   } catch (error) {
         return{
         error:error,
         message:error.message,
         status:HttpStatus.INTERNAL_SERVER_ERROR
   
      }
   }
   
}
async getSpecificUsers(userId:number)
{
   try {
      if(!userId)
      {
         return{
            message:'invalid parameters',
            status:HttpStatus.BAD_REQUEST
         }

      }
      const userData=await this.prisma.users.findFirst({
         where:{
            id:userId
         }
      })
      if(userData)
         {
            return{
               data:userData,
               message:'success',
               status:HttpStatus.OK        
         }
   
         }
         return{
            data:[],
            message:'not found',
            status:HttpStatus.NOT_FOUND        
      }
   } catch (error) {
      return{
         error:error,
         message:error.message,
         status:HttpStatus.INTERNAL_SERVER_ERROR
   
      }
      
   }
}
async updateUserData(userId:number, age:number,userName:string,hobbies:string[])
{
   try {
      if(!userId)
         {
            return{
               message:'invalid parameters',
               status:HttpStatus.BAD_REQUEST
            }   

         }
         const userData=await this.prisma.users.update({
            where:{
               id:userId
            },
            data:{
               userName:userName||undefined,
               age:age||undefined,
               hobbies:{
                  push:hobbies,
               }||undefined

            }
         })
         if(userData)
            {
               return{
                  message:'success',
                  status:HttpStatus.OK        
            }  
               
            }
            return{
               message:'bad request',
               status:HttpStatus.BAD_REQUEST     
         }     
   } catch (error) {
      return{
         error:error,
         message:error.message,
         status:HttpStatus.INTERNAL_SERVER_ERROR
   
      }
      
   }

}
async deleteUserData (userId:number)
{
   try {
      if(!userId)
         {
            return{
               message:'invalid parameters',
               status:HttpStatus.BAD_REQUEST
            } 

         }
         const usersData= await this.prisma.users.delete({
            where:{
               id:userId
            }
          })
          if(usersData)
            {
               return{
                  message:'success',
                  status:HttpStatus.OK        
            }  
               
            }
            return{
               message:'bad request',
               status:HttpStatus.BAD_REQUEST     
         }     

      
   } catch (error) {
      return{
         error:error,
         message:error.message,
         status:HttpStatus.INTERNAL_SERVER_ERROR
   
      }
      
   }
}
}
