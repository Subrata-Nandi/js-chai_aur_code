const user = {
    username: "raja",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`)
        console.log(this);
        
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, age, isLoggedIn) {
    this.username = username
    this.age = age
    this.isLoggedIn = isLoggedIn

    return this
}

// const userOne = User("Subrata", 22, true)
// const userTwo = User("df", 22, false)

// console.log(userOne)

const userOne = new User("Subrata", 22, true)
const userTwo = new User("sfsdfdsf", 22, false)
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);

