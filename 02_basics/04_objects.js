// const user = new Object()    // Singleton object
// console.log(user);   

const user = {}  // normal object
user.id = "123a"
user.name = "Raja"
user.isLoggedIn = false

// console.log(user);

const user2 = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "subrata",
            lastname: "nandi"
        }
    }
}

// console.log(user2.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign(obj1, obj2) // Everything is copied to obj1 and also stored in obj3
// So its better to use an empty target object

// const obj3 = Object.assign({}, obj1, obj2)

// Best way is to use spread operator
const obj3 = {...obj1, ...obj2}

// console.log(obj3);
// console.log(obj1);

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('name'));
console.log(user.hasOwnProperty('naming'));

// Destructuring a value or an object
const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);

// json
// {
//     "name": "Subrata",
//     "course": "js in hindi",
//     "fees": free
// }


[
    {},
    {},
    {}
]



