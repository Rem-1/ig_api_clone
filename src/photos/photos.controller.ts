import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreatePhotoDTO } from './dto/create-photo-dto';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {

    constructor(private PhotosService: PhotosService ) {}

    @Get()
    getAll(){
        return this.PhotosService.getAllPhotos()
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number){
        return this.PhotosService.getPhoto(id)
    }

    @Post()
    create(@Body() dto:CreatePhotoDTO){
        return this.PhotosService.addPhoto(dto)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.PhotosService.deletePhoto(id)
    }
}
