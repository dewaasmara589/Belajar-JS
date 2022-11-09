// Array

// Foreach

const animals2 = ["kucing", "beruang", "jerapah", "gajah", "harimau"]

animals2.forEach(myFunction)

function myFunction(value) {
  console.log(value)
  console.log(value + ' hidup')
}

// Map mereturn array baru

const numbers = [10, 20, 30, 40, 50]

const numbersMultiplied = numbers.map(multiply)

function multiply(value) {
  return value * 2;
}

console.log(numbersMultiplied)