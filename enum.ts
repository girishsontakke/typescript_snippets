enum Role {
  ADMIN,
  USER,
  READ_ONLY,
}

const person1: {
  name: string;
  age: number;
  hobbies: string[];
  role: number;
} = {
  name: "girish",
  age: 20,
  hobbies: ["coding", "playing"],
  role: Role.ADMIN,
};
if (person1.role === 0) console.log("role is admin");
