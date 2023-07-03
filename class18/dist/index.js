"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, name) {
        this.city = "Mexico";
        this.email = email;
        this.name = name;
    }
}
const diego = new User("d@email.com", "diego");
//readonly diego.city = "Mexico";
console.log(diego);
