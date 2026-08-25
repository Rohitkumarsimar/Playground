const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(" User data received.");
  }, 2000);
})
  .then((callback) => callback)
  .then((value) => console.log("Value: ", value))
  .catch((err) => console.log("error: ", err));

console.log("Program continues...");
