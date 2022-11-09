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

// membuat properties baru
person.hairColor = "Brown"

// mengubah properties karena resignment value karena keynya sama
person.name.firstName = 'Jane'

console.log(personName)