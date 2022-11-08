// Conditional Execution

let yourYearOfBirth = Number(prompt("Kapan tahun lahirmu ?"))

// Ini adalah sebuah statement
// Digunakan jika ada lebih dari 2 percabangan
if (2020 - yourYearOfBirth < 17){
  alert("Kamu maish kecil")
} else {
  alert("Kamu sudah tua")
}

// Ternary Operator

// Ini adalah sebuah expression dan dapat di embed
// Digunakan saat ada 2 percabangan saja
2020 - yourYearOfBirth < 17 ? alert("Kamu maish kecil") : alert("Kamu sudah tua")



const projectTitle = document.querySelector("#project-title");
projectTitle.textContent = "Title Baru dari JS File"