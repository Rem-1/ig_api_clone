import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comments } from './comments.model';
import { CommentsDTO  } from './dto/create-comment-dto';

@Injectable()
export class CommentsService {

    constructor(
        @InjectModel(Comments) private commentsRepository: typeof Comments
    ) {}

    async getAllComments(): Promise<Comments[]>{ // dev
        const allComments = await this.commentsRepository.findAll()

        return allComments;
    }

    async getPhotoComments(photo_id: number): Promise<Comments>{
        const photoComment = await this.commentsRepository.findOne({
            where:{
                photo_id
            }
        })

        return photoComment;
    }

    async addComments(dto: CommentsDTO): Promise<Comments> {
        const addedComment = await this.commentsRepository.create(dto)

        return addedComment;
    }

    async deleteComment(id: number): Promise<number> {
        const deletedComment = await this.commentsRepository.destroy({
            where:{
                id
            }
        })

        return deletedComment
    }

    async updateComment(id: number, dto: CommentsDTO): Promise<[number, Comments[]]> {
        const updatedComment = await this.commentsRepository.update(dto, {
            where:{
                id
            }
        })

        return updatedComment
    }
}
