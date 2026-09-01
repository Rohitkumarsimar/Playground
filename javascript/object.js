//object property shorthand
const name = "Rohit"
const age = 22

const user = {
    name,
    age
}

console.log(user)

// computed result
const key = "name"
const id = 101
const user2 = {
    [key + id] : "Rohit"
}
console.log(user2)

// Object.keys(): Takes an object and returns an array containing all its enumerable string property keys.
console.log(Object.keys(user))

//Object.values(): returs array of values
console.log(Object.values(user))

//entries() gives us arrays of [key, value] pairs.
console.log(Object.entries(user))
for(const [ key, value] of Object.entries(user)){
    console.log("Key: ", key, " value: ",value)
}

//object method: are the function inside objects

const method = {
    name: "Jarvis",
    greet(){
        console.log(`Hi ${this.name}`)
    },

    bye(){
       let saybye =  ()=>{
            console.log("Bye ", this.name)
        }
        saybye() //can access this through its lexical scope
    },

    morning: ()=>{
        console.log("good morning", this.name)
    }// cannot access this
}

console.log(method.greet)
method.greet();
method.bye();
// method.morning();
const fn = method.greet;
// fn(); //cannot use this

const fn2 = method.bye;
// fn2();

//this is determined by how it is called.
