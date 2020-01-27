console.log("Interfaces");

interface Named {
  readonly name?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}
let user1: Greetable;

user1 = {
  name: "Carlton",
  greet(phrase: string) {
    console.log(phrase, this.name);
  }
};

user1.greet("hi");

class Person implements Greetable {
  constructor(public readonly name?: string) {
    //
  }
  greet(phrase: string) {
    if (this.name) console.log(phrase, this.name);
    else console.log(phrase);
  }
}

const person = new Person("Carlton 2");
person.greet("howdy");

const p2 = new Person();
p2.greet("Salute");

type AddFnT = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => n1 + n1;
