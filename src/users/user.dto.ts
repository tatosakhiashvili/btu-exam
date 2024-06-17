import { IsString, Length } from 'class-validator';

export class UpdateUserDto {
    @IsString()
    @Length(1)
    firstName: string;

    @IsString()
    @Length(1)
    lastName: string;
}
 
export class CreateUserDto {
    @IsString()
    @Length(1)
    firstName: string;

    @IsString()
    @Length(1)
    lastName: string;
}