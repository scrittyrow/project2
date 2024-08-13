import { IsArray, 
         IsDateString, 
         IsNotEmpty, 
         IsString } from 'class-validator';

export class CreateUserDTO {
    @IsString({ each: true})
    @IsNotEmpty()
    readonly firstName: string;
    @IsString({ each: true})
    @IsNotEmpty()
    readonly lastName: string;
    @IsNotEmpty()
    @IsDateString()
    readonly dateJoined: Date;


}