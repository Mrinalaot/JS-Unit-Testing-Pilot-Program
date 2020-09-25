const Animal = require('../src/animal');
module.exports = class Dog extends Animal {
    hide() {
        return `${this.name} hides!`;
    }
    isRunning() {
        if (this.speed) {
            return true;
        }
        return false;
    }
}