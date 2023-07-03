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
  private _courseCount = 1;
  readonly city: string = "Mexico";

  constructor(
    public email: string,
    public name: string,
    private userId = "diego"
  ) {
    this.email = email;
    this.name = name;
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  private deleteToken() {
    console.log("Toke deleted");
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }

    this._courseCount = courseNum;
  }
}

const diego = new User("d@email.com", "diego");
// diego.city;

console.log(diego);

export {};
