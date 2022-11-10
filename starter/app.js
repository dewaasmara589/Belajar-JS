// Kumpulkan semua UI element

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-button");

todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodo);

function addTodo(e) {
  e.preventDefault();

  if (todoInput.value) {
    // Membuat li element
    const li = document.createElement("li")

    // Menambahkan class pada element li
    li.className = "list-group-item d-flex justify-content-between align-items-center mb-1"

    // Cara 1 Menambahkan children ke dalam element li
    li.appendChild(document.createTextNode(todoInput.value))

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

    // Agar input kosong setelah di addTodo
    todoInput.value = ""  
  }else {
    alert("Tulis sebuah todo, tidak boleh kosong")
  }
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

      // Mengecek mana parentnya
      // console.log(parent)
    }
  }
}