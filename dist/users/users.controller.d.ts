import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): {
        id: number;
        firstName: string;
        lastName: string;
    }[];
    findOne(id: string): {
        id: number;
        firstName: string;
        lastName: string;
    };
    create(firstName: string, lastName: string): {
        id: number;
        firstName: string;
        lastName: string;
    };
    delete(id: number): {
        id: number;
        firstName: string;
        lastName: string;
    };
}
