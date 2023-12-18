// Type Casting or Type Assertion

type one = string;
type two = string | number;
type three = "hello";

// Convert to more or less specific
let a: one = "hello";
let b = a as two; //less specific
let c = a as three; //more specific

let d = <one>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 12, "concat") as string;
let myVal2: number = addOrConcat(2, 12, "add") as number;

// 10 as string; Error:- Because we cannot directly typecast that
10 as unknown as string; // So, we have to first typecast this as unknown or any then we can typecast;

const img = document.getElementById("img") as HTMLImageElement;
img.src;

const img2 = document.querySelector("img")!;
img2.src;

const img3 = <HTMLImageElement>document.getElementById("#img");
img3.src;
