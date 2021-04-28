type Combinable = string | number;

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: "as-number" | "as-text"
): Combinable => {
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    return +input1 + +input2;
  }
  return input1.toString() + input2.toString();
};

const combinedAge = combine(3, 5, "as-number");
console.log(combinedAge);

const combinedStringAge = combine("3", 5, "as-number");
console.log(combinedAge);

const combinedName = combine("girish", "sontakke", "as-text");
console.log(combinedName);
