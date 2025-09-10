// 2️⃣ Pub-Sub Pattern
// 👉 Concept: Publishers emit events, subscribers listen. Unlike Observer,
// they don’t directly know about each other (via Event Bus).
// 👉 Analogy: News agencies publish articles. Readers subscribe to topics.

class PubSub{
    constructor(){
        this.events = {}
    };

    subscribe(event, handler) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(handler)
    }
    publish(event,data) {
        (this.events[event] || []).forEach(handler=>handler(data))
    }
}

// Usage
const bus = new PubSub();
bus.subscribe("search", q => console.log("Searching:", q));
bus.subscribe("search", q => console.log("My bad IT's working dude, :", q));

bus.publish("search", "JavaScript patterns");
