"use strict";
// Arrays
let strArray = ["one", "hey", "add"];
let guitars = ["make", "lake", "take", 2002];
let mixedData = ["make", 12, "12", true];
strArray[0] = "john";
// strArray[1] = 12 //Type 'number' is not assignable to type 'string'. Throw Error
guitars[3] = "2";
guitars.push(12); // Add from end;
guitars.unshift(12); // Add from start
guitars.pop(); // Remove from end.
guitars.shift(); // Remove from initial.
// guitars.push(true) // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
console.log(guitars);
// strArray = guitarsType //'(string | number)[]' is not assignable to type 'string[]'. Type 'string | number' is not assignable to type 'string'. Type 'number' is not assignable to type 'string'
guitars = strArray; // valid
// guitars = mixedData; // Invalid
mixedData = guitars; // valid
// Valid Array Declaration
let test = [];
let test2 = [];
let test3 = [];
// Tuple
let aTuple = ["dave", 12, true];
let mixed = [12, "2", true];
mixed = aTuple; // valid
// aTuple = mixed; // unvalid
// Objects
let myObj;
myObj = []; // valid
myObj = mixed;
myObj = {};
const Human = {
    personProp: "Adarsh",
    marriedProp: false,
};
// Human.marriedProp = 12; // Error type integer not assignable to boolean datatype.
Human.marriedProp = true;
// We have already defined the type before creating a person and a reference we are able to create that.
let somePerson = {
    name: "adarsh",
    alive: true,
    age: 21,
    married: false,
    hasChild: [false, 0], // Can give more in the array.
    // But unable to create more instances ex: divorced. Error => Object literal may only specify known properties, and 'divorced' does not exist in type 'person'
};
//
const player = (cricket) => {
    return `Hello ${cricket.name}`;
};
console.log(player(somePerson));
// Destructured way --mostly used.
const player2 = ({ name }) => {
    return `Hello ${name}`;
};
console.log(player(somePerson));
let vivo = {
    model: "V50",
    RAM: 6,
    ROM: 128,
    waterProof: true,
    price: 30000,
};
const info = (vivoMobiles) => {
    // return `this is vivo ${vivoMobiles.model.toUpperCase()} model`; // Return undefined
    // return `this is vivo ${vivoMobiles.model?.toUpperCase()} model`;
    // or
    // Narrowing
    if (vivoMobiles.model) {
        return `this is vivo ${vivoMobiles.model.toUpperCase()} model`;
    }
};
console.log(info(vivo));
// Enum: unlike most typescript features, Enums are not a type-level addition to javascript but something added to the language and runtime.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 30] = "U";
    Grade[Grade["D"] = 50] = "D";
    Grade[Grade["C"] = 60] = "C";
    Grade[Grade["B"] = 80] = "B";
    Grade[Grade["A"] = 95] = "A";
})(Grade || (Grade = {}));
console.log();
