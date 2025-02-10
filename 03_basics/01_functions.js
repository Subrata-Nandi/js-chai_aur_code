function sayMyName() {      // function definition
    console.log("Subrata");
}

// sayMyName        // reference
sayMyName()         // execution

function addTwoNumbers(num1, num2) {    // The variables used in the function definition is parameter
    // console.log(num1 + num2);
    return num1 + num2;
}

const result = addTwoNumbers(3, 4)     // The variables used while calling the function is argument
// console.log("Result:", result);

// function loginUserMessage(username) {
//     // if(username === undefined) {
//     if(!username) {
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Subrata"));
// console.log(loginUserMessage());


function loginUserMessage(username = "Sam") {
    // if(username === undefined) {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Subrata"));

function calculateCartPrice(...num1) {  // here "..." it is acting as rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 300));

function calculateCartPrice(val1, val2, ...num1) {  
    return num1
}

// console.log(calculateCartPrice(200, 400, 300, 2323));

const user = {
    username: "Subrata",
    age: 22
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age} years`);
    
}

// handleObject(user)

handleObject({
    username: "Sam",
    age: 34
})


const arr = [1,2,3,4]

function returnValue(getArray) {
    return getArray[1]
}

console.log(returnValue(arr));
console.log(returnValue([23, 455, 678]));

