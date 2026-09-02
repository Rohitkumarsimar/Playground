/*
**Prototype** is an object used to share properties/methods through inheritance. Every normal object has an internal `[[Prototype]]` link to another object. `Object.getPrototypeOf(obj)` lets us inspect that link. Constructor functions have a `.prototype` property, which is an object where shared methods can be placed. When `new Person()` creates an instance, its `[[Prototype]]` is connected to `Person.prototype`. If a property isn't found on the object, JavaScript searches its prototype, then continues up the **prototype chain** until `null`. `Object.prototype` is the common ancestor of ordinary objects. `[[Prototype]]` = inheritance link; `.prototype` = constructor's prototype object.

*/

// const greetUser = {
//     greet(name){
//             console.log("Hello",name)
//     }
// }

// const user =Object.create(greetUser)

// // user.greet = function(name){
// //     console.log("hello",name)
// // }

// console.log(Object.getPrototypeOf(user))
// user.greet("Rohit")

// console.log(Object.getPrototypeOf(user)===Object.prototype)
// console.log(Object.getPrototypeOf(Object.prototype))
// console.log(Object.getPrototypeOf(Object.prototype)===null)

// console.log(user.toString())

// function Person(name){
//     this.name = name;
// }
// console.log(Person.prototype)
// Person.prototype.greet = function(){
//     console.log("Hellooooo")
// }

// const user2 = new Person("Jarvis")
// user2.greet()
// console.log(user2)
// console.log(user2.prototype)

const obj = {
  name: "Rohit",
};

const p = {
  run: () => {
    console.log("Alert");
  },
};

obj.__proto__ = p;

obj.run();
