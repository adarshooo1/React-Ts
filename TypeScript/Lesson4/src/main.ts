class Coders {
  constructor(
    public readonly fname: string,
    public music: string,
    private age: number,
    protected lang: string = "Java"
  ) {
    this.fname = fname;
    this.music = music;
    this.age = age;
    // this.lang = lang;
  }

  public getAge() {
    return `I am ${this.age} years old`;
  }
  public getLang() {
    return this.lang;
  }
}

const Adarsh = new Coders("Adarsh", "pop", 21);
console.log(Adarsh.getAge());
console.log(Adarsh.getLang());

class webDev extends Coders {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLag() {
    return `I write ${this.lang}`;
  }
}

const add = new webDev("Intel", "Addy", "Rock", 90);
console.log(add.getLag());
console.log(add.computer);
console.log(add.getAge());

// Interfaces

interface musician {
  fname: string;
  song: string;
  listen: number | string;
  sing(action: string): string;
}

class music implements musician {
  fname: string;
  song: string;
  listen: string | number;

  constructor(fname: string, song: string, listen: number | string) {
    this.fname = fname;
    this.song = song;
    this.listen = listen;
  }

  sing(action: string) {
    return `${this.fname} ${action} ${this.song} which has ${this.listen} current listening`;
  }
}

const mus = new music("Arjit Singh", "Satranga", "100m");
console.log(mus.sing("Sings"));

// Static
class peeps {
  static count: number = 0;
  static inc: number = 0;

  static getCount(): number {
    return peeps.count;
  }

  static incCount(): number {
    return (peeps.inc += 1);
  }
  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++peeps.count;
  }
}

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
  private dateState: string[];
  constructor() {
    this.dateState = [];
  }
  public get data(): string[] {
    return this.dateState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dateState = value;
      return;
    } else throw new Error("Param in not an array of string");
  }
}

const bds = new Bands();
bds.data = ["Nei", "pow", "two"];
console.log(bds.data);
bds.data = [...bds.data, "make"];
console.log(bds.data);
