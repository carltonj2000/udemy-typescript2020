console.log("adv");

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee {}; // if above were interfaces
type ElevatedEmployee = Admin & Employee;

let e1: ElevatedEmployee;

e1 = {
  name: "Carlton",
  privileges: ["create-server"],
  startDate: new Date()
};

console.log(e1);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; //  only number

function ad(a: number, b: number): number;
function ad(a: string, b: string): string;
function ad(a: Combinable, b: Combinable) {
  //function ad(a: Combinable, b: Combinable) {
  // type guard
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString();
  return a + b;
}

const rs = ad("c", "j"); // known as string due to function overloading

const fetchedUserData = {
  id: "u1",
  name: "carlton"
  //job: { title: "ceo", description: "developer" }
};

console.log(fetchedUserData?.job?.title);

const userInput = null;

const storedData = userInput ?? "DEFAULT"; // for null or undefined not falsy
console.log(storedData);

type UnknownEmployee = Employee | Admin;

function printEinf(emp: UnknownEmployee) {
  console.log("name", emp.name);
  if ("privileges" in emp) console.log("Privilege", emp.privileges);
  if ("startDate" in emp) console.log("Privilege", emp.startDate);
}

printEinf({ name: "cj", privileges: ["hotstuff"] });

class Car {
  drive() {
    console.log("Driving");
  }
}
class Truck {
  drive() {
    console.log("Driving Truck");
  }
  loadCargo(amount: number) {
    console.log("Loaded", amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(v: Vehicle) {
  v.drive();
  if (v instanceof Truck) v.loadCargo(10);
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case "bird":
      console.log("Flying with speed", animal.flyingSpeed);
      break;
    case "horse":
      console.log("Moving with speed", animal.runningSpeed);
      break;
  }
}

moveAnimal({ flyingSpeed: 10, type: "bird" });
moveAnimal({ runningSpeed: 10, type: "horse" });

const para = document.querySelector("p");
const p = document.getElementById("message-output");

//const i = <HTMLInputElement>document.getElementById("user-input");
const i = document.getElementById("user-input") as HTMLInputElement;

if (i) i.value = "hi there";

// index properties start
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!"
};
// index properties end
