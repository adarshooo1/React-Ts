// Recap
interface Person1 {
  fname: string;
  age?: Number;
  education: string;
  games: (string | object)[];
  gender: string;
  isMarried: boolean;
}

let man = (P1: Person1) => {
  P1.fname = "Adarsh";
  P1.age = 21;
  P1.education = "BBA";
  P1.games = [{ game1: "Cricket" }, { game2: "Volleyball" }];
  P1.gender = "Male";
  P1.isMarried = false;
};

let man2: Person1 = {
  fname: "Adarsh",
  age: 21,
  education: "BBA",
  games: [{ game1: "Cricket" }, { game2: "Volleyball" }],
  gender: "Male",
  isMarried: false,
};
console.log(man2.games);

// Aliases
type language = string;

type region = {
  place: "String";
  lang: language; //We can use other type as well. Cannot applicable with interface
};

//Literals Types
let myName: "Dave";
myName: "maiden"; //Not re-assignable.

let userName: "Dave" | "John" | "Amy";
userName: "Amy";

// Functions
const add = (a: number, b: number) => {
  return a + b;
};
let ans = add(12, 12);
console.log(ans);

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello");
logMsg(add(2, 2));

let sum = function (a: number, b: number): number {
  return a + b;
};
logMsg(sum(2, 2));

// Type Alias
type mathNumb = (a: number, b: number) => number;

// Function way
let divide: mathNumb = function (a, b) {
  return a / b;
};
logMsg(divide(12, 2));

//Callback way
let multiply: mathNumb = (c, d) => {
  return c * d;
};
logMsg(multiply(12, 12));

//Interface
interface mathCalc {
  (a: number, b: number): number;
}
//Function way
let multiply2: mathCalc = function (a, b) {
  return a * b;
};
//Interface way
let subtract: mathCalc = (a, b) => {
  return a - b;
};

//Optional Parameters
const threeSum = (a: number, b: number, c?: number): number => {
  //Type guard
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

logMsg(threeSum(69, 69, 69));

//Default Value
//Function Way
const defaultSum = function (a: number, b: number, c: number = 12): number {
  return a + b + c;
};

logMsg(defaultSum(2, 2, 2));
logMsg(defaultSum(1, 1));

//Callback Way
const defaultSum2 = (a: number, b: number, c: number = 5): number => {
  return a + b + c;
};

logMsg(defaultSum2(10, 10, 10));
logMsg(defaultSum2(5, 5));

const defaultSum3 = (a: number = 1, b: number, c: number = 5): number => {
  return a + b + c;
};
// logMsg(defaultSum3(2)); //Will through error because at the first argument we given a default value, So thats why we have to provide something that kind of value which do not effect the result, So, By passing we are telling we are not in the mood of defining.
logMsg(defaultSum3(undefined, 2));
logMsg(defaultSum3(undefined, 2, 12));

//Rest Parameter

const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const total2 = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

//Custom type Guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

//Use of never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen");
};
logMsg(numberOrString(12));
logMsg(numberOrString("val"));
// logMsg(numberOrString(true)); // Error boolean is not assignable
