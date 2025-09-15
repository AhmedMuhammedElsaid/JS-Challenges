// Composite Pattern
// 👉 Concept: Treat individual objects and groups of objects uniformly.
// 👉 Analogy: File explorer → file or folder (folder contains files/folders).

class Component {
  render() {}
}

class Leaf extends Component {
  constructor(name) { super(); this.name = name; }
  render() { console.log("Render leaf:", this.name); }
}

class Composite extends Component {
  constructor(name) { super(); this.name = name; this.children = []; }
  add(child) { this.children.push(child); }
  render() {
    console.log("Render composite:", this.name);
    this.children.forEach(c => c.render());
  }
}

// Usage
const menu = new Composite("Menu");
const file = new Leaf("File");
const edit = new Composite("Edit");
edit.add(new Leaf("Undo"));
edit.add(new Leaf("Redo"));

menu.add(file);
menu.add(edit);
menu.render();
