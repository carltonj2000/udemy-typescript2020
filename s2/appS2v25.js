function add(n1, n2) {
    return n1 + n2;
}
var useless;
function printResult(num) {
    console.log("Result: " + num);
}
function printResult1(num) {
    console.log("Result: " + num);
    return;
}
function printResult2(num) {
    // code
    return;
}
/* tsc error
function printResult3(num: number): undefined {
  // code no return
}
*/
console.log(printResult(add(5, 12)));
