const greetUser = {
    greet(name){
            console.log("Hello",name)
    }
}



const user =Object.create(greetUser)

// user.greet = function(name){
//     console.log("hello",name)
// }

console.log(Object.getPrototypeOf(user))
user.greet("Rohit")

console.log(Object.getPrototypeOf(user)===Object.prototype)
console.log(Object.getPrototypeOf(Object.prototype))
console.log(Object.getPrototypeOf(Object.prototype)===null)

console.log(user.toString())


function Person(name){
    this.name = name;
}
console.log(Person.prototype)
Person.prototype.greet = function(){
    console.log("Hellooooo")
}

const user2 = new Person("Jarvis")
user2.greet()
console.log(user2)
console.log(user2.prototype)


