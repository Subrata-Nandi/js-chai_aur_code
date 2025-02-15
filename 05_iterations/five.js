const coding = ["js", "java", "python", "c++"]

// coding.forEach( function(val) {
//     console.log(val);
// } )

// coding.forEach( (val) => {
//     console.log(val);
// } )


// function printMe(item) {
//     console.log(item);
    
// }

// coding.forEach(printMe)


// coding.forEach( (val, index, arr) => {
//     console.log(val, index, arr);
    
// })


const myCoding = [
    {
        language: "javascript",
        fileExtension: "js"
    },
    {
        language: "java",
        fileExtension: "java"
    },
    {
        language: "python",
        fileExtension: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.language);
    
})