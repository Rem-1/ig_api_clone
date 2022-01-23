import { IsDefined, IsEmail, IsString } from "class-validator";

export class CreateUserDTO{

    @IsString()
    @IsDefined()
    nickname: string;

    @IsEmail()
    @IsDefined()
    email: string;

    @IsString()
    @IsDefined()
    password: string;
}