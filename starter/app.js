// Array

// Filter akan return array baru berdasarkan value yang diinginkan

const age = [25, 9, 10, 11, 15, 28, 30]

const filteredAge = age.filter(myFunction)

function myFunction(value) {
  return value >= 17
}

console.log(filteredAge)