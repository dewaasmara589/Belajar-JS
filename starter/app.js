// Array of Object

const tools = [
  {
    text: 'Ini adalah tugas 1',
    isCompleted: false
  },
  {
    text: 'Ini adalah tugas 2',
    isCompleted: true
  },
  {
    text: 'Ini adalah tugas 3',
    isCompleted: false
  },
  {
    text: 'Ini adalah tugas 4',
    isCompleted: true
  }
];

const uncompletedTasks = tools.filter(myFunction)

function myFunction(value) {
  if (value.isCompleted === false) {
    return value
  }
}

console.log(uncompletedTasks)


const todos = [
  {
    text: 'Ini adalah tugas 1',
    isCompleted: false
  },
  {
    text: 'Ini adalah tugas 2',
    isCompleted: true
  },
  {
    text: 'Ini adalah tugas 3',
    isCompleted: false
  },
  {
    text: 'Ini adalah tugas 4',
    isCompleted: true
  }
];

const uncompletedTasks2 = todos.filter(value => {
  if (value.isCompleted === true) {
    return value
  }
})

console.log(uncompletedTasks2)