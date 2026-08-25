console.log(Date())

let days = new Date().getDay()
let arr = ['s','m','t','w','t','f','s']

// for(let i =0; i<arr.length; i++){

//     if(day[0]===arr[i]){
//         console.log(arr[i])
//     }
// }
// console.log(day[0])

// const today = new Date().getDay()
const today = arr.filter((day, index)=>(
   index === days
))
console.log(today)