function add(num1: number, num2: number) {
  return num1 + num2;
}

let combineValue: (a: number, b: number) => number;
combineValue = add;
console.log(combineValue(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(8, 8, (num) => {
  console.log(num);
});
