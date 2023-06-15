//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Long Promise resolved")
    },6000)})

// Promesa corta
const shortPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Short Promise resolved")
    },3000)})

//Console log before calling the promise
console.log("Before calling long promise");
//Call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage);
  })
//Console log after calling the promise
  console.log("After calling long promise");
// Call the short promise
shortPromise.then( successMessage => {
    console.log(`From Callback Short - ${successMessage}`);
})