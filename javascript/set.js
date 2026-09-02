/*
collection of unique elements
const set = new Set();

set.add(10);
set.add(20);
set.add(10);

set.has(10);     // true
set.delete(10);  // removes 10
set.size;        // 1
set.clear();     // removes everything
*/

//example: 
const set = new Set([1,2,2,2,2,3,4,5])
console.log(set)

const set2 = new Set()

set2.add(10)
set2.add(20)
set2.add(10)
console.log(set2)

console.log(set2.has(10))
set2.delete(10)
console.log(set2)
console.log(set2.size)
set2.clear()
console.log(set2)

const arr = [1,2,2,2,3,3,3,4,4,4,5,5,5]

const unique = [...new Set(arr)]
console.log(unique)


/*
Map: key value pairs, difference from object: can store any value
methods: 
const user = new Map();

user.set("name", "Rohit");
user.set("age", 25);

user.get("name");  // "Rohit"
user.has("age");   // true
user.delete("age");
user.size;         // 1
*/

const map = new Map();
map.set("Name", "Rohit")
map.set("Age",22)
map.set(true, "Fresher")
map.set("Name","Rohit") //duplicates are removed
console.log(map)

console.log(map.has("Age"))
const name = map.get("Name")
console.log(name)
map.delete(true)
console.log(map)
console.log(map.size)

//Weak set: store objects
const wk = new WeakSet();
const user = {name: "Jarvis"}
wk.add(user)
console.log(wk)

//weak map: keys must be object: 
const wm = new WeakMap()
wm.set(user,"Private data")
console.log(wm.get(user))