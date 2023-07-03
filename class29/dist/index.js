"use strict";
// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "Mexico";
Object.defineProperty(exports, "__esModule", { value: true });
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name, userId = "diego") {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Mexico";
        this.email = email;
        this.name = name;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    deleteToken() {
        console.log("Toke deleted");
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const diego = new User("d@email.com", "diego");
// diego.city;
console.log(diego);
