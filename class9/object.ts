type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber & cardDate & { cvv: number };

const myUser: User = {
  _id: "12345",
  name: "Diego",
  email: "diego@email.com",
  isActive: true,
};

myUser.email = "d@email.com";
//myUser._id = "sdasdasd";

export {};
