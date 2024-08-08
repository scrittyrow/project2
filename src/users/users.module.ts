import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [
    UsersService, 
    {
    provide: UsersService,
    useClass: UsersService,
  },
],
  controllers: [UsersController],
})
export class UsersModule {}
