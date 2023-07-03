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

function getFood(pet: Fish | Bird){
  if(isFish(pet)){
    pet

    return "fish food"
  } else {
    pet 
    
    return "bird food"
  }
}

export {};
