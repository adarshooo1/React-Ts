"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let man = (P1) => {
  P1.fname = "Adarsh";
  P1.age = 21;
  P1.education = "BBA";
  P1.games = [{ game1: "Cricket" }, { game2: "Volleyball" }];
  P1.gender = "Male";
  P1.isMarried = false;
};
let man2 = {
  fname: "Adarsh",
  age: 21,
  education: "BBA",
  games: [{ game1: "Cricket" }, { game2: "Volleyball" }],
  gender: "Male",
  isMarried: false,
};
console.log(man2.games);
//Literals Types
let myName;
myName: "maiden"; //Not re-assignable.
let userName;
userName: "Amy";
// Functions
const add = (a, b) => {
  return a + b;
};
let ans = add(12, 12);
console.log(ans);
const logMsg = (message) => {
  console.log(message);
};
logMsg("Hello");
logMsg(add(2, 2));
let sum = function (a, b) {
  return a + b;
};
logMsg(sum(2, 2));
// Function way
let divide = function (a, b) {
  return a / b;
};
logMsg(divide(12, 2));
//Callback way
let multiply = (c, d) => {
  return c * d;
};
logMsg(multiply(12, 12));
//Function way
let multiply2 = function (a, b) {
  return a * b;
};
//Interface way
let subtract = (a, b) => {
  return a - b;
};
//Optional Parameters
const threeSum = (a, b, c) => {
  //Type guard
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
logMsg(threeSum(69, 69, 69));
//Default Value
//Function Way
const defaultSum = function (a, b, c = 12) {
  return a + b + c;
};
logMsg(defaultSum(2, 2, 2));
logMsg(defaultSum(1, 1));
//Callback Way
const defaultSum2 = (a, b, c = 5) => {
  return a + b + c;
};
logMsg(defaultSum2(10, 10, 10));
logMsg(defaultSum2(5, 5));
const defaultSum3 = (a = 1, b, c = 5) => {
  return a + b + c;
};
// logMsg(defaultSum3(2)); //Will through error because at the first argument we given a default value, So thats why we have to provide something that kind of value which do not effect the result, So, By passing we are telling we are not in the mood of defining.
logMsg(defaultSum3(undefined, 2));
logMsg(defaultSum3(undefined, 2, 12));
//Rest Parameter
const total = (...nums) => {
  return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
const total2 = (a, ...nums) => {
  return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
const createError = (errMsg) => {
  throw new Error(errMsg);
};
const infinite = () => {
  let i = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};
//Customer type Guard
const isNumber = (value) => {
  return typeof value === "number" ? true : false;
};
//Use of never type
const numberOrString = (value) => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen");
};
logMsg(numberOrString(12));
logMsg(numberOrString("val"));
// logMsg(numberOrString(true)); // Error boolean is not assignable
