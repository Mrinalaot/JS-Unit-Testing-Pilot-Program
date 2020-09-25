module.exports = class ObserverClass {
    constructor() {
        this.observers = [];
        this.items = [];
    }
    subscribe(funct) {
        this.observers.push(funct);
    }
    push(data) {
        this.items.push(data);
        this.observers.forEach((subscriber) => subscriber(this.items));
    }
    pop() {
        this.items = this.items.pop();
        this.observers.forEach((subscriber) => subscriber(this.items));
    }
}