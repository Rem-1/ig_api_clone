import { IsDefined, IsNumber, IsString } from "class-validator";

export class CommentsDTO{

    @IsDefined()
    @IsString()
    comment_text: string;
    
    @IsDefined()
    @IsNumber()
    user_id: number;

    @IsDefined()
    @IsNumber()
    photo_id: number;

}