const name = "subrata"
const age = 22

// console.log(name + age + " Hello")  // out dated

console.log(`Hello my name is ${name} and my age is ${age}`);  // String interpolation Modern day used

const gameName = new String('BloodyDevil')
// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 7)
console.log(anotherString);

const newString1 = "       subrata       "
console.log(newString1);
console.log(newString1.trim());

const url = "https://subrata.com/subrata%20nandi"
console.log(url.replace('%20', '-'))

console.log(url.includes('subrata'));
console.log(url.includes('riya'));

const str = "hello-iy-ou"
console.log(str.split('-'));