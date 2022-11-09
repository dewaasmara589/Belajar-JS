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

const personName = person.name.firstName;

console.log(personName)

// bracket notation
// const personName2 = person["firstName"]