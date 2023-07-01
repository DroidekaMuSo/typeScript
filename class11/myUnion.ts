let score: number | string | boolean | Array<number> = 33;

score = 400;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let diego: User | Admin = {
  name: "Diego",
  id: 334,
};

diego = {
  userName: "da",
  id: 1245,
};

// function getDbId(id: number | string) {
//   //making some API calls
//   console.log(`DB is is ${id}`);
// }

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

getDbId(3);
getDbId("3");

//Array

const data: number[] = [1, 23, 4, 8, 5];
const newData: string[] = ["1", "23", "4", "8", "5"];
//const newData2: string[] | number[] = ["1", "2", 3]; //!Wrong
const newData2: (string | number | boolean)[] = ["1", "2", 3, true, false, "5"];



let seatAllotment: "aisle" | "middle" | "window";

//seatAllotment = "crew"; //!Crew was not declared 
seatAllotment = "aisle";
