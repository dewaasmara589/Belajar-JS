// Kumpulkan semua UI element

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");

// Ini adalah kumpulan eventListner

innediateLoadEventListner();

function innediateLoadEventListner() {

  // mendapatkan Todos dari localStorage dan render di browser
  document.addEventListener("DOMContentLoaded", getTodos)

  // Ini adalah event untuk menambahkan Todos
  todoForm.addEventListener("submit", addTodo);

  // Ini adalah event untuk menghapus 1 Todos
  todoList.addEventListener("click", deleteTodo);

  // Ini adalah event untuk menghapus semua Todos
  clearButton.addEventListener("click", clearTodos);

  // Ini adalah event untuk mengfilter Todos
  filterInput.addEventListener("keyup", filterTodos);
}

// Reusable code
function createTodoElement(value) {
  // Membuat li element
  const li = document.createElement("li")

  // Menambahkan class pada element li
  li.className = "todo-item list-group-item d-flex justify-content-between align-items-center mb-1"

  // Cara 1 Menambahkan children ke dalam element li
  li.appendChild(document.createTextNode(value))

  // Membuat delete button
  const a = document.createElement("a")

  // Memberi properti untuk element
  a.href = "#"
  a.className = "badge badge-danger delete-todo"

  // Cara 2 Menambahkan child ke dalama element
  a.innerHTML = "Delete"

  // Menyelipkan elemet a ke children li
  li.appendChild(a)

  // Memasukkan element li yang telah dibuat dengan JS ke dalam element todolist
  todoList.appendChild(li)

  // console.log(li)
}

function getItemFromLocalStorage() {
  let todos;

  if (localStorage.getItem("todos") == null) {
    todos = []
  }else {
    todos = JSON.parse(localStorage.getItem("todos"))
  }

  return todos;
}

// Ini adalah DOM function

function getTodos(e) {
  const todos = getItemFromLocalStorage()

  todos.forEach((todo) => {
    createTodoElement(todo)
  })
}

function addTodo(e) {
  e.preventDefault();

  if (todoInput.value) {
    createTodoElement(todoInput.value)

    addTodoLocalStorage(todoInput.value)

    // Agar input kosong setelah di addTodo
    todoInput.value = ""
  }else {
    alert("Tulis sebuah todo, tidak boleh kosong")
  }
}

function addTodoLocalStorage(todoInputValue) {
  const todos = getItemFromLocalStorage()

  todos.push(todoInputValue)

  localStorage.setItem("todos", JSON.stringify(todos))
}

function deleteTodo(e){
  e.preventDefault(); // Supaya tidak ada page refresh

  // Mengejek jika ui pada web diklik
  // console.log(e.target)

  if (e.target.classList.contains("delete-todo")) {
    if (confirm("Apakah Yakin akan Menghapus ?")) {   // akan menghasilkan nilai true jika ok
      // Mengakses parent element atau li
      const parent = e.target.parentElement;

      parent.remove()

      deleteTodoLocalStorage(parent)

      // Mengecek mana parentnya
      // console.log(parent)
    }
  }
}

function deleteTodoLocalStorage(deletedElement) {
  const todos = getItemFromLocalStorage()  // akan menghapus element li

  todos.forEach((todo, index) => {
    if (deletedElement.firstChild.textContent === todo) {
      todos.splice(index, 1)
    }
  })

  localStorage.setItem('todos', JSON.stringify(todos))
}

function clearTodos() {
  todoList.innerHTML = ""
}

function filterTodos(e) {
  const filterText = e.target.value.toLowerCase()
  const todoItems = document.querySelectorAll(".todo-item")

  todoItems.forEach((item) => {
    // Melihat hasil dari item
    // console.log(item)

    const itemText = item.firstChild.textContent.toLowerCase()

    // Melihat hasil dari itemText
    console.log(itemText)

    if (itemText.indexOf(filterText) !== -1){
      item.setAttribute("style", "display: block;")
    }else{
      item.setAttribute("style", "display: none !important;")
    }  
  })

  // Untuk melihat hasil inputan text filter
  // console.log(filterText)
}