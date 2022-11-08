/*----------------------------------------------------------------

// Mengubah class heading-title
const heading = document.querySelector(".heading-title");

heading.innerHTML = "Test edit dari app.js"
*/

/*----------------------------------------------------------------
// DOM API - mengubah file html dari javascript dengan dipasing menjadi sebuah object
const projectTitle = document.querySelector("#project-title");

// mengubah objectnya
projectTitle.textContent = "Title Baru dari JS File";


// Penulisan di JS menggunakan acuan w3school
// untuk spaces lebih baik digunakan 2 spasi saja, jika tab akan menghasilkan 4 spasi
// Setting di vscode di menu bawah ada spaces:4 diganti dnegan spaces:2
// Penulisan variable dengan camel case dan huruf kecil saja untuk nama file

/*----------------------------------------------------------------
// Variable or Binding
var numberA = 100;

var numberB = numberA + 50;

console.log.numberB(numberB);

const projectTitle = document.querySelector('#project-title');
projectTitle.textContent = "Title Baru dari JS File";
*/

/*----------------------------------------------------------------
// Scope dan Hoisting
console.log(name); // Muncul di console padahal balam di declare
console.log(foo); // hasilnya : undefined

// Dikarena menggunakan Var

var name = "wegodev"

var foo = "bar";

console.log(name2); // Hasilnya : error

// Kelebihan dari let

let name2 = "WEGODEV";

// Scope akan terlihat jika menggunakan for

for (var i = 0; i < 10; i++) {
  console.log("helo")
}
console.log(i); //maka akan tercetak 10

for (var x = 0; x < 10; x++) {
  console.log("helo")
}
console.log(x); //maka akan error

// var = scope global dan hanya dapat diakses di dalam functional scope
*/

/*----------------------------------------------------------------
let name = "wegodev";

var foo = "bar";

const bar = "foo";

// hosting const dan let memiliki kesamaan

for (const k = 0; k < 10; k++) {
  console.log("hello " + k);
}
console.log(i);  // const nilainya tetap tidak bisa ditambahkan

function foo() {
  const fooVar = 'bar';

  console.log("di dalam func " + fooVar);

  return fooVar;
}

foo();

console.log(fooVar);
*/

/*----------------------------------------------------------------
// scope const dan let memiliki kesamaan berbedanya adalah
const firstName = "Budi";

firstName = "Udin";  // isi variable const tidak dapat diganti maka error

const count = 0;

count++;

console.log(count);

console.log(firstName);

// Pada Modern JavaScript
// dapat menghindari penggunaan var
// jika ingin memberikan penegasan value tersebut tidak perlu dan tidak akan di ubah maka menggunakan const
// jika ingin yang dapat diubah-ubah lebih baik digunakan let saja
*/

/*----------------------------------------------------------------

~~ NUMBER VALUE ~~

let number = 2020;
let numberFrictional = 20.98;

let veryBigNumber = 1.889E8; //188.900.000

// Spesial Number
let specialNumber = infinity;  // positif infinity

let specialNumber2 = -infinity;  // negative infinity
let specialNumber3 = NaN; // not a number

0/0 hasilnya adalah NaN  // untuk mengetes data hasil dari database atau API
dengan memastikan numbernya yang di konversi yaitu numbernya tidak mengembalikan NuN (Angka Valid)

Infinity - Infinity hasilnya adalah NaN
"Five" - 0;

console.log(typeof specialNumber3);

~~ STRING VALUE ~~

// Penulisan string yang valid di js
let string1 = "Ini adalah String";
let string2 = 'Ini adalah String';
let string3 = `Ini adalah String`;  // backtips sebelah angka 1 di keyboard 

// dengan backtips kita dapat menambahkan spasi tanpa menambahkan \n
let multilineString = `Ini adalah paragraph 1
Dan ini adalah paragraph 2`

// concat dengan backtips
let firstName = "Bambang";
let lastName = "Pamungkas";
let tambahAngka = 10;

let namaLengkap = `${firstName} ${lastName} {tambahAngka}`

// Type Conversion atau Coercion

console.log("100" - 50); // hasilnya adalah 50
console.log("100" + 50); // hasilnya adalah 10050
console.log(0 * null);
// hasilnya adalah 0  null dianggap angka tidak valid atau tidak mungkin sehingga js mengubahnya menjadi 0
console.log("five" * 4); // hasilnya adalah NaN


~~ BOOLEAN VALUE ~~

// Digunakan saat ada pilihan ya atau tidak
let yes = true;
let no = false;


~~ Logical Operators ~~

let firstName = 'David';

console.log(firstName === 'david'); hasilnya False

// perbedaan == dan === adalah === memberikan sebuah strict comparition dan dicompare tipe valuenya, sedangkan == adalah lose comparition

let firstName = 7';

console.log(firstName == '7'); hasilnya True
console.log(firstName === '7'); hasilnya False

console.log(NaN == NaN); hasilnya False
console.log(NaN === NaN); hasilnya False NaN
// NaN adalah angka yang tidak valid sehingga tidak mungkin sama

!== adalah tidak sama dengan


~~ Object & Array ~~

// Dalam JS semuanya berbentuk object karena JS adalah object oriented
let biodataObject = {
  // key: value
  firstName: 'Bambang',
  lastName: 'Pamungkas',
  makananFavorit: ['Mie Ayam', 'Burger', 'HotDog'],
  istri: {
    firstName: 'Tribuana',
    lastName: 'Tungga Dewi',
    makananFavorit: ['Mie Ayam', 'Burger', 'HotDog']
  },
  anak_perempuan: {
    firstName: 'Salsa',
    lastName: 'Alicia'
  }
}

*/