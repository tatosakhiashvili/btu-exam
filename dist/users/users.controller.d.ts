import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: string): {
        id: number;
        name: string;
    };
    create(name: string): {
        id: number;
        name: string;
    };
}
