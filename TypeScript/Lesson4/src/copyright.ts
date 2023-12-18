// Type Assertion or Type Casting with the help of dom

// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("DateTime", thisYear);
// year.textContent = thisYear;

// // 1st Variation:
// let year: HTMLElement | null = document.getElementById("year");
// let thisYear: string = new Date().getFullYear().toString();

// if (year) {
//   year.setAttribute("DateTime", thisYear);
//   year.textContent = thisYear;
// }

// 2nd Variation:
const year = document.getElementById("year") as HTMLSpanElement; //By defining the exact element chances of getting null can we eliminated thats why we are using HTMLSpanELement
const thisYear: string = new Date().getFullYear().toString(); //First we said this should be string and then ar last we converted with the help of .toString method;

year.setAttribute("DateTime", thisYear);
year.textContent = thisYear;