"use strict";
const score = [];
const names = [];
function identityOne(value) {
    return value;
}
function identityTwo(value) {
    return value;
}
function identityThree(value) {
    return value;
}
identityThree(true);
function identityFour(value) {
    return value;
}
identityFour({ brand: "coke", type: 55 });
function getSearchProducts(value) {
    //Do some data operations
    const myIndex = 3;
    return value[myIndex];
}
const getMoreSearchProducts = (value) => {
    //do some database operations
    const myIndex = 4;
    return value[myIndex];
};
