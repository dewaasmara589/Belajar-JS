// Scope

// Global Scope
var globalVar = "global variable"

// Cara 1
console.log(globalVar)

// Cara 2 mengambil dari window atau global variable akan di masukkan ke window
console.log(window.globalVar)

const name = "John Doe"

// Local Scope

function myFunction() {
  const name = "wegodev"

  function insideFunc() {
    console.log(name)
  }

  insideFunc()
  // console.log(name)
}

myFunction()

// console.log(name) // Error karena tidak ada akases ke variable local