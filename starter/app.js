// Functions

// Function Definition
const perpangkatan = function(n)  {
  return n*n
}

// Function Declaration
function pangkat(m) {
  return m*m
}

// Function undefined (side-effect)
function sayHello() {
  alert('Hello!')
}

console.log(perpangkatan(2))
console.log(pangkat(4))
console.log(sayHello())

// Menampilkan isi atau value didalam variablenya
console.log(sayHello)

const projectTitle = document.querySelector("#project-title");
projectTitle.textContent = "Title Baru dari JS File"