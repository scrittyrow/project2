
import { Controller, Get, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll() {
        return 'find all users';
    }
    @Get(':id')
    findOne() {
        return 'find user by id';
    }
    @Put(':id')
    update() {
        return 'update user by id';
    }
}
