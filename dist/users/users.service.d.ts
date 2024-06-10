export declare class UsersService {
    private users;
    private idCounter;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
    };
    create(name: string): {
        id: number;
        name: string;
    };
}
