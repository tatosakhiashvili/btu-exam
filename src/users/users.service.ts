import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, firstName: 'John', lastName: 'Doe' },
        { id: 2, firstName: 'James', lastName: 'Smith' },
        { id: 3, firstName: 'John', lastName: 'Amber' },
        { id: 4, firstName: 'Kate', lastName: 'Smith' },
        { id: 5, firstName: 'David', lastName: 'Watson' },
        { id: 6, firstName: 'Will', lastName: 'Beeson' },
    ];
    private idCounter = 7; // Counter for generating unique IDs

    findAll() {
        return this.users;
    }

    findOne(id: number) {
        return this.users.find(user => user.id === id);
    }

    create(firstName: string, lastName: string) {
        const newUser = { id: this.idCounter++, firstName, lastName };
        this.users.push(newUser);
        return newUser;
    }

    delete(id: number) {
        const index = this.users.findIndex(user => user.id == id);
        if (index !== -1) {
            const deletedUser = this.users.splice(index, 1)[0];
            return deletedUser;
        }
        return null;
    }
}
