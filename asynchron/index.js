// http://latentflip.com/loupe/
// https://emojipedia.org/
const error = "💩";

////Call Stack
//function foo() {
//  throw new Error(error);
//}
//
//function bar() {
//  foo();
//}
//
//function baz() {
//  bar();
//}
//baz();

////blocking synchron
//let result = 0;
//
//for (let i = 0; i < 1000000000; i++) {
//  result += i;
//}
//console.log(result);
//console.log("hi");
//console.log("hi");
//console.log("hi");

////async loop
function handleLoop() {
  setTimeout(() => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    console.log(result);
  }, 0);
}
handleLoop();
console.log("hi!!!");
console.log("hi!!!");
console.log("hi!!!");

////callback asynchronously
setTimeout(function timeout() {
  console.log("Click the button!");
}, 5000);
//setTimeout(function timeout() {
//  console.log("Click the button!");
//}, 2000);
//
//console.log("Wetten das ich nicht warten muss?");

////synchron
//[1, 2, 3, 4].forEach(function () {
//  console.log("hey");
//});

////asynchronously
//function asyncForEach(array, cb) {
//  array.forEach(function () {
//    setTimeout(cb, 0);
//  });
//}
//
//asyncForEach([1, 2, 3, 4], function () {
//  console.log("hey");
//});
