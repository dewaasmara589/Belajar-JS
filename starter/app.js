// Object

// Nasted objek adalah jika ada objek dalam objek

const person = {
  name: {
    firstName: 'John',
    lastName: 'Doe'
  },
  age: 25,
  nationality: 'Indonesia'
}

// menghapus object
delete person.nationality

console.log(person)