// Dates

let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2024-07-20")
let myCreatedDate = new Date("07-20-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());   // convert time into miliseconds

// console.log(Math.floor(Date.now() / 1000));     // miliseconds to seconds

let newDate = new Date()

// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// Customizing properties
newDate.toLocaleString('default', {
    weekday: "long"
})