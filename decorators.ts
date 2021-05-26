function Logger(_constructor: Function) {
  console.log("Logging...");
}

function Log(target: any, propertyName: string) {
  console.log("property decorator");
  console.log(target, propertyName);
}

function Log2(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor decorator");
  console.log(target, propertyName, descriptor);
}

function Log3(target: any, methodName: string, descriptor: PropertyDescriptor) {
  console.log("Method decorator");
  console.log(target, methodName, descriptor);
}

function Log4(target: any, propertyName: string, index: number) {
  console.log("Parameter decorator");
  console.log(target, propertyName, index);
}

@Logger
class Person {
  @Log
  name = "Girish";
  constructor() {
    console.log("In the constructor");
  }

  @Log2
  set _name(name: string) {
    this.name = name;
  }

  @Log3
  printName(@Log4 name: string) {
    console.log(name);
  }
}

//////////////  Decorator Factory /////////
function ReplaceWithTemplate(template: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("returning template");
        const element: HTMLDivElement | null = document.querySelector("#root");
        if (element) {
          element.innerHTML = template;
          element.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@ReplaceWithTemplate("<h1>Hello There</h1>")
class someClass {
  name = "Girish";
  constructor() {}
}

const cl = new someClass();

//////////// Example Use Of Decorators ///////////////////////
function Autobind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunc = originalMethod.bind(this);
      return boundFunc;
    },
  };

  return adjDescriptor;
}

class Printer {
  message: string = "This works";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);
