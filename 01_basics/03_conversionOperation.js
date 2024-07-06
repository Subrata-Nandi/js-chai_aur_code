let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

// NaN means not a number

let score1 = "33abc"
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

let score2 = null
let valueInNumber2 = Number(score2)
console.log(valueInNumber2);

let score3 = undefined
let valueInNumber3 = Number(score3)
console.log(valueInNumber3);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Raj" => true

let num = 33
let str = String(num)
console.log(str);
console.log(typeof str);