// Immediately Invoked Function Expressions (IIFE) => The function that immediately gets executed

(function chai() {
    // named iife      
    console.log(`DB CONNECTED`); 
})();

// Sometimes there is pollution from global scope declarations, so to avoid this we use iife


( () => {   // using arrow function
    console.log(`DB CONNECTED TWO`);
} )();      // ';' is important for iife


( (name) => {       // Parameter passing
    console.log(`DB CONNECTED TWO ${name}`);
} )('Subrata');      