var user = {
    firstName: "mohammad",
    lastName: "khoddami",
    age: 30,
    hasCar: true,
    job: ["developer", "teacher"],
    address: {
        country: "iran",
        city: "isfahan",
    },
};

console.log(user.firstName);
console.log(user.address.city);
console.log(user.job[0]);

var aa = "age";
console.log(user["age"]);

var e = 10 % 3;
console.log(e);
