// console.log(Math.ceil(Math.PI))
// console.log(Math.floor(Math.PI))

// console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}

// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

