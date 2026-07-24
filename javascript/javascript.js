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

const arr = ["apple", "banana", "mango", "grapes"]
console.log(arr)

for(const fruit of arr){
    console.log(fruit + " is a fruit.")
}

function timeinterval(){
    const interval = setInterval(()=>{
        console.log("namaste")
    },1000)
    return ()=>clearInterval(interval)
}

// for(let i = 0; i<10; i++){
//     timeinterval()
// }
// timeinterval()

class vehicle{
    constructor(name, model){
        this.name = name,
        this.model = model
    }
}

class car extends vehicle{
    constructor(name, model, color, variant){
        super(name, model)
        this.color = color
        this.variant = variant
    }
}

const truck = new vehicle("Ashok Leyland", 2234)
console.log(truck)

const verna = new car("Hyundai Verna","New model","Matte black","Sun roof variant")
console.log(verna)