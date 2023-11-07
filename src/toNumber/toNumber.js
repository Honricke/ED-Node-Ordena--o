"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toNumber(array) {
    var newArray = [];
    for (var i of array) {
        //@ts-ignore
        newArray.push(Number(i));
    }
    return newArray;
}
exports.default = toNumber;
