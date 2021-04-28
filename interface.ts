interface Named {
  name: string;
}

interface Greetable extends Named {
  age: number;
  greet(phrase: string): void;
}

// functional interface
interface AddFn {
  (n: number, m: number): number;
}

let fun: AddFn = (n: number, m: number) => {
  return n + m;
};

class Person implements Greetable {
  constructor(public id: number, public name: string, public age: number) {}
  greet(name: string) {
    console.log(`Hey there I am ${name}`);
  }
}

let p: Greetable = new Person(1, "Girish", 20);
console.log(p);

// ###################### index properties ####################### //
interface Memo {
  [key: string]: string;
}

let memo: Memo = {
  email: "Email not valid",
  password: "Password too comman",
};
