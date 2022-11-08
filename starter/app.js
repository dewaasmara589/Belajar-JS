// Functions

// Function Definition
// jika memanggil function ini sebelum dia dibuat maka tidak dapat dipanggil
const perpangkatan = function(n)  {
  return n*n
}

// Function Declaration
function pangkat(m) {
  return m*m
}

// Function undefined (side-effect)
// jika memanggil function ini sebelum dia dibuat maka akan tetap dijalankan
console.log(sayHello())


function sayHello() {
  alert('Hello!')
}

console.log(perpangkatan(2))
console.log(pangkat(4))

// Menampilkan isi atau value didalam variablenya
console.log(sayHello)

// ES6 Arrow Function dapat membuat sebuah funtion dalam 1 line saja
// Cara 1
// const perpangkatan2 = (k) => {
//   return k * k
// }

// Cara 2 Jika hanya 1 variable dan mengembalikan 1 value saja
const perpangkatan2 = k => k * k

console.log(perpangkatan2(5))

const projectTitle = document.querySelector("#project-title");
projectTitle.textContent = "Title Baru dari JS File"