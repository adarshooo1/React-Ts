Typescript: Is a statically type language which means types are checked at the compile time.
-- Benefits:
   self-documenting
   catch error in development
   great for teams

Javascript: Is a dynamically type language which means types are checked at the run time.

Node Js Runtime environment to run js and ts code in local machine
install node js

To install typescript globally in the machine
cmd: npm i typescript -g

To check the installation
cmd: tsc --v

Initialize tsconfig.json
cmd: tsc --init

Define the root directory where we are write the ts code:
// module
"rootDir": "./src",      

Define the out directory where the typescript code will compile in js
//module
"outDir": "./build/js",  

To see the real time compilation to root directory to out directory after defining the root directory and out directory.
cmd: tsc -w

-------------------------------------------------------------------

Suppose tsc -w is running w = watch which act like a server which will watch all the tsc file and compile all that into the javascript and create compiled js file across the directory apart from the src directory so to stop that we have to go inside the tsconfig.json
In the second last line we have to paste this code which will make sure that what ever the compilation is happen only with the src directory:

code:
"include": [
   "src"
]
-------------------------------------------------------------------

// In tsconfig.json
// Module
comment of : noEmitOnError : true //this will check if any error will be visible regarding type checking in the ts file for compiling it into the js file, Then will throw error and do not compile the TS file code to the JS compile code.

or

cmd: tsc --noEmitOnError -w  //Will do the same thing.

-------------------------------------------------------------------
NOTE:
What ever we code in any language it get compiles and in the build directory we have all the complied code. In form of html, css and javascript.

------------------------------------------------------------------------
Example Code: Typescript

let fName = "Adarsh";
console.log(fName);

let a = 23;
let b = "mom";
let c = "4";
console.log(a / c); //representing error in the typescript but it compiled to the js so it will still work; tsx -w || noEmitOnError : false or commented
console.log(a * c); //representing error in the typescript but it compiled to the js so it will still work; tsx -w || noEmitOnError : false or commented
// But cmd: tsc --noEmitOnError -w || noEmitOnError : true , take care that faulty code not get compiled
// Ex: console.log(a * c); In which a: integer and c: string

// Defining Type to avoid error in larger codebase.
let d: number = 23;
let e: string = "mom";
let f: number = 4;
// let g: number = "4"; //Throw error.

console.log(d * f);
console.log(d / f);

let h = "12";
let i = +h; //Type conversion
console.log(i);

h = 12 //Re-assign error to string to number
h = "mango" //Can re-assign string to string

let isLoading : boolean;
isLoading :true;

let album : any;
album = 12 || album : = "str" || isLoading = true

const sum = (a: number, b: number) => {
  return a + b;
};

const str = (a: number, b: string) => {
    return a + b;
    //return string
};

let dataType : string | number ;
dataType = 12 or dataType = "telnet"

let postId : string | number
let isActive : number | boolean | string
let rgx : RegExp =/\w+/g



