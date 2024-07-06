//console.log(2 > 1);

// Avoid this kind of comparisons

console.log("2" > 1);
console.log("02" > 1); 

console.log(null > 0); 
console.log(null == 0);
console.log(null >= 0);

// The reason is that an equality check == and comparisons > < >= <= works differently
// Comparisons and equality checking are differents in js
// Comparisons convert null to a number, treating it as 0

console.log(undefined == 0);

console.log("2" === 2);