const user = {
  name: "Diego",
  email: "diego@hotmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}
let newUser = { name: "Diego", isPaid: true, email: "diego@hotmail.com" };
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "Diego", price: 500 };
}
export {};
