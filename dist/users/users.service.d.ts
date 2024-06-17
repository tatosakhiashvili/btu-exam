export declare class UsersService {
    private users;
    private idCounter;
    findAll(): {
        id: number;
        firstName: string;
        lastName: string;
    }[];
    findOne(id: number): {
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
