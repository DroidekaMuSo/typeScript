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

identityFour<Bottle>({ brand: "coke", type: 5 });
