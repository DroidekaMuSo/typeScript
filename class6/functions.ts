function addTwo(num: number): number {
  return num + 2;
  //return "Hello";
}

let value = addTwo(5);

// function getValue(value: number): boolean {
//   if (value > 5) {
//     return true;
//   }

//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

//const heroes = ["thor", "spidermna", "ironman"];
const heroes = [1, 2, 3];

heroes.map((hero) => {
  return `Hero is ${hero}`;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

export {};
