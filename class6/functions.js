"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //return "Hello";
}
var value = addTwo(5);
// function getValue(value: number): boolean {
//   if (value > 5) {
//     return true;
//   }
//   return "200 OK";
// }
var getHello = function (s) {
    return "";
};
//const heroes = ["thor", "spidermna", "ironman"];
var heroes = [1, 2, 3];
heroes.map(function (hero) {
    return "Hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
