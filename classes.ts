// Code goes here
class Department {
  constructor(public name: string, private readonly id: number) {}
  describe(this: Department) {
    console.log("Department: " + this.name + " Id: " + this.id);
  }
}

class ITDepartment extends Department {
  private reports: string[];
  private static instance: ITDepartment;
  private constructor(id: number) {
    super("IT", id);
    this.reports = [];
  }

  // this is called singletons
  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new ITDepartment(1);
    return this.instance;
  }
  get recentReports() {
    return this.reports;
  }
}
const accounting: Department = ITDepartment.getInstance();
accounting.describe();

abstract class A {
  abstract say(): void;
  tell() {
    console.log("Hello");
  }
}

class B extends A {
  say() {
    console.log("In B");
  }
}
