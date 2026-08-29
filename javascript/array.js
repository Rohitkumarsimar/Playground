// let arr = [11,22,33,44,55,66,77,88]

// let squaredArr = arr.map
// ((value)=> value * 2)

// console.log(squaredArr)
// console.log(arr)

let array = [1,2,3,4,5]

// make new array, multiples of rest of the element except the one on you are
let result=[];
let temp=1;
for(let i = 0; i<array.length; i++){
    temp *= array[i]
}
console.log(temp)

for(let i = 0; i < array.length; i++){
    result[i] = temp/array[i]
}
console.log(result)