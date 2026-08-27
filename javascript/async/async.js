// console.log("A");
// const promise = fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));

// setTimeout(() => {
//   console.log(promise);
// }, 2000);

// const promise2 = promise.then((resolve) => "hello")
// .then(value =>console.log(value))

// console.log("C");

// console.log(promise instanceof Promise);


// async function test(){
//     await fetch("https://jsonplaceholder.typicode.com/todos/1")
   
//     console.log("A")
// }

// test();

// const p = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("result aa gya")
//         reject("error aa gya");
//     }, 2000);
// }).then(val=>console.log(val)).catch(err=>console.log(err))

// console.log(p)
//     setTimeout(()=>{console.log(p)},3000);


//     const arr = [1,2,3,4,5]
//     const newarr = arr.map((i)=>{console.log("hehehe",i)})
//     const fil = arr.filter((i)=>i>3)
//     console.log(fil)
//     console.log(newarr)

// console.log("A")
// const process = new Promise ((resolve, reject)=>{
//     const time = new Date().getTime();
//     while(time+3000>= new Date().getTime());
//     console.log("C")
//     resolve();
// })

// // process();
// console.log("B")

// function foo(){
//     throw new Error ("OOPS!!")
// }
// function bar(){
//     foo()
// }
// function baz(){
//     baz()
// }
// baz();

setTimeout(()=>{
console.log("timeout")
},0);

Promise.resolve().then(()=>setTimeout(()=>{console.log("promise")},0));

for(var i = 0; i<3; i++){
    setTimeout(() => {
        console.log(i)
    }, 500);
}


let j = 0;
 while(j<3){
    var x = 10;
    let y = 20;
    console.log(i)
    j++
}
// console.log(y)
setTimeout(() => {
    
    console.log("value of x: ",x);
}, 2000);
