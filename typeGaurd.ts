type Employee = {
  name: string;
  privileges: string[];
};

type Admin = {
  name: string;
  properties: string[];
};

type UnknowEmployee = Employee | Admin;

const printEmployee = (emp: UnknowEmployee) => {
  console.log(` name of employee ${emp.name}`);
  if ("privileges" in emp) console.log(emp.privileges);
};
