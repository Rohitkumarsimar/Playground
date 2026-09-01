let arr = [1,2,3,4,5,6,7,8,9]
console.log(arr)


//forEach() iterates over each element of an array and executes a callback for each element. It does not create a new array, and its return value is undefined.
//forEach() controls the iteration, ignores whatever the callback returns, but the callback itself can perform side effects—including modifying the original array, objects, variables, making API calls, etc.
arr.forEach(num=> console.log(num))
arr.forEach((num, index)=> arr[index] = num +1)
console.log(arr)

//map() iterates over each element, calls the callback for each element, and puts the value returned by the callback into a new array.
let doubled = arr.map((num)=>num*2);
console.log("Doubled: ", doubled)


//filter returns the element for which the callback returns true
let filtered = arr.filter(num => num>3);
console.log("Filtered: ", filtered);


//find returns the very first element for which the callback returns true.
let findFirst = arr.find((num)=>num*2==8);
console.log("First element: ", findFirst);

//reduce() iterates through an array and uses an accumulator to combine its elements into a single final result.
// accumulator stores the result from the previous iteration and pass it to the next iteration
let reduced = arr.reduce((acc, num)=>{ num + acc},0)
console.log("Reduce: ",reduced)

//example 2: 
const cart = [
    { item: "Book", price: 500 },
    { item: "Mouse", price: 1200 },
    { item: "Keyboard", price: 2000 }
];

let total = cart.reduce((total, product) => {return total+product.price},0)
console.log("Total amount: ", total)


//Some(): "Does at least ONE element in this array satisfy my condition?"
// it always returns a bool value: 

let nums = [1,2,3,4,5,6]
let odds = [1,3,5,7]

let someTrue = nums.some((num) => num %2 === 0) // true
let someFalse = odds.some((num)=> num%2 === 0) //false
console.log("Some result: ",someTrue,", ",someFalse)

//every(): same as some() but it checks for each element, if all are satisfyint the condition then it returns the true.
let every = odds.every((num)=>num%2!==0)
console.log("Every: ", every)
let falseEvery = nums.every(num => num%2===0)
console.log("Every false: ", falseEvery)