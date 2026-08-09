JavaScript Asynchronous Programming
1. What does "Asynchronous" mean?
In simple words:
Asynchronous code allows JavaScript to start a task and continue doing other work instead of waiting for that task to finish.
Imagine ordering food at a restaurant.
Synchronous
You:
Order food.
Stand in front of the kitchen.
Wait until the food is ready.
Only then do something else.
orderFood();
waitForFood();
eatFood();
Everything happens one after another.
Asynchronous
You:
Order food.
Get a token.
Sit down.
Talk to your friend.
When the food is ready, you get notified.
Eat food.
orderFood();

talkToFriend();

eatFoodWhenReady();
You don't have to sit there blocking everything while the food is being prepared.
That's the basic idea behind asynchronous programming.
2. Why do we need asynchronous JavaScript?
Some operations take time.
For example:
Fetching data from an API
Reading a file
Database queries
Sending an HTTP request
Waiting for a timer
Uploading a file
Imagine this:
const data = fetchDataFromServer();

console.log(data);
The server might take 2 seconds to respond.
If JavaScript completely stopped during those 2 seconds, the application would feel frozen.
Instead, JavaScript can start the operation and continue doing other work.
3. JavaScript is Single-Threaded
JavaScript normally executes your code using a single main thread.
Think of it as:
JavaScript
    |
    v
One worker
That worker executes one piece of JavaScript at a time.
For example:
console.log("A");
console.log("B");
console.log("C");
Output:
A
B
C
But JavaScript can still handle asynchronous operations.
How?
The JavaScript runtime provides mechanisms such as:
Web APIs in the browser
Node.js APIs
Callback Queue
Microtask Queue
Event Loop
4. A simple asynchronous example
console.log("Start");

setTimeout(() => {
    console.log("Timer finished");
}, 2000);

console.log("End");
Output:
Start
End
Timer finished
You might ask:
Why did End print before Timer finished?
Because setTimeout() doesn't block JavaScript.
It basically says:
"Start this timer. When the timer is finished, run this function."
JavaScript continues executing the next line.
5. Callback
A callback is simply a function passed to another function.
Example:
function greet(name, callback) {
    console.log("Hello " + name);

    callback();
}

function sayBye() {
    console.log("Goodbye");
}

greet("Rohit", sayBye);
Output:
Hello Rohit
Goodbye
Here:
sayBye
is passed as an argument.
Therefore, sayBye is a callback.
Asynchronous callback example
console.log("Start");

setTimeout(() => {
    console.log("Task completed");
}, 2000);

console.log("End");
The function:
() => {
    console.log("Task completed");
}
is a callback.
It will be executed later.
6. The problem with callbacks
Imagine you have three operations.
First:
Get user
Then:
Get user's posts
Then:
Get comments
Using callbacks:
getUser(userId, (user) => {

    getPosts(user.id, (posts) => {

        getComments(posts[0].id, (comments) => {

            console.log(comments);

        });

    });

});
This can become deeply nested.
It is often called:
Callback Hell
Example:
getUser()
   |
   └── getPosts()
          |
          └── getComments()
                 |
                 └── getLikes()
                        |
                        └── getReplies()
Promises were introduced to make asynchronous code easier to manage.
7. What is a Promise?
A Promise is an object representing the eventual result of an asynchronous operation.
In simple language:
A Promise is a box that says: "I don't have the result right now, but I will give you the result later."
For example:
const promise = fetch("/users");
The request hasn't necessarily finished yet.
But you have a Promise representing that future result.
8. Promise States
A Promise has three important states.
Promise
                |
        -----------------
        |       |       |
     Pending Fulfilled Rejected
1. Pending
The operation is still running.
⏳ Waiting...
2. Fulfilled
The operation succeeded.
✅ Success
3. Rejected
The operation failed.
❌ Error
Once a Promise becomes fulfilled or rejected, it is settled.
9. Creating a Promise
const promise = new Promise((resolve, reject) => {

    // asynchronous operation

});
A Promise receives a function called the executor.
The executor receives two functions:
resolve
reject
Example:
const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }

});
10. What is resolve?
resolve() means:
"The operation succeeded."
Example:
resolve("Data received");
The Promise becomes:
Pending
   |
   v
Fulfilled
11. What is reject?
reject() means:
"The operation failed."
Example:
reject("Something went wrong");
The Promise becomes:
Pending
   |
   v
Rejected
12. Using .then()
.then() is used to handle a successful Promise.
Example:
const promise = Promise.resolve("Hello");

promise.then((result) => {
    console.log(result);
});
Output:
Hello
In simple language:
Promise finishes successfully
            |
            v
        .then()
            |
            v
      Run this function
13. What exactly is .then()?
Suppose:
fetchUser()
returns a Promise.
You can say:
fetchUser().then((user) => {
    console.log(user);
});
You're basically saying:
"When fetchUser() succeeds, give me the result and run this function."
14. .catch()
.catch() handles a rejected Promise.
fetchUser()
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    });
Think of it like:
Promise
                |
        -----------------
        |               |
      Success          Error
        |               |
     .then()         .catch()
15. .finally()
.finally() runs whether the Promise succeeds or fails.
fetchUser()
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finished");
    });
So:
Success ─────┐
             ├──> finally()
Error ───────┘
This is useful for things like hiding a loading spinner.
16. Promise Chaining
One of the most useful features of Promises is chaining.
getUser()
    .then((user) => {
        return getPosts(user.id);
    })
    .then((posts) => {
        return getComments(posts[0].id);
    })
    .then((comments) => {
        console.log(comments);
    })
    .catch((error) => {
        console.log(error);
    });
The flow is:
getUser()
    |
    v
.then(user)
    |
    v
getPosts()
    |
    v
.then(posts)
    |
    v
getComments()
    |
    v
.then(comments)
    |
    v
catch(error)
17. Why does return matter in Promise chains?
Consider:
getUser()
    .then((user) => {
        return getPosts(user.id);
    })
    .then((posts) => {
        console.log(posts);
    });
The important part is:
return getPosts(user.id);
Because you're returning the Promise from getPosts().
Therefore the next .then() waits for it.
Without returning it:
getUser()
    .then((user) => {
        getPosts(user.id);
    })
    .then((posts) => {
        console.log(posts);
    });
The next .then() doesn't receive the result of getPosts().
18. async
async is a keyword used before a function.
async function getData() {

}
An async function always returns a Promise.
Example:
async function greet() {
    return "Hello";
}
Even though we returned a normal string:
"Hello"
the function actually returns:
Promise<string>
You can use:
greet().then((message) => {
    console.log(message);
});
Output:
Hello
19. await
await is used to wait for a Promise inside an async function.
Example:
async function getData() {

    const response = await fetch("/users");

    console.log(response);

}
In simple language:
Start fetch
    |
    v
Wait for Promise
    |
    v
Promise finishes
    |
    v
Store result in response
20. Why use async/await?
Compare this:
Promise syntax
getUser()
    .then((user) => {
        return getPosts(user.id);
    })
    .then((posts) => {
        return getComments(posts[0].id);
    })
    .then((comments) => {
        console.log(comments);
    })
    .catch((error) => {
        console.log(error);
    });
With:
async/await
async function getData() {

    try {

        const user = await getUser();

        const posts = await getPosts(user.id);

        const comments = await getComments(posts[0].id);

        console.log(comments);

    } catch (error) {

        console.log(error);

    }

}
async/await usually looks more like normal synchronous code.
That's why developers often prefer it.
21. Important: Does await block JavaScript?
This is a common misunderstanding.
Consider:
async function getData() {

    const data = await fetch("/users");

    console.log(data);

}
await pauses the async function's execution until the Promise settles.
It does not freeze the entire JavaScript runtime.
Other work can continue.
Think:
async function
      |
      v
    await
      |
      |  Promise running...
      |
      |----------------------+
                             |
Other JavaScript work       |
can continue                 |
                             |
                             v
                      Promise finishes
                             |
                             v
                      async function
                         continues
22. try...catch with async/await
The normal way to handle errors:
async function getUser() {

    try {

        const response = await fetch("/users");

        console.log(response);

    } catch (error) {

        console.log("Something went wrong:", error);

    }

}
If the Promise rejects:
await fetch(...)
throws an error.
The catch block handles it.
23. Real API Example
Suppose your backend has:
GET /api/users
You can write:
async function getUsers() {

    try {

        const response = await fetch("/api/users");

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Failed to fetch users:", error);

    }

}
Call it:
getUsers();
The flow:
getUsers()
    |
    v
fetch("/api/users")
    |
    v
HTTP request
    |
    v
Server processes request
    |
    v
Response received
    |
    v
response.json()
    |
    v
JavaScript object
    |
    v
console.log(data)
24. Promise + async/await relationship
These are not two completely different asynchronous systems.
async/await is built on top of Promises.
Think:
Promise
                |
        -----------------
        |               |
      .then()        async/await
Both work with Promises.
25. return inside async function
Example:
async function getName() {

    return "Rohit";

}
The result is wrapped in a Promise.
Conceptually:
Promise.resolve("Rohit");
So:
getName().then((name) => {
    console.log(name);
});
prints:
Rohit
26. throw inside async function
You can throw an error:
async function test() {

    throw new Error("Something went wrong");

}
The Promise becomes rejected.
You can catch it:
test()
    .catch((error) => {
        console.log(error.message);
    });
Output:
Something went wrong
27. Sequential vs Parallel Requests
This is extremely important.
Suppose you have two independent API requests:
const users = await getUsers();

const products = await getProducts();
They happen sequentially.
getUsers()
   |
   v
wait
   |
   v
getProducts()
   |
   v
wait
If they don't depend on each other, this is unnecessarily slow.
Instead:
const [users, products] = await Promise.all([
    getUsers(),
    getProducts()
]);
Now they can run concurrently.
┌──> getUsers() ───┐
             |                  |
Promise.all ─┤                  ├──> Results
             |                  |
             └──> getProducts() ┘
28. Promise.all()
Promise.all() waits for multiple Promises.
const results = await Promise.all([
    getUsers(),
    getProducts(),
    getOrders()
]);
The result:
[
    users,
    products,
    orders
]
Important:
If one Promise rejects, Promise.all() rejects.
Example:
try {

    const [users, products] = await Promise.all([
        getUsers(),
        getProducts()
    ]);

} catch (error) {

    console.log(error);

}
29. The Event Loop
Now we get to the important part.
JavaScript uses an event loop to coordinate asynchronous operations.
A simplified model:
JavaScript
                  |
                  v
             Call Stack
                  |
                  v
          Web APIs / Node APIs
                  |
                  v
          Callback / Task Queue
                  |
                  v
             Event Loop
                  |
                  +---------> Call Stack
30. Call Stack
The Call Stack keeps track of currently executing JavaScript functions.
Example:
function one() {
    two();
}

function two() {
    console.log("Hello");
}

one();
Conceptually:
Call Stack

console.log()
two()
one()
--------
Functions are added and removed from the stack as they execute.
31. Event Loop Example
Consider:
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3");
Output:
1
3
2
Why?
Because setTimeout() is asynchronous.
Even with:
0
milliseconds, its callback doesn't immediately jump onto the Call Stack.
32. Flow of setTimeout
console.log("1")
       |
       v
   Call Stack
       |
       v
prints 1


setTimeout()
       |
       v
   Web API
       |
       v
    Timer
       |
       v
Callback Queue
       |
       v
   Event Loop
       |
       v
   Call Stack
       |
       v
prints 2
Meanwhile:
console.log("3");
can execute before the timer callback.
33. Microtask Queue
Promises use the Microtask Queue.
For example:
console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

console.log("C");
Output:
A
C
B
The Promise callback is placed into the Microtask Queue.
34. Microtasks vs Tasks
A simplified priority model:
Call Stack
    |
    v
Execute current JavaScript
    |
    v
Microtask Queue
    |
    v
Task / Callback Queue
Promise callbacks generally run before timer callbacks when both are ready.
Example:
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
Output:
A
D
C
B
Why?
A
|
D
|
C  <- Promise microtask
|
B  <- timer task
35. Complete Simplified Flowchart
JavaScript Code
                       |
                       v
                 ┌─────────────┐
                 │ Call Stack  │
                 └──────┬──────┘
                        |
                Is operation
                asynchronous?
                  /          \
                No            Yes
                |              |
                v              v
           Execute        Web API /
           immediately    Node API
                               |
                               v
                         Operation runs
                               |
                    ┌──────────┴──────────┐
                    |                     |
                 Promise              Timer /
                 callback             I/O callback
                    |                     |
                    v                     v
             Microtask Queue        Task Queue
                    |                     |
                    └──────────┬──────────┘
                               |
                               v
                          Event Loop
                               |
                               v
                         Call Stack
                               |
                               v
                           Execute
36. The Most Important Keywords
Keyword
Meaning
Promise
Represents a future result
resolve()
Promise succeeded
reject()
Promise failed
.then()
Handle successful result
.catch()
Handle error
.finally()
Run after success or failure
async
Makes a function return a Promise
await
Wait for a Promise inside an async function
try
Code where an error might occur
catch
Handles the error
Promise.all()
Wait for multiple Promises
37. Simple Mental Model
Remember this:
ASYNCHRONOUS OPERATION
                    |
                    v
                 Promise
                    |
             ┌──────┴──────┐
             |             |
          Success         Error
             |             |
          .then()       .catch()
             |
             v
           Result
With async/await:
ASYNCHRONOUS OPERATION
                    |
                    v
                 Promise
                    |
                  await
                    |
                    v
                 Result
38. Promise vs async/await
Promise style
fetchUser()
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    });
async/await style
async function main() {

    try {

        const user = await fetchUser();

        console.log(user);

    } catch (error) {

        console.log(error);

    }

}
Both are using Promises.
The second syntax is usually easier to read when you have multiple asynchronous operations.
39. Final Mental Picture
Think of asynchronous JavaScript like this:
JavaScript
                      |
                      v
               Start an operation
                      |
                      v
                  Promise
                      |
             "I'll give you
              the result later"
                      |
          ┌───────────┴───────────┐
          |                       |
       Success                  Failure
          |                       |
       resolve                 reject
          |                       |
       .then()                .catch()
          |                       |
          └───────────┬───────────┘
                      |
                      v
                    Done
And remember the most important idea:
Asynchronous JavaScript does not mean JavaScript is doing multiple pieces of JavaScript simultaneously on the same thread. It means JavaScript can start operations that finish later and continue executing other work while waiting.
40. One Final Example
async function getUserData() {

    try {

        console.log("Fetching user...");

        const user = await getUser();

        console.log("User received:", user);

        const posts = await getPosts(user.id);

        console.log("Posts received:", posts);

    } catch (error) {

        console.log("Something went wrong:", error);

    } finally {

        console.log("Request finished");

    }

}

getUserData();
The mental execution is:
getUserData()
      |
      v
getUser()
      |
      v
    await
      |
      |------ JavaScript can do other work
      |
      v
User received
      |
      v
getPosts()
      |
      v
    await
      |
      |------ JavaScript can do other work
      |
      v
Posts received
      |
      v
finally
      |
      v
   Finished
If you understand this flow, you've got the foundation of asynchronous JavaScript.
