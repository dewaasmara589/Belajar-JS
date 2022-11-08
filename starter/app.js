// Conditional Execution

let yourYearOfBirth = Number(prompt("Kapan tahun lahirmu ?"))

// if (2020 - yourYearOfBirth < 17){
//   alert("Kamu belum cukup umur, karena di bawah 17 tahun")
// } else {
//   alert("Kamu sudah cukup umur")
// }

if (2020 - yourYearOfBirth < 17){
  alert("Kamu masih kecil")
} else if (2020 - yourYearOf > 17 &&  2020 - yourYearOf > 40) {
  alert("Kamu sudah dewasa")
} else if (2020 - yourYearOf > 40) {
  alert("Kamu sudah tua")
}else {
  alert("Tidak Jelas")
}

const projectTitle = document.querySelector("#project-title");
projectTitle.textContent = "Title Baru dari JS File"