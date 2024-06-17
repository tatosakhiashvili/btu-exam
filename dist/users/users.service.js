"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            { id: 1, firstName: 'John', lastName: 'Doe' },
            { id: 2, firstName: 'James', lastName: 'Smith' },
            { id: 3, firstName: 'John', lastName: 'Amber' },
            { id: 4, firstName: 'Kate', lastName: 'Smith' },
            { id: 5, firstName: 'David', lastName: 'Watson' },
            { id: 6, firstName: 'Will', lastName: 'Beeson' },
        ];
        this.idCounter = 7;
    }
    findAll() {
        return this.users;
    }
    findOne(id) {
        return this.users.find(user => user.id === id);
    }
    create(firstName, lastName) {
        const newUser = { id: this.idCounter++, firstName, lastName };
        this.users.push(newUser);
        return newUser;
    }
    delete(id) {
        const index = this.users.findIndex(user => user.id == id);
        if (index !== -1) {
            const deletedUser = this.users.splice(index, 1)[0];
            return deletedUser;
        }
        return null;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map