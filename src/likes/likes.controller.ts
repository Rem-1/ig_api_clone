import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { HandleLikeDTO } from './dto/create-likes-dto';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {

    constructor(private LikesService: LikesService ) {}

    @Get(':photo_id')
    getAllPhotoLikes(@Param('photo_id', ParseIntPipe) photo_id: number){
        return this.LikesService.getAllPhotoLikes(photo_id)
    }

    @Post()
    create(@Body() dto: HandleLikeDTO) {
        // console.log(dto)
        return this.LikesService.handleLike(dto)
        // return dto
    }
}
