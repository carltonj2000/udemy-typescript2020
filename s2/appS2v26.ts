function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

//let combineValues: Function;
let combineValues: (a: number, b: number) => number;

// combineValues = 5; //ts needs a function
combineValues = add;
//combineValues = printResult; // ts errors when types are specified

console.log(combineValues(8, 8));
