function combine(
  n1: number | string,
  n2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  if (resultConversion === "as-number") {
    return +result;
  }
  return result.toString();
}

const combinedAge = combine(30, 26, "as-number");
console.log(combinedAge);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("CJ", "YN", "as-text");
console.log(combinedNames);
