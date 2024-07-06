// primitive and non primitive data types

// Primitive (Call by value)

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is a dynamically typed language

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 123124123451543235435n

console.log(typeof bigNumber);

// typeof null is object
// typeof undefined is undefined

// Non Primitive (Reference type)

// Array, Objects, Functions

const myFunction = function() {
    console.log("Hello World");
}

myFunction()
console.log(typeof myFunction);