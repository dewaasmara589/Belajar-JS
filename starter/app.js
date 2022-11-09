// Array

// Slice hanya mengambil dan membuat sebuah copy sehingga tidak mengubah array originalnya

const animals = ["kucing", "beruang", "jerapah", "gajah", "harimau"]

let hewanYangDiTangkap = animals.slice(1, 3)

let hewanSisa = animals.slice(2)

console.log(animals)

console.log(hewanYangDiTangkap)

console.log(hewanSisa)

// Splice mengubah sebuah konten yang menghapus dan menggantinya original array

const animals2 = ["kucing", "beruang", "jerapah", "gajah", "harimau"]

animals2.splice(2, 1, "Buaya")

console.log(animals2)

// Jika hanya ingin menghapus
animals2.splice(1, 3)

console.log(animals2)