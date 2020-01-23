enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 1000,
  AUTHOR = "AUT"
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: "Carlton",
  age: 54,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

if (person.role === Role.ADMIN) console.log("saw admin");
// person.role.push("admin"); // tsc will not catch
//person.role[1] = 10; // tsc will catch this

let favoriteActivities: any[];
//favoriteActivities = ["Sports", 2];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
