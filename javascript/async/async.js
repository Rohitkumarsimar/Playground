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


async function test(){
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
   
    console.log("A")
}

test();

const p = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("result aa gya")
        reject("error aa gya");
    }, 2000);
}).then(val=>console.log(val)).catch(err=>console.log(err))

console.log(p)
    setTimeout(()=>{console.log(p)},3000);


    const arr = [1,2,3,4,5]
    const newarr = arr.map((i)=>{console.log("hehehe",i)})
    const fil = arr.filter((i)=>i>3)
    console.log(fil)
    console.log(newarr)