import { UsersService } from './users.service';
import { Controller, 
         Get, 
         Put, 
         Post, 
         Delete, 
         ParseIntPipe,
         HttpException,
         HttpStatus,
         Param,
         Body,
         Inject,
         Scope,
         } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user-dto';
//import { Connection } from 'src/common/constants/connection';

@Controller({
  path: 'users',
  scope: Scope.REQUEST
})
export class UsersController {
    constructor(
      private usersService: UsersService,
    //@Inject('CONNECTION'), 
    //private connection: Connection,
    
    ) {
      //console.log(this.connection);
    }
    @Post()
    create(@Body() createUserDTO: CreateUserDTO) {
      return this.usersService.create(createUserDTO);

    }
    @Get()
    findAll() {
      try{
        return this.usersService.findAll();
      } catch (e) {
        throw new HttpException ( 'Server Error', HttpStatus.INTERNAL_SERVER_ERROR, {
            cause :e,
        }, 
    );
      }
    }
    @Get(':id')
    findOne(
        @Param(
            'id',
            new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
        )
        id: number,
    ) {
        return 'find user by id, ${typeof id}';
    }

    @Put(':id')
    update() {
        return 'update user by id';
    }
}
