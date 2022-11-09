/*
// Hoisting Variables

x = 10  // assigning variable x
y = 50  // assigning variable y

console.log(x)
console.log(y)  // nilai insialisasinya tidak ikut di hoisting

// menggunakan var otomatis akan hoisting atau berada paling atas atau global scope
var x;  // variable declaration

var y = 20;  // variable inisilitation

// let x; // hasilnya akan error

*/

// Hoasting function

console.log(myFunction())  // invoke function
console.log(myFunctionExp())  // error jika invoke function
console.log(myFunctionExp)  // undefined karena sama seperti variable sebelumnya nilainya tidak dibawa saat hoisting

// function declaration
function myFunction() {
  console.log("hello hoisting")
}

// function expression atau definition
var myFunctionExp = function() {
  console.log("hello hoisting")
}