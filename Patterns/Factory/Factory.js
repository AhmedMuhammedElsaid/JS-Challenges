// Factory Pattern
// 👉 Concept: A function/class creates objects without exposing creation logic.
// 👉 Analogy: Starbucks menu: order “Latte”, barista handles details.


class Button{
    constructor(label) {this.label=label}
}

class IconButton{
    constructor(icon){ this.icon=icon}
}

class ComponentFactory{
    static create(type,value) {
        switch (type) {
            case 'button': return new Button(value);
            case 'icon': return new IconButton(value);
            default:return new Error("Unknown Type")
        }
    }
}

// Usage
const btn = ComponentFactory.create("button", "Submit");
console.log(btn);
