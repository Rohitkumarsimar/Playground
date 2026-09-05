Alright, **concurrency control**. 😎

Imagine you have:

```js
const urls = [/* 1000 URLs */];

await Promise.all(urls.map(url => fetch(url)));
```

This *can* start **1,000 requests at once**. That's often a terrible idea. 💀

### The problem

We want:

> “Run multiple operations concurrently, but only **N at a time**.”

For example, max **3 concurrent requests**:

```text
Request 1 ───────✓
Request 2 ──────✓
Request 3 ─────────✓
                 ↓
Request 4 starts ─────✓
Request 5 starts ────✓
Request 6 starts ──────✓
```

So we're controlling **how many async operations are in flight simultaneously**.

### Why would we need this?

Imagine processing 10,000 files:

```js
files.map(file => processFile(file))
```

Starting all 10,000 simultaneously could:

* overload your server
* overwhelm a database/API
* consume too many resources
* trigger rate limits

Instead:

```text
10,000 jobs
    ↓
Queue
    ↓
3 running at a time
    ↓
when one finishes → start next
```

### 🧠 Important distinction

```text
Promise.all()
→ "Start all these together and wait for all."

Concurrency control
→ "Start several together, but limit how many are running."
```

You don't need to memorize a fancy implementation yet.

The **concept** is the important part.

And this is actually a nice stepping stone toward things you'll encounter in backend development: **connection pools, API rate limits, worker pools, job queues**, etc. 🔥



😂 **Exactly! Temple queue is a perfect analogy.**

Let's actually write a simple concurrency limiter rather than hiding it behind a library.

Suppose:

```js
const tasks = [
    () => fetchData(1),
    () => fetchData(2),
    () => fetchData(3),
    () => fetchData(4),
    () => fetchData(5),
];
```

We want **maximum 3 running at once**.

```js
async function runWithLimit(tasks, limit) {
    const results = [];
    let nextTask = 0;

    async function worker() {
        while (nextTask < tasks.length) {
            const current = nextTask++;
            results[current] = await tasks[current]();
        }
    }

    const workers = [];

    for (let i = 0; i < limit; i++) {
        workers.push(worker());
    }

    await Promise.all(workers);

    return results;
}
```

Use it:

```js
const results = await runWithLimit(tasks, 3);
```

### What's happening?

We create **3 workers**:

```text
Worker 1 → Task 1 → finishes → Task 4
Worker 2 → Task 2 → finishes → Task 5
Worker 3 → Task 3 → finishes → Task 6...
```

So the temple has:

```text
              TEMPLE
        ┌─────────────────┐
        │ 👤 👤 👤        │ ← max 3 inside
        └─────────────────┘
             ↑
             │ one leaves
             │
        next person enters
```

The important line is:

```js
const current = nextTask++;
```

Each worker grabs the **next available task**, and:

```js
await tasks[current]();
```

means that worker waits for its person to leave before taking another person.

### One important thing

This is a **conceptual implementation**. In real projects, you'd often use a concurrency-limiting library rather than reinventing it.

But I want you to understand this pattern because you'll encounter the same idea in:

**API requests → database connections → file processing → job queues → worker pools.**

That's concurrency control. 🔥
