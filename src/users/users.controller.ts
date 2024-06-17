import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';

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
    create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
        const { firstName, lastName } = createUserDto;
        return this.usersService.create(firstName, lastName);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.usersService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body(new ValidationPipe()) updateUserDto: UpdateUserDto) {
        const { firstName, lastName } = updateUserDto;
        return this.usersService.update(id, firstName, lastName);
    }
}
