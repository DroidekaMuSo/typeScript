"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function detectTypes(value) {
    if (typeof value === "string") {
        value.toLowerCase();
    }
    else {
        return value + 3;
    }
}
function provideId(id) {
    if (!id) {
        console.log("Please, provide Id");
        return;
    }
    id.toLowerCase();
}
