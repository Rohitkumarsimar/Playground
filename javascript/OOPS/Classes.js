//class and objects

class Person{
    constructor(name){
        this._name = name
    }
    greet(){
        console.log("Hello", this._name)
    }

    get name (){
        return this._name
    }

    set name(name){
        this._name = name
    }
}

const p1 = new Person("Rohit Kumar")
const p2 = new Person("Jarvis")


console.log(p2.name)
p2.name = "Rohit boss"
console.log(p2.name)
// console.log(p1.name)
// p1.greet();

class Student extends Person{
    #roll=18;
    constructor(name, id, roll){
        super(name)
        this.id = id;
        this.#roll = roll
    }

    greet(){ // function overriding
        super.greet() //calling base function using super
        console.log("Hello, i am a student")
    }

    
}

const s1 = new Student("Rohit", 112233,23)
s1.greet()


class Add{
    static add(a,b){
        return a+b
    }
}

console.log(Add.add(33,23))

// console.log(s1.#roll)
