var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 1000] = "READ_ONLY";
    Role["AUTHOR"] = "AUT";
})(Role || (Role = {}));
var person = {
    name: "Carlton",
    age: 54,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN)
    console.log("saw admin");
// person.role.push("admin"); // tsc will not catch
//person.role[1] = 10; // tsc will catch this
var favoriteActivities;
//favoriteActivities = ["Sports", 2];
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
