import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { FollowDTO } from './dto/create-follows-dto';
import { FollowsService } from './follows.service';

@Controller('follows')
export class FollowsController {

    constructor(private FollowsService: FollowsService) {}

    @Get()
    getAll(){
        return this.FollowsService.getAllFollows()
    }

    @Get("/followers/:id")
    getFollowers(@Param('id', ParseIntPipe) id: number){
        return this.FollowsService.getfollowers(id)
    }

    @Get("/followee/:id")
    getFollowee(@Param('id', ParseIntPipe) id: number){
        return this.FollowsService.getFollowee(id)
    }

    @Post()
    create(@Body() dto: FollowDTO){
        return this.FollowsService.addFollower(dto)
    }

    @Delete()
    delete(@Body() dto: FollowDTO){
        return this.FollowsService.removeFollower(dto)
    }

}
