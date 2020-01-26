console.log("your code goes here ...");

const add = (a: number, b: number = 33) => a + b;

const pO: (a: number | string) => void = output => console.log(output);

pO(add(5, 2));
pO(add(5));

const button = document.querySelector("button");

button?.addEventListener("click", event => console.log(event));

const hobbies = ["Sports", "Cooking"];

const activeHobbies = ["Hiking", ...hobbies];

console.log(activeHobbies);

const person = { name: "Carlton", age: 54 };

const copiedPerson = { ...person };

console.log(copiedPerson);

const { name: string, ...rest } = person;

console.log(rest);

const add2 = (...rest: number[]) => {
  return rest.reduce((a, v) => a + v, 0);
};

const addedNumbers = add2(4, 10, 3, 2.7);

console.log(addedNumbers);

const add3 = (...rest: [number, number, number]) => {
  return rest.reduce((a, v) => a + v, 0);
};

const addedNumbers3 = add3(4, 10, 3);

console.log(addedNumbers3);
