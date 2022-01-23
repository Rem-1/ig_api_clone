import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDTO } from './dto/create-user-dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User) private userRepository: typeof User
    ) {}

    async getAllUsers() {
        const users = await this.userRepository.findAll(
            {attributes: ['id', 'nickname', 'email'], include:{all: true}},
            // {include:{all: true}}
            )

        return users;
    }

    async getUserByNickname(nickname: string) {
        const user = await this.userRepository.findOne({where: {nickname}})

        return user;
    }

    async createUser(dto: CreateUserDTO) {
        try {
            const newUser = await this.userRepository.create(dto)

            return newUser;
        } catch (error) {
            if(error.name === 'SequelizeUniqueConstraintError'){
                throw new ConflictException({
                  message: 'This email address is already taken!'
                })
            }else{
                return error.name
            }
        }
    }

    async deleteUser(nickname: string) {
        const deletedUser = await this.userRepository.destroy({where:{nickname}})

        return deletedUser;
    }
}
