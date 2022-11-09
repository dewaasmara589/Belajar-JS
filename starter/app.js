// Kumpulkan semua UI element

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-button");

todoForm.addEventListener("submit", addTodo);

function addTodo(e) {
  e.preventDefault();

  // Membuat li element
  const li = document.createElement("li")

  // Menambahkan class pada element li
  li.className = "list-group-item d-flex justify-content-between align-items-center mb-1"

  // Cara 1 Menambahkan children ke dalam element li
  li.appendChild(document.createTextNode("Value dari task input"))

  // Membuat delete button
  const a = document.createElement("a")

  // Memberi properti untuk element
  a.href = "#"
  a.className = "badge badge-danger"

  // Cara 2 Menambahkan child ke dalama element
  a.innerHTML = "Delete"

  // Menyelipkan elemet a ke children li
  li.appendChild(a)

  console.log(li)
}