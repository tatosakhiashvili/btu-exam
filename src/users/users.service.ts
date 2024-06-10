import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'James Smith' },
        { id: 3, name: 'John Amber' },
        { id: 4, name: 'Kate Smith' },
        { id: 5, name: 'David Watson' },
        { id: 6, name: 'Will Beeson' },
    ];
    private idCounter = 7; // Counter for generating unique IDs

    findAll() {
        return this.users;
    }

    findOne(id: number) {
        return this.users.find(user => user.id === id);
    }

    create(name: string) {
        const newUser = { id: this.idCounter++, name };
        this.users.push(newUser);
        return newUser;
    }
}
