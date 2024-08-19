import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { connection } from 'src/common/constants/connection';
 
@Module({
  providers: [
    UsersService, 
   // {
  //  provide: UsersService,
  //  useClass: UsersService,
 // },
 { provide: 'CONNECTION',
  useValue: connection,
 },
],
  controllers: [UsersController],
})
export class UsersModule {}
