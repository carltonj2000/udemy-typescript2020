function combine(n1, n2) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combinedAge = combine(30, 26);
console.log(combinedAge);
var combinedNames = combine("CJ", "YN");
console.log(combinedNames);
