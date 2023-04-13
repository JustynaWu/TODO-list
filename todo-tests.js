import { TodoList } from "./todo.js";

const todo = new TodoList();

const firstItemId = todo.addItem("First item");
const currentItems = todo.getItems();

if (currentItems.length === 1) {
  console.log("there is 1");
} else {
  console.log("there is error");
}

const secondItemId = todo.addItem("Second item");

const currentItems2 = todo.getItems();

const removeItem = todo.removeItem(firstItemId);

if (todo.getItems().length === 1) {
  console.log("item was removed");
} else {
  console.log("item was not removed");
}

console.log(todo.getItems());
