const email = "s@gmail.com"

if(email) {
    console.log("Got user email");
}
else {
    console.log("Don't have user email"); 
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// anything that is not falsy value, [], "0", 'false', " ", {}, function() {} 

const arr = [] 
if(arr.length === 0) console.log("Array is empty");

const emptyObj = {}
if(Object.keys(emptyObj).length === 0) console.log("Object is empty");

console.log(false == 0);
console.log(false == "");
console.log(0 == "");


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// console.log(val1);

// val1 = null ?? 10
// console.log(val1)

// val1 = undefined ?? 10
// console.log(val1);

val1 = null ?? 10 ?? 20
console.log(val1);

// Ternary operator

// condition ? true : false

const price = 100

2 > 10 ? console.log("It's true") : console.log("It's false")
