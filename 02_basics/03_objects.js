// Learn how to handle objects and events in js to master js

// singleton
// Object.create

// object literals

const mySymbol = Symbol("key1")

const jsUser = {
    name: "Raja",
    age: 18,
    location: "Kolkata",
    [mySymbol]: "mykey1",
    email: "subrata@google.com",
    isLoggedIn: false,
    "full name": "Subrata Nandi"
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySymbol]);

jsUser.age = 23
// Object.freeze(jsUser)
jsUser.age = 22
// console.log(jsUser)

jsUser.greeting = function() {
    console.log("Hello JS user");
}

console.log(jsUser.greeting());
console.log(jsUser.greeting);

jsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greetingTwo());


