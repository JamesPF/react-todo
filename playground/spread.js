// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['James', 'Yadi'];
// var groupB = ['Bob'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['James', 28];
var personTwo = ['Yadi', 2];

function greeter (name, age) {
  console.log("Hi " + name + ". You are " + age + ".");
}
greeter(...person);
greeter(...personTwo);

var name = ['Mike', 'Kim'];
var final = [...name, 'James'];

final.forEach(function (person) {
  console.log(person);
});
