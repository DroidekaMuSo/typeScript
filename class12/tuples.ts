const user: (string | number)[] = [1, "dm"];

let userT: [string, number, boolean];
userT = ["dm", 1, true];

let rgb: [number, number, number];
rgb = [255, 255, 255];

type User = [number, string];
const newUser: User = [12, "d@email.com"];

newUser[1] = "d@email.com";
// newUser.push(true);

export {};
