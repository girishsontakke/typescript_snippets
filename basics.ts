const root = document.getElementById("root");

function product(num1: number, num2: number): number {
  return num1 + num2;
}

const num1: number = 3; // it is not necessary to declare type of constant
const num2 = 4;
let result: number = product(num1, num2);
console.log(result);
