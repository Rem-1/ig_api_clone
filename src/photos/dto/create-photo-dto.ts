import { IsDefined, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePhotoDTO{

    @IsDefined()
    @IsString()
    image_url: string

    @IsDefined()
    @IsNumber()
    user_id: number

    @IsOptional()
    @IsString()
    title: string

}