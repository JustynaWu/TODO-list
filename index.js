// get DOM elements
const form = document.querySelector(".todo-form");
const list = document.querySelector(".todo-list");
const input = document.querySelector(".todo-input");

let todoList = [];

class Todo {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.isCompleted = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

class TodoList {
  static getData() {
    let getData = todoList.map((item) => {
      return `
              <div class="todo-item">
                <h3 class="todo-title">${item.title}</h3>
                  <button class="todo-button todo-button--edit" data-id=${item.id}>&#9998;</button>
                  <button class="todo-button todo-button--remove" data-id=${item.id}>\u00D7</button>
              </div>
          `;
    });
    list.innerHTML = getData.join(" ");
  }
  static clearInput() {
    input.value = "";
  }
  static removeTodo() {
    list.addEventListener("click", (e) => {
      if (e.target.classList.contains("todo-button--remove")) {
        e.target.parentElement.remove();
      }
      let index = e.target.dataset.id;
      todoList = todoList.filter((item) => item.id !== +index);
    });
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let id = Math.random() * 1000;
  const task = new Todo(id, input.value);
  todoList = [...todoList, task];
  TodoList.getData();
  TodoList.clearInput();
  TodoList.removeTodo();
});
