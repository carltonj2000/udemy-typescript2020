const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Carlton",
  age: 54,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"]
};

person.role.push("admin"); // tsc will not catch
//person.role[1] = 10; // tsc will catch this

let favoriteActivities: string[];
//favoriteActivities = ["Sports", 2];
favoriteActivities = ["Sports"];

console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
