import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PhotosController } from './photos.controller';
import { Photos } from './photos.model';
import { PhotosService } from './photos.service';

@Module({
  controllers: [PhotosController],
  providers: [PhotosService],
  imports: [
    SequelizeModule.forFeature([Photos]),
  ]
})
export class PhotosModule {}
