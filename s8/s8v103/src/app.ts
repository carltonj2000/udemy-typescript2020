console.log("decorators");

function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function<T extends { new (...args: any[]): { name: string } }>(
    oriconstructor: T
  ) {
    return class extends oriconstructor {
      constructor(..._: any[]) {
        super();
        console.log("@WithTemplate");
        const elem = document.getElementById(hookId);
        if (elem) {
          elem.innerHTML = template;
          const h1 = elem.querySelector("h1");
          h1?.appendChild(document.createTextNode(" - " + this.name));
        }
      }
    };
  };
}

@WithTemplate("<h1>hi</h1>", "app")
@Logger("Logging - Person")
class Person {
  name = "cj";

  constructor() {
    console.log("creating person object");
  }
}

const person = new Person();
console.log(person);

// <-- new stuff -->

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor Decorator");
  console.log(target, name, descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method Decorator");
  console.log(target, name, descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter Decorator");
  console.log(target, name, position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) this._price = val;
    else throw new Error("Invalid price negative");
  }
  constructor(t: string, p: number) {
    console.log("Product created", t, p);
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this.price * (1 + tax);
  }
}

const p1 = new Product("book 1", 1);
const p2 = new Product("book 2", 2);

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const oriMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = oriMethod.bind(this);
      return boundFn;
    }
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";
  @AutoBind showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
const button = document.querySelector("button");
button?.addEventListener("click", p.showMessage);

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}
const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"]
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"]
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) return true;
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
    return isValid;
  }
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form");
const title = document.getElementById("title") as HTMLInputElement;
const price = document.getElementById("price") as HTMLInputElement;
courseForm?.addEventListener("submit", e => {
  e.preventDefault();
  const createdCourse = new Course(title.value, +price.value);
  if (!validate(createdCourse)) {
    return alert("invalid input");
  }
  console.log(createdCourse);
});
