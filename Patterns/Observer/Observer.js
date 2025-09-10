/**1️⃣ Observer Pattern

👉Concept: An object(Subject) maintains a list of observers and notifies 
them when its state changes.
👉 Analogy: You follow a YouTube channel. When the creator uploads a video, you get notified.
*/


class Subject{
    constructor() {
        this.observers = [];
    }
    
    subcribe(observer) {
       this.observers.push(observer)
    }
    unsubscribe(observer) {
        this.observers=this.observers.filter(observ=> observ !== observer)
    }

    notify(data) {
        this.observers.forEach(observer=>observer.update(data))
    }
}
class Observers{
    update(data) {
        console.log(`Notified with data: ${data}`);
    }
}

const subject = new Subject();
const observer1 = new Observers();
const observer2 = new Observers();
const observer3 = new Observers();

subject.subcribe(observer1);
subject.subcribe(observer2);
subject.subcribe(observer3);
subject.notify('Hello Observers!');
subject.unsubscribe(observer2);
subject.notify('Observer2 has unsubscribed.');
