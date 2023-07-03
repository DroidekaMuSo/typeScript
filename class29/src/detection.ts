function detectTypes(value: number | string) {
  if (typeof value === "string") {
    value.toLowerCase();
  } else {
    return value + 3;
  }
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please, provide Id");
    return;
  }

  id.toLowerCase();
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird) {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;

    return "fish food";
  } else {
    pet;

    return "bird food";
  }
}

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius;
  }

  // return shape.side * shape.side;
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius;

    case "square":
      return shape.side * shape.side;

    case "rectangle":
      return shape.length * shape.width;

    default:
      const _defaultForShape: never = shape;
      return _defaultForShape;
  }
}
export {};
