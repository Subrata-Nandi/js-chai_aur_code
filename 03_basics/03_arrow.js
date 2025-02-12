const user = {
    username: "subrata",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// Window object is the global object in browser

// console.log(this);

// function chai() {
//     let username = "raja"
//     console.log(this.username);     // undefined, because this is not used inside function
    
// }

// chai()

// this can only be used inside object


// const chai = function() {
//     let username = "raja"
//     console.log(this.username);
// }


const chai = () => {
    let username = "raja"
    console.log(this.username);
    console.log(this);
    
}

// chai()


// Arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2   //explicit return must be used for curly braces
// }

// console.log(addTwo(2, 3));

// Implicit return

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "subrata"})

console.log(addTwo(2, 3));