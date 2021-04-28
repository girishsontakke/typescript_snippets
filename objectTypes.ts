const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // this is known as tuple
} = {
  name: "girish",
  age: 20,
  hobbies: ["playing", "cooking"],
  role: [1, "designer"],
};
console.log(person?.name);
