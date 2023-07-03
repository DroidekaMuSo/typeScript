// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "Mexico";

//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

class User {
  readonly city: string = "Mexico";

  constructor(public email: string, public name: string, private userId = "diego") {
    this.email = email;
    this.name = name;
    
  }
}

const diego = new User("d@email.com", "diego");
// diego.city;

console.log(diego);

export {};
