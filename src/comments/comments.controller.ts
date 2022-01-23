import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsDTO } from './dto/create-comment-dto';

@Controller('comments')
export class CommentsController {

    constructor(private CommentsService: CommentsService) {}

    @Get()
    getAll(){
        return this.CommentsService.getAllComments()
    }

    @Get(':photo_id')
    getPhotoComments(@Param('photo_id', ParseIntPipe) photo_id: number){
        return this.CommentsService.getPhotoComments(photo_id)
    }

    @Post()
    create(@Body() dto: CommentsDTO){
        return this.CommentsService.addComments(dto)
    }

    @Delete(":id")
    delete(@Param("id", ParseIntPipe) id: number){
        return this.CommentsService.deleteComment(id)
    }

    @Patch(":id")
    update(@Param("id", ParseIntPipe) id: number, @Body() dto: CommentsDTO){
        return this.CommentsService.updateComment(id, dto)
    }
}
