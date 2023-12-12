// Arrays
let strArray = ["one", "hey", "add"];
let guitars = ["make", "lake", "take", 2002];
let mixedData: (string | number | boolean)[] = ["make", 12, "12", true];

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
let test2: string[] = [];
let test3: (string | number | boolean)[] = [];

// Tuple
let aTuple: [string, number, boolean] = ["dave", 12, true];
let mixed = [12, "2", true];

mixed = aTuple; // valid
// aTuple = mixed; // unvalid

// Objects
let myObj: Object;
myObj = []; // valid
myObj = mixed;
myObj = {};

const Human = {
  personProp: "Adarsh",
  marriedProp: false,
};

// Human.marriedProp = 12; // Error type integer not assignable to boolean datatype.
Human.marriedProp = true;

// DefiningProp
type person = {
  name: string;
  alive: boolean;
  age: number;
  married?: boolean; // By using ? mark we are saying that it is optional and if you want than use it otherwise leave.
  hasChild?: (boolean | number)[]; // Else it will throw error => Property 'married' is missing in type '{ name: string; age: number; alive: boolean; hasChild: (number | false)[]; }' but required in type 'person'.
};

// We have already defined the type before creating a person and a reference we are able to create that.
let somePerson: person = {
  name: "adarsh",
  alive: true,
  age: 21,
  married: false,
  hasChild: [false, 0], // Can give more in the array.
  // But unable to create more instances ex: divorced. Error => Object literal may only specify known properties, and 'divorced' does not exist in type 'person'
};

//
const player = (cricket: person) => {
  return `Hello ${cricket.name}`;
};
console.log(player(somePerson));

// Destructured way --mostly used.
const player2 = ({ name }: person) => {
  return `Hello ${name}`;
};
console.log(player(somePerson));

// Using interface
interface mobile {
  model?: string;
  RAM: number;
  ROM: number;
  waterProof: boolean;
  price?: number;
}

let vivo: mobile = {
  model: "V50",
  RAM: 6,
  ROM: 128,
  waterProof: true,
  price: 30000,
};

const info = (vivoMobiles: mobile) => {
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
enum Grade {
  U = 30, // Or default U => which basically 0 as on the 0th index.
  D = 50,
  C = 60,
  B = 80,
  A = 95,
}
console.log();
