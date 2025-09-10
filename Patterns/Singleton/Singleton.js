// Singleton Pattern

// 👉 Concept: Only one instance exists, globally accessible.
// 👉 Analogy: You can only have one active OS clipboard.
    
class Singleton{
    static instance;
    constructor(name) {
        if (Singleton.instance) return Singleton.instance;
        this.name = name;
        Singleton.instance = this;
    }
}

// Usage
const s1 = new Singleton("ThemeManager");
const s2 = new Singleton("AuthManager");

console.log(s1 === s2); // true
