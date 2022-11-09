// Array

const array = [2, 4, 6, 18, 19, "sting", "wegodev", true]

console.log(array[3])
console.log(array.length)  // Digunakan untuk melooping array

const kaliAngka = [1, 2, 3, 4, 5]

for (let i = 0; i < kaliAngka.length; i++) {
  kaliAngka[i] = kaliAngka[i]*2
}

console.log(kaliAngka)

kaliAngka[0] = "satu";

console.log(kaliAngka)