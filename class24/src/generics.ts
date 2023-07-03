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

const getMoreSearchProducts = <T,>(value: T[]): T => {
  //do some database operations
  const myIndex = 4;
  return value[myIndex];
};
