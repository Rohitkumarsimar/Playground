const array = [10,20,30]

const iterator = array[Symbol.iterator]()

console.log(array[Symbol.iterator]())
console.log(array[Symbol.iterator])
console.log(iterator)
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

console.log(Object.hasOwn(array, Symbol.iterator));
console.log(Object.hasOwn(Array.prototype, Symbol.iterator));


function test(a,b){
    console.log(arguments)
    
}

test(1,2)

//generator
function* numbers(){
    yield 10,
    yield 20,
    yield 30
}

const gen = numbers();
console.log(gen)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())