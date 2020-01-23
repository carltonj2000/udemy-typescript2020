const person = {
  name: "Carlton",
  age: 54,
  hobbies: ["Sports", "Cooking"]
};

let favoriteActivities: string[];
//favoriteActivities = ["Sports", 2];
favoriteActivities = ["Sports"];

console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
