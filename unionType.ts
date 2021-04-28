const combine = (
  input1: string | number,
  input2: string | number
): string | number => {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  }
  return input1.toString() + input2.toString();
};

const combinedAge = combine(3, 5);
console.log(combinedAge);

const combinedName = combine("girish", "sontakke");
console.log(combinedName);
