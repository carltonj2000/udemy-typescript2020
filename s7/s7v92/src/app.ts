console.log("generics");

const names = ["cj", "jj"];
let age: Array<number>;
let age2: number[];

age = [];

const promise: Promise<string> = new Promise(res =>
  setTimeout(() => res("done"), 1000)
);

const main: () => void = async () => {
  const val = await promise;
  console.log(val);
};

main();

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: "cj" }, { age: 54 }));

const mergeObj = merge({ name: "cj2" }, { age: 100 });
console.log(mergeObj.name);

const mergeObj2 = merge({ name: "cj3", hobbies: ["Sports"] }, { age: 101 });
console.log(mergeObj2.hobbies);

function merge2<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj3 = merge2({ name: "cj3", hobbies: ["Sports"] }, 101); // 101 flagged
console.log(mergeObj3);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no elements.";
  if (element.length === 1) descriptionText = "Got 1 element";
  if (element.length > 1)
    descriptionText = "Got " + element.length + " elements";
  return [element, descriptionText];
}

console.log(countAndDescribe("hi there"));
console.log(countAndDescribe([1]));
console.log(countAndDescribe(["a", "b"]));
console.log(countAndDescribe(1)); // flagged during compile

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractAndConvert({}, "name")); // flagged by tsc
console.log(extractAndConvert({ name: "cj12" }, "name")); // not flagged tsc

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("cj");
textStorage.addItem("cj1");
textStorage.removeItem("cj");
console.log(textStorage.getItems());

const objectStorage = new DataStorage<object>();
objectStorage.addItem({ name: "cj" });
objectStorage.addItem({ name: "cj1" });
objectStorage.removeItem({ name: "cj" });
console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names2: Readonly<string[]> = ["cj", "jc"];
names2.push("j"); // tsc flagged
console.log(names2);
