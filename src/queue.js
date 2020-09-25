module.exports = class Queue {
    constructor() { this.data = []; }
    add(x) {
        if (!x) return;
        this.data.push(x);
    }
    remove() { return this.data.shift(); }
    size() { return this.data.length; }
};