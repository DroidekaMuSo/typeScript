interface User {
  readonly dbId: number;
  email: string;
  usedId: number;
  googleId?: string;
  startTrial: () => string;
  startTrial2(): string;
  getCuppon(cupponName: string, value: number): number;
}

interface User {
  gitHubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

let diego: Admin = {
  dbId: 22,
  role: "learner",
  email: "d@email.com",
  usedId: 1,
  gitHubToken: "sadasdad",

  startTrial: () => {
    return "Trial started";
  },

  startTrial2: () => {
    return "Greetings";
  },

  getCuppon(cupponName, value) {
    return 5;
  },
};

diego.email = "d@gmail.com";
// diego.dbId = 4654;

export {};
