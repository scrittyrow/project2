import { IsArray, 
         IsDateString, 
         IsNotEmpty, 
         IsString } from 'class-validator';

export class CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    readonly firstName: string;
    @IsString()
    @IsNotEmpty()
    readonly lastName: string;
    @IsNotEmpty()
    @IsDateString()
    readonly dateJoined: Date;


}