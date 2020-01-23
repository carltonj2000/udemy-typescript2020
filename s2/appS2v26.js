function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 12));
//let combineValues: Function;
var combineValues;
// combineValues = 5; //ts needs a function
combineValues = add;
//combineValues = printResult; // ts errors when types are specified
console.log(combineValues(8, 8));
