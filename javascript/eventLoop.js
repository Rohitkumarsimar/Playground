console.log("1"); //1

//
setTimeout(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");
  });

//   process.nextTick(() => {
//     console.log("4");
//   });
}, 0);

Promise.resolve().then(() => {
  console.log("5");

  setTimeout(() => {
    console.log("6");
  }, 0);

  Promise.resolve().then(() => {
    console.log("7");
  });
});

// process.nextTick(() => {
//   console.log("8");

//   Promise.resolve().then(() => {
//     console.log("9");
//   });

//   process.nextTick(() => {
//     console.log("10");
//   });
// });

setTimeout(() => {
  console.log("11");
}, 0);

console.log("12"); //2



// /*
// Node api:
// Task queue: 2,6,11
// Micro task: 3,5,7,9
// process.tick: 4,8,10
// */




// console.log("A");

// setTimeout(() => {
//     console.log("B");

//     Promise.resolve().then(() => {
//         console.log("C");
//     });

//     Promise.resolve().then(() => {
//         console.log("D");
//     });
// }, 0);

// Promise.resolve().then(() => {
//     console.log("E");

//     setTimeout(() => {
//         console.log("F");
//     }, 0);

//     Promise.resolve().then(() => {
//         console.log("G");
//     });
// });

// setTimeout(() => {
//     console.log("H");

//     Promise.resolve().then(() => {
//         console.log("I");
//     });
// }, 0);

// console.log("J");


// /*
// A
// J
// E
// G

// */