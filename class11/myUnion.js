var score = 33;
score = 400;
score = "55";
var diego = {
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
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
getDbId(3);
getDbId("3");
//Array
var data = [1, 23, 4, 8, 5];
var newData = ["1", "23", "4", "8", "5"];
//const newData2: string[] | number[] = ["1", "2", 3]; //!Wrong
var newData2 = ["1", "2", 3, true, false, "5"];
var seatAllotment;
//seatAllotment = "crew"; //!Crew was not declared 
seatAllotment = "aisle";
