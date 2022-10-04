const todoForm = document.querySelector("#todo-form");
const toDoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function loadToDos() {
  const savedToDos = localStorage.getItem(TODOS_KEY);
  if (savedToDos !== null) {
    toDos = JSON.parse(savedToDos);
    toDos.forEach((todo) => {
      paintTodo(todo);
    });
  }
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();

  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.id = newTodo.id;
  span.innerText = newTodo.text;

  button.addEventListener("click", deleteTodo);
  button.innerText = "❌";

  li.appendChild(span);
  li.appendChild(button);

  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newTodo = toDoInput.value;
  toDoInput.value = "";

  const newTodoObj = { id: Date.now(), text: newTodo };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

loadToDos();
