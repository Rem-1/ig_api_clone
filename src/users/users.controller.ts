import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private UsersService: UsersService) {}

    @Get()
    getAll(){
        return this.UsersService.getAllUsers()
    }

    @Get(':nickname')
    findOne(@Param('nickname') nickname: string){
        return this.UsersService.getUserByNickname(nickname)
    }

    @Post()
    create(@Body() dto: CreateUserDTO){
        return this.UsersService.createUser(dto)
    }

    @Delete(':nickname')
    delete(@Param('nickname') nickname: string) {
        return this.UsersService.deleteUser(nickname)
    }

}
