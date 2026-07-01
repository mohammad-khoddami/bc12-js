// let array = [1, 2, 3];

// array.push(4, 5, 6, 7);
// console.log(array);

// let removedItem1 = array.pop();
// let removedItem2 = array.pop();
// console.log(array);

// array.shift();
// console.log(array);

// array.unshift(-1, 0);
// console.log(array);

// let array = [0, 1, 2, 3, 4, 5];
// let foundItem = array.find((item) => item > 2);
// console.log(foundItem);

// let fruits = ["apple", "banana", "orange", "pinapple"];
// let orange = fruits.find((item) => {
//     return item === "orange";
// });
// let orange = fruits.find((item) => {
//     if (item === "orange") {
//         return item;
//     }
// });
// let orange = fruits.find((item) => item === "orange");
// console.log(orange);

// const array = [1, 3, 5];
// let res = array.some((item) => item % 2 === 0);
// console.log(res);

// const array = [1, 3, 5, 4];
// let res = array.every((item) => item % 2 !== 0);
// console.log(res);

// const array = ["c", "a", "z", "b"];
// array.sort();
// console.log(array);

// const array = [10, 2, 5, 3];
// array.sort((a, b) => a - b); //[2,5,5,10]
// console.log(array);

// const fruits = ["apple", "banana", "orange", "pinapple"];
// const hasOrange = fruits.includes("peach");
// console.log(hasOrange);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element === "peach") {
//         return true;
//     }
// }

// const array = [1, 2, 3, 4, 5, 6];
// const newArray = array.slice(2, 4);
// console.log(newArray);

// const array = [1, 2, 3, 4, 5, 6];
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     newArray.push(array[i] * 2);
// }
// console.log(newArray);

// const array = [1, 2, 3, 4, 5, 6];
// const newArray = array.map((item) => item * 2);
// console.log(newArray);

// const fruits = ["apple", "banana", "orange", "pinapple"];
// const newFruits = fruits.map((item, i) => `${i}-${item}`);
// console.log(newFruits);

// fruits.forEach((fruit, i) => {
//     console.log(`${i}-${fruit}`);
// });
// console.log(a);

// const array = [1, 2, 3, 4, 5, 6];
// const newArr = array.filter((item) => {
//     return item < 4;
// });
// console.log(newArr);

const users = [{ name: "ali", age: 22 }];

// const res = users.includes({ name: "ali", age: 22 });

// const res = users.some((item) => item.name === "ali" && item.age === 22);

const res = users.find((item) => item.name === "ali" && item.age === 22);

console.log(res);
