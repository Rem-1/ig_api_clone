import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FollowDTO } from './dto/create-follows-dto';
import { Follows } from './follows.model';

@Injectable()
export class FollowsService {

    constructor(
        @InjectModel(Follows) private followsRepository: typeof Follows
    ) {}

    async getAllFollows(){
        const allFollows = await this.followsRepository.findAll()

        return allFollows;
    }

    async getfollowers(user_id: number){
        const followers = await this.followsRepository.findAll({where:{user_id}})

        return followers;
    }

    async getFollowee(user_id: number){
        const follower_id: number = user_id
        const followee = await this.followsRepository.findAll({where:{follower_id}}
        )

        return followee;
    }

    async addFollower(dto: FollowDTO){
        const { user_id, follower_id} = dto
        try {
            if(user_id != follower_id){ // User cannot follow himself
                const addedFollower = await this.followsRepository.create(dto)

                return addedFollower;
            } else {
                throw new BadRequestException()
            }
        } catch (error) {
            if(error.name === 'SequelizeUniqueConstraintError'){
                throw new ConflictException({
                  message: 'Unique constraint is violated in the database!'
                })
            } else if (error.name === 'BadRequestException'){
                throw new BadRequestException()
            } else {
                return error
            }
        
        }
    }

    async removeFollower(dto: FollowDTO){
        const { user_id, follower_id} = dto
        const removedFollower = await this.followsRepository.destroy({
            where: {
                user_id,
                follower_id
            }
        })

        return removedFollower;
    } 
}
