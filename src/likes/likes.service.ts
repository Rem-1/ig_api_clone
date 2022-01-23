import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HandleLikeDTO } from './dto/create-likes-dto';
import { Likes } from './likes.model';

@Injectable()
export class LikesService {

    constructor(
        @InjectModel(Likes) private likesRepository: typeof Likes
    ) {}

    async getAllPhotoLikes(photo_id: number) {
        const photoLikes = await this.likesRepository.findAndCountAll({where: {photo_id}})

        return photoLikes
    }

    async handleLike(dto: HandleLikeDTO){
        const { user_id, photo_id } = dto
        
        const findLike = await this.likesRepository.findOne({where:{
            user_id,
            photo_id
        }})

        if(!findLike) {
            const addedlike = await this.likesRepository.create(dto)

            return addedlike
        } else {
            const deletedLike = await this.likesRepository.destroy({where:{
                user_id,
                photo_id
            }})

            return deletedLike
        }
    }

}
