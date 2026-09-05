😂😂 Fair reaction. The name **“sequential vs concurrent async execution”** sounds way more complicated than it is.

You already know the idea:

### Sequential

```js
const user = await getUser();
const posts = await getPosts();
```

Means:

```text
getUser starts
    ↓
wait
    ↓
getUser finishes
    ↓
getPosts starts
    ↓
wait
    ↓
getPosts finishes
```

### Concurrent

```js
const userPromise = getUser();
const postsPromise = getPosts();

const user = await userPromise;
const posts = await postsPromise;
```

Now:

```text
getUser starts   ─────────→
getPosts starts  ─────────→
                     ↓
                both finish
```

The **important shit** is this:

```js
const user = await getUser();
const posts = await getPosts();
```

Even though both functions are async, you're **waiting before starting the second one**.

Whereas:

```js
const userPromise = getUser();
const postsPromise = getPosts();
```

starts **both operations first**, and then you wait for their results.

So the rule is:

> **Don't `await` independent operations one after another if you want them to run concurrently. Start them first, then await their results.**

That's basically the whole concept. 😎

And this is why `Promise.all()` is so handy:

```js
const [user, posts] = await Promise.all([
    getUser(),
    getPosts()
]);
```

Both start, and you wait for both.
