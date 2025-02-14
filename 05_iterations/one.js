// for

// for (let i = 0; i < 10; i++) {      // ctrl + d to duplicate
//     console.log(i); 
//     if(i == 5) console.log("5 is best number");
    
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(`Outer loop: ${i}`);
    
//     for (let j = 0; j < 5; j++) {
//         console.log(`Inner loop: ${i}, Inner loop: ${j}`);
        
//     }
// }


let myArr = ["flash", "batman", "ironman"]
// for (let index = 0; index < myArr.length; index++) {
//     console.log(myArr[index]);
    
// }

// break and continue

// for (let i = 1; i <= 10; i++) {
//     if(i == 5) {
//         console.log("Detected 5");
//         break;
//     }
//     console.log(i);
// }

// alt + shift + down key => copy paste
for (let i = 1; i <= 10; i++) {
    if(i == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(i);
}

