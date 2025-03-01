// let myName = "Subrata    "

// console.log(myName.trueLength());

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function() {
    console.log(`Hitesh is present in all objects`);
    
}

Array.prototype.heyHitesh = function() {
    console.log(`Hello World`);
    
}

// heroPower.hitesh()
// myHeros.hitesh()

myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const user = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUser = "Helo      "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUser.trueLength()
"Subrata        ".trueLength()