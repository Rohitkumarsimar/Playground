console.log(Date())

let day = Date().split(" ")[0]
day = day.toLowerCase()
let arr = ['s','m','t','w','t','f','s']

for(let i =0; i<arr.length; i++){

    if(day[0]===arr[i]){
        console.log(arr[i])
    }
}
console.log(day[0])