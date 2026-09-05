// Function which can recieve or return a function

function Process(x){
    x(); // recieved x as arg
}

function greet(){
    console.log("Hello world")
}

Process(greet);

// returning a func // also a func factory
function mul(x){
    return function(y){
        return x*y;
    }
}

const multiply = mul(10)
console.log(multiply(30));


// func currying
function addition (a){
    return function(b){
        return function(c){
            return a+c+b;
        }
    }
}

console.log(addition(3)(4)(2))