//Spread creates a shallow copy: it creates a new outer container and copies each element/property into it. Primitive values are copied as values; object/array values are copied as references.

//Spread expands the elements/properties of an iterable or object into a new context.

let arr = [[1,2,3],{name: "rohit"}, {age:22}]
let copy  = [...arr]

copy[0][2] = [22]
console.log(copy)
console.log(arr)

// console.log(copy)
// copy.splice(0,0,["xyz"])
// console.log(copy)
// copy[0]="x";
// console.log(copy)

let numbers = [1,2,3,4]
let numcopy = [...numbers]

numcopy[0] = 23
console.log(numcopy)
console.log(numbers)



//Rest collects multiple remaining values/arguments into a single array.
function add (...numbers){
    console.log("Print array: ",numbers)
    console.log("Prints Values: ",...numbers)
}

add(12,3,4,55,6);

// Spread → expands.
// Rest → collects. 🎯

const data  = {
name : "Rohit",
age: 22,
phone: 22334455
}

const {name,...rest}= data;

console.log(rest);

const user = {...data}
console.log(user)