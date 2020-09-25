module.exports = class Questions {
    constructor() {
        this.questions = {
            easy: [
                { q: 'value of 2+2?', a: 4 },
                { q: 'number of sides of a triangle?', a: 3 },
            ],
            hard: [
                { q: 'what is the diameter of earth?', a: '7,917.5 miles' },
            ]
        };
        this.counters = { easy: 0, hard: 0 };
    }
    getQuestion(difficulty) {
        if (difficulty === 'hard') {
            return this.getHardQuestion();
        } else {
            return this.getEasyQuestion(); // this is also a default case
        }
    }
    getEasyQuestion() {
        if (this.counters.easy >= this.questions.easy.length) {
            return null;
        }
        return this.questions.easy[this.counters.easy++];
    }
    getHardQuestion() {
        if (this.counters.hard >= this.questions.hard.length) {
            return null;
        }
        return this.questions.hard[this.counters.hard++];
    }
}