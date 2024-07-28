import { UsersService } from './users.service';
import { Controller, Get, Put, Post } from '@nestjs/common';


@Controller('users')
export class UsersController {
    
    constructor(private usersService: UsersService) {}
    @Post()
    create() {
      return this.usersService.create('John Doe');

    }
    @Get()
    findAll() {
        return this.usersService.findAll()
        
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
