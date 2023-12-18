"use strict";
// Type Casting or Type Assertion
// Convert to more or less specific
let a = "hello";
let b = a; //less specific
let c = a; //more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 12, "concat");
let myVal2 = addOrConcat(2, 12, "add");
// 10 as string; Error:- Because we cannot directly typecast that
10; // So, we have to first typecast this as unknown or any then we can typecast;
const img = document.getElementById("img");
img.src;
const img2 = document.querySelector("img");
img2.src;
const img3 = document.getElementById("#img");
img3.src;
