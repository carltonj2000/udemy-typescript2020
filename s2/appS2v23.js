function combine(n1, n2, resultConversion) {
    var result;
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        resultConversion === "as-number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    if (resultConversion === "as-number") {
        return +result;
    }
    return result.toString();
}
var combinedAge = combine(30, 26, "as-number");
console.log(combinedAge);
var combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
var combinedNames = combine("CJ", "YN", "as-text");
console.log(combinedNames);
