const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(value: boolean | number): boolean | number | string {
  return value;
}

function identityTwo(value: any): any {
  return value;
}

function identityThree<Type>(value: Type): Type {
  return value;
}

identityThree(true);

function identityFour<T>(value: T): T {
  return value;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: "coke", type: 55 });

function getSearchProducts<T>(value: T[]): T {
  //Do some data operations

  const myIndex = 3;
  return value[myIndex];
}

const getMoreSearchProducts = <T>(value: T[]): T => {
  //do some database operations
  const myIndex = 4;
  return value[myIndex];
};

interface Database {
  connection: string;
  userName: string;
  password: string;
}

function anotherFunction<T, U extends Database>(
  valueOne: T,
  valueTwo: U
): object {
  return {
    valueOne,
    valueTwo,
  };
}

anotherFunction(3, { connection: "", userName: "", password: "" });



//-
interface Quizz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(products: T) {
    this.cart.push(products);
  }
}
