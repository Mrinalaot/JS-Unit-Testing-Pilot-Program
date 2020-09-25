module.exports = class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
        this.satus = '';
    }
    run(speed) {
        this.speed = speed;
        this.status = `${this.name} runs with speed ${this.speed}.`;
    }
    stop() {
        this.speed = 0;
        this.status = `${this.name} stands still.`;
    }
}