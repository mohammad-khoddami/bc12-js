function filter(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        let x = callback(item);
        if (x) {
            newArray.push(x);
        }
    }
    return newArray;
}

function biggerThanTwo(a) {
    if (a > 2) return a;
}

function biggerThanThree(a) {
    if (a > 3) return a;
}

let arr = [1, 2, 3, 4, 5, 6];

let y = filter(arr, biggerThanTwo);
let z = filter(arr, biggerThanThree);

console.log(y);
console.log(z);
