// Grammer instruction

// Variable
var a;
console.log(a); // print undefined
a = 1;
console.log(a); // print 1

// (condition) ? expr1 : expr2
n = 20
var even = (n % 2 === 0) ? true : false;
console.log(even);

// Array

// Anything can be put into an array

var arr = [
  {a: 1},
  [1, 2, 3],
  function() {return true;}
];
// The number will be automatically changed to the number.
console.log(arr['0']);
console.log(arr[2]);

// The type of the array is OBJECT!
console.log(typeof(arr));

// Length
console.log(arr.length);

// array-like object.
var obj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 20
};

obj[0] // 'a'
obj[2] // 'c'
// This object's length is no longer the array's length.
console.log(obj.length); // 20

// The way to traverse all elements in array
var a = [1, 2, 3];

for (var i in a) {
  console.log(a[i]);
}
// 1
// 2
// 3

// the way to traverse all keys in array.
var a = [1, 2, 3];
a['foo'] = true;
// Or you can write a.foo = true

for (var key in a) {
  console.log(key);
}
// 0
// 1
// 2
// foo


// Function
function f() {
  console.log(1);
}
f() // 2

function f() {
  console.log(2);
}
f() // 2
 
p = 1;
console.log(window.p);
