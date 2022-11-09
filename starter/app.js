// Object

const objects = {
  a: 1,
  b: 3,
  c: 2
}

// Object keys
console.log(Object.keys(objects))

// Object Assign

const object1 = {a: 1, b: 3, c: 2}
const object2 = {c: 4, d: 9}

Object.assign(object1, object2)

console.log(object1)