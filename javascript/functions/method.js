//call() apply(), bind()
// let us control this behavior
function greet(greeting, punctuation){
    console.log(greeting, this.name, punctuation)
}

const user = {
    name: "Rohit"
}

// first argument after call → this
// remaining arguments       → function parameters
greet.call(user, "Hello", "!")



// call()
// → arguments separately
// apply()
// → arguments in an array
greet.apply(user, ["Good morning","!"])


//bind   → create function for LATER
//it binds this to the object permanently
const user2 = {
    name: "Lady Jarvis"
}
const greetUser = greet.bind(user2);
greetUser("Hello",".")
greetUser.call(user,"Hello",".") //bind wins

