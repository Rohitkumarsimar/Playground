# Async JavaScript — Error Handling Under the Hood

## 1. `async` functions and errors

An `async` function always returns a Promise.

```js
async function getUser() {
    throw new Error("User not found");
}

getUser();
```

A `throw` inside an `async` function causes the Promise returned by that function to become **rejected**.

Mental model:

```text
getUser()
   ↓
returns Promise
   ↓
Promise becomes REJECTED
   ↓
Error becomes the rejection reason
```

So:

```js
const result = getUser();

console.log(result);
```

gives a **rejected Promise**, rather than directly throwing the error into the surrounding synchronous code.

---

## 2. What `await` does

Remember:

```js
getUser()
```

returns a Promise.

But:

```js
const user = await getUser();
```

does **not** store the Promise in `user`.

`await` waits for the Promise to settle and, when fulfilled, gives you its fulfillment value.

Mental model:

```text
getUser()
   ↓
Promise
   ↓
await
   ↓
actual value
```

Example:

```js
async function getUser() {
    return { name: "Rohit" };
}

const user = await getUser();

console.log(user);
// { name: "Rohit" }
```

Without `await`:

```js
const user = getUser();

console.log(user);
// Promise { ... }
```

---

## 3. Rejected Promise + `await`

If the Promise is rejected:

```js
try {
    const user = await getUser();
} catch (err) {
    console.log(err.message);
}
```

The rejection is treated like a throw at the `await` point.

Mental model:

```text
getUser()
   ↓
Rejected Promise
   ↓
await sees rejection
   ↓
acts like a throw at the await point
   ↓
try/catch catches it
```

Useful shortcut:

> **Rejected Promise + `await` → rejection is thrown at `await` → `catch` handles it.**

More precisely, the rejected Promise does not literally get "unpacked" into an error. `await` observes the rejection and causes the rejection reason to be thrown at the `await` point.

---

## 4. `.catch()` vs `try/catch`

### Promise `.catch()`

```js
getUser()
    .then(user => console.log(user))
    .catch(err => console.log(err));
```

Here, `.catch()` handles the **rejected Promise directly**.

Mental model:

```text
async function throws
        ↓
Promise rejects
        ↓
.catch() receives rejection
```

### `try/catch` with `await`

```js
try {
    const user = await getUser();
} catch (err) {
    console.log(err);
}
```

Mental model:

```text
async function throws
        ↓
Promise rejects
        ↓
await
        ↓
rejection becomes a throw at await
        ↓
try/catch
```

---

## 5. Core mental model

```text
getUser()
   ↓
returns Promise
   ↓
       ┌───────────────┐
       │               │
   fulfilled        rejected
       │               │
       ↓               ↓
     await           await
       │               │
       ↓               ↓
  extracts value    throws rejection reason
       │               │
       ↓               ↓
   variable          catch block
```

### One-line summary

> **`getUser()` returns a Promise. `await` waits for it; if fulfilled, it gives you the value, and if rejected, it throws the rejection reason at the `await` point so `catch` can handle it.**
