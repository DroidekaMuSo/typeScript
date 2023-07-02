class User {
  email: string;
  name: string;
  readonly city: string = "Mexico";

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const diego = new User("d@email.com", "diego");
//readonly diego.city = "Mexico";

console.log(diego);


export {};
