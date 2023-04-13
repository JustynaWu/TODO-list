import { TodoList } from "./todo.js";

// get DOM elements
const form = document.querySelector(".todo-form");
const list = document.querySelector(".todo-list");
const input = document.querySelector(".todo-input");

let todoList = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let id = Math.random() * 1000;
  const task = new Todo(id, input.value);
  todoList = [...todoList, task];
  TodoList.getData();
  TodoList.clearInput();
  TodoList.removeTodo();
});
