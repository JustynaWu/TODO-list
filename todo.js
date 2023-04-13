import Storage from "./storage.js";

const storage = new Storage();

class TodoItem {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.isCompleted = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export class TodoList {
  constructor() {
    this.items = storage.getItems("items") || [];
  }

  addItem(title) {
    const id = Math.round(Math.random() * 1000);
    if (Array.isArray(this.items)) {
      this.items.push(new TodoItem(id, title));
    }

    storage.addItem("items", id);
    return id;
  }

  getItems() {
    return [...this.items];
  }

  removeItem(id) {
    this.items = this.items.filter((el) => {
      console.log("index ", el.id);
      console.log("id " + id);
      return el.id !== id;
    });
    storage.removeItem("items", id);
    console.log("removed ", id);
  }
}
