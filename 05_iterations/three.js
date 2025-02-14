// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);  
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(greet);
}

// Maps

const map = new Map()
map.set('IN', 'India')
map.set('CH', 'China')
map.set('JP', 'Japan')

// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

const obj = {
    game1: 'nfs',
    game2: 'cod'
}

// for (const [key, value] of obj) {    // Don't work for object
//     console.log(key, ':-', value);
    
// }