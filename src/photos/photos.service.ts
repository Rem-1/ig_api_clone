import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePhotoDTO } from './dto/create-photo-dto';
import { Photos } from './photos.model';

@Injectable()
export class PhotosService {
    
    constructor(
        @InjectModel(Photos) private photoRepository: typeof Photos
    ) {}

    async getAllPhotos() {
        const allPhotos = await this.photoRepository.findAll()

        return allPhotos;
    }

    async getPhoto(id: number) {
        const photo = await this.photoRepository.findOne({where:{id}})

        return photo;
    }

    async addPhoto(dto: CreatePhotoDTO) {
        const addedPhoto = await this.photoRepository.create(dto)

        return addedPhoto;
    }

    async deletePhoto(id: number) {
        const deletedPhoto = await this.photoRepository.destroy({where:{id}})
    }
}
