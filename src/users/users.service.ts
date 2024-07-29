import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
//local db
//local array
private readonly users = [];
create(user){
    this.users.push(user);
    return this.users;
}

findAll(){
    return this.users;
}


}
