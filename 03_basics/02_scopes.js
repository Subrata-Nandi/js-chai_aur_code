var c = 300

if(true) {
    let a = 1
    const b = 2
    var c = 3
}

// console.log(a);
// console.log(b);
// console.log(c); // This is a problem of using var, block scope problem

// block scope and global scope

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// nested function and scope
function one() {
    const username = "subrata"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

one()

// ************************** Interesting *******************************

addOne(5)

function addOne(value) {
    return value + 1
}


addTwo(5)   // Problem if called before

const addTwo = function(num) {
    return num + 2
}

