// const array = [1, 2, 3, 4, 5];

// const finalResult = array.reduce((result, current) => {
//     return result + current;
// }, 0);
// console.log(finalResult);

// const sum = (a, b) => {
//     return a + b;
// };
// const mul = (a, b) => {
//     return a * b;
// };

// function operation(array, callback, initialValue = 0) {
//     let res = initialValue;
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         res = callback(element, res);
//     }
//     return res;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(operation(arr, sum));
// console.log(operation(arr, mul, 1));

// const array = [2, 4, 1, 7, 3];

// const result = array.reduce((prev, curr) => (prev > curr ? prev : curr));

// console.log(result);

// const array = [
//     "apple",
//     "banana",
//     "banana",
//     "pineapple",
//     "orange",
//     "banana",
//     "grapse",
//     "orange",
// ];
// const i = array.lastIndexOf("orange");
// console.log(i);

// const deletedItem = array.splice(3, 1);
// console.log(array);

const array = ["a", "b", "c", "d", "e", "f"];
// const index = array.indexOf("d");
// if (index > -1) {
//     array.splice(index, 1);
// }
// array.reverse();

// const newArray = array.concat([1, 2, 3]);

// const result = array.join(",");

// console.log(result);

// const name = "mohammad, ali, maryam, sara, negar";
// const newRes = name.split(", ");
// console.log(newRes);
// console.log(newRes.join("-"));

// console.log(array.toString());

// const a = 12;
// console.log(a.toString());

// const text =
//     "JavaScript is a 55 programming language, love js. people can easily learn JavaScript. I love JavaScript.";

// const pass = "_";

// const regEx = /./g;
// const result = regEx.test(pass);

// console.log(result);

// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.length);
// console.log(text.toLowerCase().includes("javascript"));
// console.log(text.startsWith("prog"));
// console.log(text.endsWith("love"));
// console.log(`${text.slice(0, 20)}...`);
// console.log("mohammad ".repeat(3));
// console.log(text.replace("love", "like"));
// console.log(text.replaceAll("love", "like"));
// console.log(text.padStart(152, "*"));
// console.log(text.substring(0, 20));

// let a = 12; // a -> 204 -> 12
// let b = a; // b -> 511 -> 12
// a = 15; // 204 -> 15
// console.log(a, b);

// let user1 = {
//     name: "mohammad",
// };                      // user1 -> 302 -> {name:mohammad}
// let user2 = user1;      // user2 -> 302
// user1.name = "ali";     // 302 ->{name: ali}
// console.log(user1, user2);

/**
 * primitive value (string, number, boolean, ...) -> copy by value
 * non-primitive value (object, array) -> copy by reference
 *
 */

const users = [
    {
        firstName: "mohammad",
        lastName: "khoddami",
        city: "isfahan",
        job: "dev",
    },
    {
        firstName: "mohammad2",
        lastName: "khoddami2",
        city: "isfahan2",
        job: "dev2",
    },
];

const keys = Object.keys(users[1]);
// const values = Object.values(users[1]);
console.log(keys);
// console.log(values);
// users.forEach((user) => {
//     keys.forEach((key) => {
//         console.log(user[key]);
//     });
// });

users.forEach((user) => {
    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.city);
    console.log(user.job);
});
