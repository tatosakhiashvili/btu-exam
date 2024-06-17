import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(Number(id));
    }

    @Post()
    create(@Body('firstName') firstName: string, @Body('lastName') lastName: string,) {
        return this.usersService.create(firstName, lastName);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.usersService.delete(id);
    }
}
