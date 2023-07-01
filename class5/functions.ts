function addTwo(num: number) {
  return num + 2;
}

function getUpper(value: string) {
  return value.toUpperCase();
}

function signUp(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {}

let logInUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(5);
getUpper("Hellow world");
signUp("Diego", "diego@hotmail.com", "password", true);
logInUser("h", "h@h.com");

export {};
