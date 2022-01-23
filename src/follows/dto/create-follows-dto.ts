import { IsDefined, IsNumber } from "class-validator";

export class FollowDTO{

    @IsDefined()
    @IsNumber()
    user_id: number;

    @IsDefined()
    @IsNumber()
    follower_id: number;

}