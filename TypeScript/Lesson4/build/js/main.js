"use strict";
class Coders {
    constructor(fname, music, age, lang = "Java") {
        this.fname = fname;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.fname = fname;
        this.music = music;
        this.age = age;
        // this.lang = lang;
    }
    getAge() {
        return `I am ${this.age} years old`;
    }
    getLang() {
        return this.lang;
    }
}
const Adarsh = new Coders("Adarsh", "pop", 21);
console.log(Adarsh.getAge());
console.log(Adarsh.getLang());
class webDev extends Coders {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLag() {
        return `I write ${this.lang}`;
    }
}
const add = new webDev("Intel", "Addy", "Rock", 90);
console.log(add.getLag());
console.log(add.computer);
console.log(add.getAge());
class music {
    constructor(fname, song, listen) {
        this.fname = fname;
        this.song = song;
        this.listen = listen;
    }
    sing(action) {
        return `${this.fname} ${action} ${this.song} which has ${this.listen} current listening`;
    }
}
const mus = new music("Arjit Singh", "Satranga", "100m");
console.log(mus.sing("Sings"));
// Static
class peeps {
    static getCount() {
        return peeps.count;
    }
    static incCount() {
        return (peeps.inc += 1);
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++peeps.count;
    }
}
peeps.count = 0;
peeps.inc = 0;
let p = new peeps("Adarsh");
let z = new peeps("John");
console.log(z.id); // Individual count : 2
console.log(peeps.count); //Universal Count : 5
peeps.incCount();
peeps.incCount();
peeps.incCount();
peeps.incCount();
peeps.incCount();
peeps.incCount();
peeps.incCount();
peeps.incCount();
peeps.incCount();
console.log(peeps.incCount());
//Getters and Setters;
class Bands {
    constructor() {
        this.dateState = [];
    }
    get data() {
        return this.dateState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dateState = value;
            return;
        }
        else
            throw new Error("Param in not an array of string");
    }
}
const bds = new Bands();
bds.data = ["Nei", "pow", "two"];
console.log(bds.data);
bds.data = [...bds.data, "make"];
console.log(bds.data);
