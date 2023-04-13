class Storage {
  addItem(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  removeItem(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  getItems(key) {
    return JSON.parse(window.localStorage.getItem(key));
  }
}

export default Storage;
