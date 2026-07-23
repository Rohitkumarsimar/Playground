async function delay(){
   await setTimeout( () => {
        console.log("settimeout ran!")
    }, 3000);
}
delay()
console.log("hello")

function greet(greet2){
    console.log("outer function")
    function greet2(){
        console.log("hello", greet2)
    }
}

 greet()

