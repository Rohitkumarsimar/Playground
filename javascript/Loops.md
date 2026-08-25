// ============================================================
// ASYNCHRONOUS JAVASCRIPT — PRACTICE FILE
// ============================================================

// ------------------------------------------------------------
// 1. Synchronous JavaScript
// ------------------------------------------------------------

console.log("1. Start");

console.log("2. Middle");

console.log("3. End");

// Output:
// 1. Start
// 2. Middle
// 3. End
//
// JavaScript executes these lines one after another.


// ------------------------------------------------------------
// 2. Asynchronous JavaScript with setTimeout()
// ------------------------------------------------------------

console.log("\n--- setTimeout example ---");

console.log("A");

setTimeout(() => {
    // This function will run later.
    console.log("B - Timer finished");
}, 2000);

console.log("C");

// Output:
// A
// C
// B - Timer finished
//
// Even though setTimeout() appears before console.log("C"),
// C is printed first.
//
// Why?
//
// setTimeout() starts a timer and JavaScript continues executing.
// After 2 seconds, the callback is allowed to run.


// ------------------------------------------------------------
// 3. Creating a Promise
// ------------------------------------------------------------

console.log("\n--- Promise example ---");

const myPromise = new Promise((resolve, reject) => {

    // Imagine this is some operation that takes time.
    setTimeout(() => {

        const success = true;

        if (success) {

            // resolve() means:
            // "The operation was successful."
            resolve("Data received successfully!");

        } else {

            // reject() means:
            // "Something went wrong."
            reject("Failed to get data.");

        }

    }, 2000);

});


// ------------------------------------------------------------
// 4. .then() and .catch()
// ------------------------------------------------------------

myPromise
    .then((result) => {

        // .then() runs when the Promise is fulfilled.
        //
        // "result" contains whatever we passed to resolve().
        //
        // In our case:
        // resolve("Data received successfully!");

        console.log("SUCCESS:", result);

    })
    .catch((error) => {

        // .catch() runs when the Promise is rejected.
        //
        // It receives whatever was passed to reject().

        console.log("ERROR:", error);

    });


// ------------------------------------------------------------
// 5. async function
// ------------------------------------------------------------

// Adding "async" means this function ALWAYS returns a Promise.

async function sayHello() {

    return "Hello from async function!";

}

// Even though we returned a normal string,
// sayHello() actually returns a Promise.

sayHello().then((message) => {

    console.log(message);

});


// ------------------------------------------------------------
// 6. await
// ------------------------------------------------------------

// await can only normally be used inside an async function.
//
// await means:
//
// "Wait for this Promise to settle,
// then give me its result."

async function getData() {

    console.log("\n--- async/await example ---");

    console.log("Starting data request...");

    // JavaScript waits for this Promise INSIDE this function.
    //
    // It does NOT freeze the entire JavaScript runtime.

    const result = await myPromise;

    // This line runs after myPromise is fulfilled.

    console.log("Result:", result);

}

getData();


// ------------------------------------------------------------
// 7. Error handling with try...catch
// ------------------------------------------------------------

async function getDataWithErrorHandling() {

    try {

        console.log("\n--- try/catch example ---");

        const result = await myPromise;

        console.log("Result:", result);

    } catch (error) {

        // If the Promise rejects,
        // execution jumps here.

        console.log("Something went wrong:", error);

    }

}

getDataWithErrorHandling();


// ------------------------------------------------------------
// 8. A more realistic example
// ------------------------------------------------------------

// Imagine this function is calling a backend API.

function getUser() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("\nUser request completed.");

            // Imagine this data came from a server.

            resolve({
                id: 101,
                name: "Rohit"
            });

        }, 2000);

    });

}


// Imagine this function gets posts using the user's ID.

function getPosts(userId) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("Posts request completed.");

            resolve([
                {
                    id: 1,
                    title: "Learning JavaScript"
                },
                {
                    id: 2,
                    title: "Learning Node.js"
                }
            ]);

        }, 2000);

    });

}


// ------------------------------------------------------------
// 9. Chaining asynchronous operations with async/await
// ------------------------------------------------------------

async function getUserAndPosts() {

    try {

        console.log("\n--- Realistic async example ---");

        console.log("Getting user...");

        // Wait for getUser() to finish.

        const user = await getUser();

        console.log("User:", user);


        // Now we have the user's ID.
        //
        // Therefore, we can request their posts.

        console.log("Getting posts...");

        const posts = await getPosts(user.id);

        console.log("Posts:", posts);


        console.log("Everything completed!");

    } catch (error) {

        console.log("Something went wrong:", error);

    }

}

getUserAndPosts();


// ------------------------------------------------------------
// 10. Promise chaining WITHOUT async/await
// ------------------------------------------------------------

// The same logic can be written using .then().

getUser()
    .then((user) => {

        console.log("\nUser received:", user);

        // IMPORTANT:
        //
        // We return the Promise from getPosts().
        //
        // This allows the next .then() to receive
        // the result of getPosts().

        return getPosts(user.id);

    })
    .then((posts) => {

        console.log("Posts received:", posts);

    })
    .catch((error) => {

        console.log("Error:", error);

    });


// ------------------------------------------------------------
// 11. Sequential execution
// ------------------------------------------------------------

// These two requests happen one after another.
//
// Total time ≈ 4 seconds
//
// getUser     → 2 seconds
// getPosts    → 2 seconds

async function sequentialExample() {

    console.log("\n--- Sequential example ---");

    const start = Date.now();

    const user = await getUser();

    const posts = await getPosts(user.id);

    console.log("User:", user);
    console.log("Posts:", posts);

    console.log(
        "Time taken:",
        (Date.now() - start) / 1000,
        "seconds"
    );

}


// ------------------------------------------------------------
// 12. Parallel execution with Promise.all()
// ------------------------------------------------------------

// Use Promise.all() when operations are independent.
//
// These requests start together.
//
// Total time ≈ 2 seconds instead of 4.
//
// IMPORTANT:
//
// Only use this when the operations don't depend on each other.

function getProducts() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve([
                "Laptop",
                "Keyboard",
                "Mouse"
            ]);

        }, 2000);

    });

}

function getOrders() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve([
                "Order #101",
                "Order #102"
            ]);

        }, 2000);

    });

}


async function parallelExample() {

    console.log("\n--- Promise.all() example ---");

    const start = Date.now();

    // All three functions start around the same time.

    const [user, products, orders] = await Promise.all([

        getUser(),
        getProducts(),
        getOrders()

    ]);

    console.log("User:", user);

    console.log("Products:", products);

    console.log("Orders:", orders);

    console.log(
        "Time taken:",
        (Date.now() - start) / 1000,
        "seconds"
    );

}


// Run the parallel example.

parallelExample();


// ============================================================
// FINAL MENTAL MODEL
// ============================================================
//
//
//
//     Start asynchronous operation
//                 |
//                 v
//              Promise
//                 |
//          ┌──────┴──────┐
//          |             |
//       Success        Failure
//          |             |
//       resolve()      reject()
//          |             |
//          v             v
//       .then()       .catch()
//          |
//          |
//          +---- OR ----+
//                       |
//                     await
//                       |
//                       v
//                    Result
//
//
// async/await is basically a cleaner way of working
// with Promises.
//
// Remember:
//
// Promise = "I'll give you the result later."
//
// resolve() = "It worked."
//
// reject() = "It failed."
//
// .then() = "When it works, do this."
//
// .catch() = "If it fails, do this."
//
// async = "This function works with Promises."
//
// await = "Wait for this Promise inside this function."
//
// Promise.all() = "Run independent Promises together
//                 and wait for all of them."
//
// ============================================================
