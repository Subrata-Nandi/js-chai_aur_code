// array

const myArr = [0, 1, 2, 3, 4, true, "Subrata"]

// console.log(myArr[5]);

// Shallow copy, deep copy mdn docs js

const myHeros = ["Thor", "Venom"]
const myArr2 = new Array(1, 2, 3, 4)

// myArr.push(6)
// console.log(myArr);
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)     // maipulates original array and cut the elements 1,2,3; range inclusive
console.log("C ", myArr);
console.log(myn2);