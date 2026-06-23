//DX -> developer experience

// let, const
// var

// function myFunc() {
//     var a = 10;
//     if (true) {
//         var a = 20;
//         console.log(a);
//     }
//     console.log(a);
// }
// myFunc();
// console.log(a);

// function myFunc() {
//     let a = 10;
//     if (true) {
//         let a = 20;
//         console.log(a);
//     }
//     console.log(a);
// }
// myFunc();
// console.log(a);

// var x = 20;
// var x = 30;
// console.log(x);

// let x = 20;
// x = 30;
// console.log(x);

// console.log(a);
// var a = 10;

// var a;
// console.log(a);
// a = 10;

// myFunc();
// function myFunc() {
//     console.log("AAA");
// }

// console.log(a);
// var a = 10;

// const -> constant
// const a = 10;
// a = 20;
// console.log(a);

// const user = {
//     firstName: "mohammad",
//     lastName: "khoddami",
// };
// user.address = "AA";
// user.firstName = "bbbb";
// user = {};
// console.log(user);

// // const arr = ["a", "b", "c", "d"];
// // arr = "fnvjfnv";
// // console.log(arr);

//declaration function
// console.log(isEven(5));

// function isEven(a) {
//     return a % 2 === 0 ? true : false;
// }

//expression function
// console.log(isEven(5));
// const isEven = function (a) {
//     return a % 2 === 0 ? true : false;
// };

// arrow function
// const isEven = (a) => {
//     return a % 2 === 0 ? true : false;
// };
// console.log(isEven(5));

// const isEven = (a) => (a % 2 === 0 ? true : false);
// console.log(isEven(5));

//callback
let array = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(myFilter(array, isEven));
// console.log(myFilter(array, isOdd));

console.log(
    myFilter(array, (a) => {
        if (a % 2 === 0) return a;
    }),
);
console.log(
    myFilter(array, (a) => {
        if (a % 2 !== 0) return a;
    }),
);

function myFilter(array, callback) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const res = callback(element);
        if (res) {
            newArray.push(res);
        }
    }
    return newArray;
}

function isEven(a) {
    if (a % 2 === 0) return a;
}

function isOdd(a) {
    if (a % 2 !== 0) return a;
}

const sum = (a, b) => {
    return a + b;
};
const mul = (a, b) => {
    return a * b;
};

function operation(array, callback) {
    let res = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        res = callback(element, res);
    }
    return res;
}
let arr = [1, 2, 3, 4];
console.log(operation(arr, sum));
console.log(operation(arr, mul));
